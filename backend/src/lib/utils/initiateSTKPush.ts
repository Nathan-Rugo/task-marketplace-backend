import { generateDarajaAccessToken } from './darajaAuthToken';
import axios from 'axios';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export async function initiateSTKPush(phone: string, amount: number, taskId: string, userId: string) {
    const token = await generateDarajaAccessToken();
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0,14);
    const password = Buffer.from(
        process.env.SHORT_CODE! + process.env.PASS_KEY! + timestamp
    ).toString('base64');
    const resp = await axios.post(
        'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
        {
        BusinessShortCode: process.env.SHORT_CODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.SHORT_CODE,
        PhoneNumber: phone,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: `TASK-${taskId}`,
        TransactionDesc: 'Service fee payment',
        },
        { headers: { Authorization: `Bearer ${token}` } }
    );

    const { CheckoutRequestID, MerchantRequestID, ResponseCode, CustomerMessage } = resp.data;

    if (ResponseCode === '0'){
        await prisma.payment.create({
        data: {
            taskId: taskId,
            userId: userId,
            checkoutRequestId: CheckoutRequestID,
            merchantRequestId: MerchantRequestID,
            status: 'PENDING',
            amount: amount,
            createdAt: new Date()
        }
    });
    }

    return { CheckoutRequestID, ResponseCode, CustomerMessage };
}
