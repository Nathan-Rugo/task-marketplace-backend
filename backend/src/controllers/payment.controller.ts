import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { confirmPayment } from '../services/task.service';
import {io} from '../index';

const prisma = new PrismaClient();

export async function mpesaCallbackController(req: Request, res: Response) {
    const stk = req.body.Body.stkCallback;
    const { ResultCode, CheckoutRequestID, CallbackMetadata } = stk;

    if (ResultCode === 0 && CallbackMetadata) {
        type MpesaItem = { Name: string; Value?: any };
        const metad = (CallbackMetadata.Item as MpesaItem[])
        .reduce<Record<string, any>>((acc, item) => {
            if (item.Value !== undefined) acc[item.Name] = item.Value;
            return acc;
        }, {});

        const payment = await prisma.payment.findUnique({
        where: { checkoutRequestId: CheckoutRequestID },
        });
        if (!payment) {
            res.json({ ResultCode: 1, ResultDesc: 'Failed – unknown request' });
            return;
        }

        const task = await confirmPayment(payment.taskId, payment.userId, {
            amount: metad.Amount,
            receipt: metad.MpesaReceiptNumber,
            paidAt: new Date(),
        });

        io.emit(`payment:${payment.taskId}`, { status: 'PENDING', task });
    }

    res.json({ ResultCode: 1, ResultDesc: 'Failed' });
}

