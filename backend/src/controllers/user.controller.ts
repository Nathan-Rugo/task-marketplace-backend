import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { findUser, getTasksByUserId } from '../services/user.services';

const prisma = new PrismaClient();

// Returns the profile of the authenticated user.
export async function getCurrentUserController(req: Request, res: Response) {
    try {
        const userId = req.user?.id;
        
        const user = await findUser(userId);

        res.status(200).json({message: 'User info fetched successfully', user});
    } catch (error: any) {
        console.error('getCurrentUser error:', error);
        if (error.message == 'NotFound'){
            res.status(404).json({message: 'User not found'})
        }
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getTasksByUserIdController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(400).json({ message: 'Missing user Id' });
        }

        const tasks = await getTasksByUserId(userId);
        res.status(200).json({ message: 'Tasks fetched successfully', tasks});

    } catch (error) {
        console.error('completeTaskController error:', error);
        res.status(500).json({ message: 'Something went wrong'});
        
    }  
}
