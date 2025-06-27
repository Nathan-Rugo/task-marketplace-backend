import { Router } from 'express';
import { mpesaCallBackController } from '../controllers/payment.controller';

const router = Router();

router.post('/mpesa/callback', mpesaCallBackController);

export default router;