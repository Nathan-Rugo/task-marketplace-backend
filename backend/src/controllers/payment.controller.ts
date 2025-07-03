import { Request, Response } from 'express';
import { io } from '../index';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function mpesaCallbackController(req: Request, res: Response) {
    // 1️⃣ Immediate 200 OK so IntaSend stops retrying
    res.sendStatus(200);

    // 2️⃣ Log the raw webhook so you can inspect it
    console.log('🔥 WEBHOOK body:', JSON.stringify(req.body, null, 2));

    const event = req.body;
    const data = event.data;
    if (!data) {
        console.warn('⚠️ No "data" field in webhook');
        return;
    }

    const { id: checkoutId, state, api_ref } = data;
    const taskId = api_ref?.replace(/^TASK-/, '');
    if (!checkoutId || !taskId) {
        console.warn(`⚠️ Missing checkoutId or taskId — checkoutId=${checkoutId}, taskId=${taskId}`);
        return;
    }

    // 3️⃣ Fetch current task
    const task = await prisma.task.findUnique({ where: { id: taskId } });
    if (!task) {
        console.warn(`⚠️ No task found for id ${taskId}`);
        return;
    }

    // 4️⃣ Branch on state
    switch (state) {
        case 'FAILED':
        await prisma.task.update({
            where: { id: taskId },
            data: { status: 'CREATED', updatedAt: new Date() },
        });
        io.to(checkoutId).emit('paymentResult', {
            checkoutId,
            status: 'FAILED',
            task,
            error: 'Payment failed or was cancelled',
        });
        break;

        case 'COMPLETE':
        case 'COMPLETED': // depending on exact payload key
        await prisma.task.update({
            where: { id: taskId },
            data: { status: 'PENDING', updatedAt: new Date() },
        });
        io.to(checkoutId).emit('paymentResult', {
            checkoutId,
            status: 'PENDING',
            task,
        });
        break;

        case 'PENDING':
        case 'PROCESSING':
        io.to(checkoutId).emit('paymentResult', {
            checkoutId,
            status: 'PENDING',
            task,
        });
        break;

        default:
        console.warn(`⚠️ Unhandled state: ${state}`);
    }
}
