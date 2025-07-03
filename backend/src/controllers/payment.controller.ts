import { Request, Response } from 'express';
import { io } from '../index';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

const stkFailureMessages: Record<number, string> = {
    1:    'Insufficient balance or user declined Fuliza overdraft',
    1001: 'Another transaction is in progress, please try again later',
    1019: 'Transaction expired (timed out before PIN entry)',
    1032: 'Transaction cancelled by user',
    1037: 'No response from user (PIN not entered in time)',
    2001: 'Invalid initiator credentials',
    9999: 'Failed to send STK Push request, please contact support',
};


export async function mpesaCallbackController(req: Request, res: Response) {
    console.log('🔥 IntaSend WEBHOOK:', req.body);
    res.sendStatus(200);

    const { data } = req.body;
    const { id: checkoutId, status, api_ref } = data || {};
    const taskId = api_ref?.replace(/^TASK-/, '');
    if (!taskId || !checkoutId) return;

    const task = await prisma.task.findUnique({ where: { id: taskId } });

    if (status === 'FAILED') {
        // mark the task back to CREATED (or however you want to represent failure)
        await prisma.task.update({
        where: { id: taskId },
        data: { status: 'CREATED', updatedAt: new Date() },
        });

        // notify the frontend of the failure
        io.to(checkoutId).emit('paymentResult', {
        checkoutId,
        status: 'FAILED',
        task,
        error: 'Payment failed or was cancelled',
        });

        return;
    }

    // Update if completed
    if (status === 'COMPLETED') {
        await prisma.task.update({
        where: { id: taskId },
        data: { status: 'PENDING', updatedAt: new Date() },
        });

        io.to(checkoutId).emit('paymentResult', {
        checkoutId,
        status: 'PENDING',
        task,
        });
        return;
    }

    // 3️⃣ (Optional) handle other statuses like PENDING
    if (status === 'PENDING') {
        io.to(checkoutId).emit('paymentResult', {
        checkoutId,
        status: 'PENDING',
        task,
        });
    }
}