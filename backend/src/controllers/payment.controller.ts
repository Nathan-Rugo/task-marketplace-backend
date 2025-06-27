import { Request, Response } from 'express';
import { PrismaClient, TaskStatus } from '../generated/prisma';
import { Prisma } from '@prisma/client';
import { mpesaCallBack } from '../services/payment.service';

const prisma = new PrismaClient();

export async function mpesaCallBackController (req: Request, res: Response){
    try {
        res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted'});

        const callback = req.body.stkCallBack;
        const { MerchantRequestID, CheckRequestID, ResultCode, ResultDesc} = callback;

        if (ResultDesc !== 0){
            console.warn('STK Push Failed:', ResultDesc);
            return;
        }

        const accountRef = callback.CallbackMetadata?.Item.find((i: any) => i.Name === 'AccountReference')?.Value;
        const taskId = accountRef?.toString().replace(/^Task-/, '');

        if (!taskId){
            console.error('No Task ID in AccountReference');
            return;
        }

        mpesaCallBack(taskId);

        console.log(`Task ${taskId} marked as PENDING after payment`);
    } catch (error) {
        console.error('mpesaCallBack error: ', error)
    }
}
