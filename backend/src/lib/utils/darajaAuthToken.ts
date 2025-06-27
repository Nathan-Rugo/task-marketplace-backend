import axios from 'axios';

export const generateDarajaAccessToken = async(): Promise<String> => {
    const consumerKey = process.env.CONSUMER_KEY!;
    const consumerSecret = process.env.CONSUMER_SECRET!;
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
        headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/json'
        }
    });

    return response.data.access_token as String;
}