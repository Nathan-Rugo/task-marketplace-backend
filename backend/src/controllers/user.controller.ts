import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// Returns the profile of the authenticated user.
export async function getCurrentUser(req: Request, res: Response) {
    try {
        const userId = req.user?.id;
        if (!userId) {
        res.status(401).json({ message: 'Not authenticated' });
        }

        const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            password: false,
            id: true,
            username: true,
            email: true,
            phone: true,
            profilePicture: true,
            rating: true,
            tasksPosted: true,
            tasksCompleted: true,
            isTasker: true,
            createdAt: true,
            updatedAt: true,
        },
        });

        if (!user) {
        res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('getCurrentUser error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
