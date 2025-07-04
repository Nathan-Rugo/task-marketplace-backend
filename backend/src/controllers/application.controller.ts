import { Request, Response} from 'express';
import { getTaskApplicationsByTaskId } from '../services/application.service';


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
