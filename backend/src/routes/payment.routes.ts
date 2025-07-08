import express, { Router } from 'express';
import { mpesaCallbackController } from '../controllers/payment.controller';

const router = Router();

router.post('/confirm/callback', mpesaCallbackController);

export default router;