import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { confirmPayment } from '../services/task.service';
import { io } from '../index';

const prisma = new PrismaClient();

type MpesaItem = { Name: string; Value?: any };

export async function mpesaCallbackController(req: Request, res: Response) {
    console.log('📲 M-PESA callback received:', JSON.stringify(req.body));

    try {
        const stk = req.body.Body?.stkCallback;
        if (!stk) {
            console.warn('Missing stkCallback in request body');
            res.status(400).json({ ResultCode: 1, ResultDesc: 'Missing stkCallback' });
            return;
        }

        const { ResultCode, CheckoutRequestID, CallbackMetadata } = stk;

        if (ResultCode !== 0 || !CallbackMetadata) {
            console.warn('STK push failed or missing metadata');
            res.status(400).json({ ResultCode: 1, ResultDesc: 'Transaction failed or no metadata' });
            return;
        }

        // Extract metadata
        const metad = (CallbackMetadata.Item as MpesaItem[]).reduce<Record<string, any>>((acc, item) => {
            if (item.Value !== undefined) acc[item.Name] = item.Value;
            return acc;
        }, {});

        // Find payment
        const payment = await prisma.payment.findUnique({
            where: { checkoutRequestId: CheckoutRequestID },
        });

        if (!payment) {
            console.error('❌ Payment not found for CheckoutRequestID:', CheckoutRequestID);
            res.json({ ResultCode: 1, ResultDesc: 'Unknown request – payment not found' });
            return;
        }

        // Confirm payment
        const task = await confirmPayment(payment.taskId, payment.userId, {
            amount: metad.Amount,
            receipt: metad.MpesaReceiptNumber,
            paidAt: new Date(),
        });

        // Emit real-time update
        io.emit(`payment:${payment.taskId}`, { status: 'PENDING', task });

        res.json({ ResultCode: 0, ResultDesc: 'Accepted' });

    } catch (error) {
        console.error('❌ Error handling M-PESA callback:', error);
        res.status(500).json({ ResultCode: 1, ResultDesc: 'Internal Server Error' });
    }
}
