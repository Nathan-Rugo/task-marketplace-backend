import { Request, Response } from 'express';
import { upload } from '../lib/utils/multer';
import { uploadToCloud } from '../lib/utils/uploadToCloud';
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

export async function getUserDetailsController(req: Request, res: Response) {
    try {
        const userId = req.params.id;
        
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

export const editProfileController = [
    upload.single('image'),
    async (req: Request, res: Response) => {
        try {
        const userId = req.user?.id;
        if (!userId) res.status(401).json({ message: 'Missing user id' });

        const body = req.body as any;
        if (req.file) {
            const { url } = await uploadToCloud(req.file);
            body.profilePicture = url;
        }

        const user = await editProfile(userId, body);
        res.status(202).json({ message: 'User details updated', user });
        } catch (error: any) {
        console.error('editProfileController error:', error);
        if (error.message === 'InvalidName') res.status(403).json({ message: 'Invalid username' });
        if (error.message === 'InvalidEmail') res.status(403).json({ message: 'Invalid email', detail: 'Use a valid Strathmore address.' });
        if (error.message === 'InvalidPhone') res.status(403).json({ message: 'Invalid phone number', detail: 'Enter a 07xxxxxxxx' });
        if (error.message === 'Invalid file type') res.status(406).json({ message: 'Invalid file type', detail: 'File is over 5MB. Please upload a smaller file'});
        res.status(500).json({ message: 'Internal Server Error' });
        }
    }
];
