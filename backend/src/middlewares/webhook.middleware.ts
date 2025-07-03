// src/middleware/intasendWebhook.ts
import { Request, Response, NextFunction } from 'express';

export function intasendWebhookValidation(req: Request, res: Response, next: NextFunction) {
    const incoming = req.body?.challenge;
    if (incoming) {
        res.status(200).send(process.env.INTASEND_WEBHOOK_CHALLENGE);
        return;
    }
    next();
}
