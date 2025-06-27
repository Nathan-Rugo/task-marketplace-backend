import { Request, Response} from 'express';
import { acceptTask } from '../services/application.service';

export const acceptTaskController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const applicationId = req.params.applicationId;

        if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        }

        if (!applicationId) {
        res.status(400).json({ message: 'Bad Request: Application ID is required' });
        }

        const acceptedApplication = await acceptTask(userId, applicationId);

        res.status(200).json({ message: 'Task accepted', data: acceptedApplication });

    } catch (error: any) {
        console.error("acceptTaskController error:", error);

        if (error.message === 'Application not found') {
        res.status(404).json({ message: error.message });
        }

        if (error.message === 'Not authorized to accept this application') {
        res.status(403).json({ message: error.message });
        }

        if (error.message === 'PreviouslyAccepted'){
            res.status(409).json({ message: 'You have already accepted this task'})
        }

        res.status(500).json({ message: 'Internal server error' });
    }
};