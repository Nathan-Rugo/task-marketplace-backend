import { Request, Response, NextFunction } from 'express';

export function intasendWebhookValidation(req: Request, res: Response, next: NextFunction) {
    const { challenge } = req.body;
    if (challenge) {
        console.log('🎯 Responding to challenge:', challenge);
        res.status(200).send(challenge);
        return;
    }
    next();
}
