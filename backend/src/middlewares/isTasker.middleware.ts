import { RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const isTasker: RequestHandler = async (req, res, next) => {
    try {
        const userId = req.user?.id;
            if (!userId) {
            res.status(401).json({ message: 'Not authorized' });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { isTasker: true },
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        if (!user.isTasker) {
            res.status(403).json({ message: 'You are currently not available as a tasker' });
            return;
        }

        next();
    } catch (error) {
        console.error('isTasker error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
