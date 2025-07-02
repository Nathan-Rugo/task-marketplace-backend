import { generateDarajaAccessToken } from "./darajaAuthToken"
import axios from "axios";

export const initiateSTKPush = async (
    phone: string,
    amount: number,
    taskId: string
    ): Promise<{
    MerchantRequestID: string;
    CheckoutRequestID: string;
    ResponseCode:     string;
    ResponseDescription: string;
    }> => {
    const token = await generateDarajaAccessToken();

    const shortCode = process.env.SHORT_CODE;
    const passKey = process.env.PASS_KEY;
    const timeStamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);

    const password = Buffer.from(`${shortCode}${passKey}${timeStamp}`).toString('base64');

    const payload = {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timeStamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: shortCode,
        PhoneNumber: phone,
        CallBackURL: 'https://task-marketplace-backend.onrender.com/payments/mpesa/callback',
        AccountReference: `Task-${taskId}`,
        TransactionDesc: 'Payment for task on Task Marketplace',
    }

    const { data } = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
        payload,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": 'application/json'
            },
        }
    );

    return {
        MerchantRequestID:   data.MerchantRequestID,
        CheckoutRequestID:   data.CheckoutRequestID,
        ResponseCode:        data.ResponseCode,
        ResponseDescription: data.ResponseDescription,
    };
};