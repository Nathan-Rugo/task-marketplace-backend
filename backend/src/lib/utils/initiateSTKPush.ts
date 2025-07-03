import client from './intasend';

export async function initiateSTKPush(phone: string, amount: number, taskId: string) {
    try {
        const resp = await client.collection().mpesaStkPush({
            amount,
            currency: 'KES',
            phone_number: phone,
            api_ref: `TASK-${taskId}`,
            callback_url: process.env.MPESA_CALLBACK_URL!,
        });
        return resp;
    } catch (error: any) {
        console.error('STK Push Error', error.response?.data || error);
        throw error;  // so your `confirmPaymentController` can return a 400/500
    }
}