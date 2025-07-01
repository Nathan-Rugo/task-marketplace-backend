import { Request, Response } from 'express';
import { findUser, getTasksByUserId, toggleAvailability, editProfile } from '../services/user.services';

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

export const toggleAvailabilityController = async(req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(400).json({ message: 'Missing user Id' });
        }

        const user = await toggleAvailability(userId);
        var option;
        if (user.isTasker){
            option = 'on'
        }
        else{
            option = 'off'
        }
        res.status(200).json({ message: `Availability toggled ${option}`, user});
    } catch (error) {
        console.error('toggleAvailabilityController error: ', error);

        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const editProfileController = async(req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const body = req.body

        if(!userId) res.status(401).json({message: 'Missing user id'});

        const user = await editProfile(userId, body);
        res.status(202).json({ message: 'User details updated', user});
    } catch (error: any) {
        console.error('editProfileController error: ', error);

        if (error.message === 'InvalidName'){
            res.status(403).json({ message: 'Invalid username' });
        }

        if (error.message === 'InvalidEmail'){
            res.status(403).json({ message: 'Invalid email', detail: 'Please use a valid Strathmore email address.'});
        }

        if (error.message === 'InvalidPhone'){
            res.status(403).json({ message: 'Invalid phone number', detail: 'Please enter a 07xxxxxxxx'});
        }
        res.status(500).json({ message: 'Internal Server Error'})
    }
}
