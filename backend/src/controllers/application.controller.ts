import { Request, Response} from 'express';
import { acceptTask, getTaskApplicationsByTaskId } from '../services/application.service';

export const acceptTaskController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const applicationId = req.params.applicationId;

        if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        }

        if (!applicationId) {
        res.status(400).json({ message: 'Bad Request', details: ' Application ID is required' });
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

export const getTaskApplicationsByTaskIdController = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id;
        const taskApplications = await getTaskApplicationsByTaskId(taskId);
        res.status(200).json({ message: 'Task Applications Found', taskApplications})
    } catch (error: any) {
        console.error('getTaskApplicationsByTaskId error: ', error);
        if (error.message === 'NotFound'){
            res.status(404).json({ message: 'Task applications not found '});
        }

        if (error.message === 'InvalidTaskId'){
            res.status(404).json({ message: 'Invalid task id', details: 'Task does not exist'})
        }

        res.status(500).json({ message: 'Internal Server Error'});
    }
    
}
