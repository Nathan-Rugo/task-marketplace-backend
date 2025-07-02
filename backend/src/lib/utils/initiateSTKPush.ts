import client from './intasend';

export async function initiateSTKPush(phone: string, amount: number, taskId: string) {
    const resp = await client.collection().mpesaStkPush({
        amount,
        currency: 'KES',
        phone_number: phone,
        api_ref: `TASK-${taskId}`,
        callback_url: process.env.MPESA_CALLBACK_URL!,
    });
    return resp;
}