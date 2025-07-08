import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { confirmPayment } from '../services/task.service';
import { io } from '../index';

const prisma = new PrismaClient();

type MpesaItem = { Name: string; Value?: any };

export async function mpesaCallbackController(req: Request, res: Response) {
    console.log('📲 M-PESA callback received:', JSON.stringify(req.body));

    res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted. Request is being processed.' });

    (async () => {
        try {
            const stk = req.body.Body?.stkCallback;
            if (!stk) {
                console.error('[Background] EXITING: Missing stkCallback in request body.');
                return;
            }

            const { ResultCode, CheckoutRequestID, CallbackMetadata } = stk;

            if (ResultCode !== 0 || !CallbackMetadata) {
                console.warn(`[Background] STK push failed for ${CheckoutRequestID}. ResultCode: ${ResultCode}`);
                return;
            }

            const metad = (CallbackMetadata.Item as MpesaItem[]).reduce<Record<string, any>>((acc, item) => {
                if (item.Value !== undefined) acc[item.Name] = item.Value;
                return acc;
            }, {});

            const payment = await prisma.payment.findUnique({
                where: { checkoutRequestId: CheckoutRequestID },
            });

            if (!payment) {
                console.error(`[Background] ❌ Payment not found for CheckoutRequestID: ${CheckoutRequestID}`);
                return;
            }

            console.log(`[Background] Starting payment confirmation for Task ID: ${payment.taskId}`);

            const task = await confirmPayment(payment.taskId, payment.userId, {
                amount: metad.Amount,
                receipt: metad.MpesaReceiptNumber,
                paidAt: new Date(),
            });
            console.log(`[Background] ✅ Successfully confirmed payment for Task ID: ${payment.taskId}`);

            io.emit(`payment:${payment.taskId}`, { status: 'PENDING', task });

        } catch (error) {
            console.error('❌ [Background] CRITICAL ERROR handling M-PESA callback:', error);
        }
    })();
}