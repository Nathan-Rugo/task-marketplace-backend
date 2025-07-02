import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { mpesaCallBack } from '../services/payment.service';
import { io } from '../index';
import { taskersApplied, userReturned } from '../lib/selectTypes';

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

    // Update if completed
    if (status === 'COMPLETED') {
        await prisma.task.update({
        where: { id: taskId },
        data: { status: 'PENDING', updatedAt: new Date() },
        });
    }

    io.to(checkoutId).emit('paymentResult', { checkoutId, status, task });
}