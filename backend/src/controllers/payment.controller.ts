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

export async function mpesaCallBackController(req: Request, res: Response) {
    console.log('🔥 MPESA CALLBACK BODY:', JSON.stringify(req.body, null, 2));
    res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' });
    try {
        const callback = req.body?.Body?.stkCallback;
        if (!callback) {
        console.error('mpesaCallBackController: missing Body.stkCallback');
        return;
    }

    const {
        CheckoutRequestID,
        ResultCode,
        ResultDesc,
        CallbackMetadata,
    } = callback;

    const accountRefItem = CallbackMetadata?.Item.find(
        (i: any) => i.Name === 'AccountReference'
    );
    const accountRef = accountRefItem?.Value as string | undefined;
    const taskId = accountRef?.replace(/^Task-/, '');
    if (!taskId) {
        console.error('mpesaCallBackController: no Task ID found');
        return;
    }

    if (ResultCode !== 0) {
        const friendly = stkFailureMessages[ResultCode] || ResultDesc;
        console.warn(`STK Push failed (code ${ResultCode}): ${friendly}`);

        const originalTask = await prisma.task.findUnique({
            where: { id: taskId },
            include: {
            taskerAssigned: { select: userReturned },
            taskPoster:     { select: userReturned },
            taskersApplied: { select: taskersApplied },
        }

    });


    io.to(CheckoutRequestID).emit('paymentResult', {
        checkoutId: CheckoutRequestID,
        status:     'CREATED',
        task:       originalTask,
        error:      friendly,
    });
    }

    const updatedTask = await mpesaCallBack(taskId);

    console.log(`Task ${taskId} marked as PENDING after payment`);

    io.to(CheckoutRequestID).emit('paymentResult', {
        checkoutId: CheckoutRequestID,
        status:     'PENDING',
        task:       updatedTask,
    });
} catch (err) {
    console.error('mpesaCallBackController error:', err);
}
}
