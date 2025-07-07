import express, { Router } from 'express';
import { mpesaCallbackController } from '../controllers/payment.controller';
import { intasendWebhookValidation } from '../middlewares/webhook.middleware';

const router = Router();

router.post('/confirm/callback', express.json(), mpesaCallbackController);

export default router;