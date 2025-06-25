import { Request, Response } from 'express';
import { acceptTask, createTask, CreateTaskDTO, findTasks, findTasksById, applyForTask, completeTask, confirmPayment } from '../services/task.service';

export async function postTask(req: Request, res: Response){
    try{
        const userId = req.user!.id;


        const dto: CreateTaskDTO = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            location: req.body.location,
            offer: req.body.offer
        };

        const task = await createTask(userId, dto);

        res.status(201).json({message: 'Task created', task});
    }
    catch(error){
        console.error('postTask error: ', error);
        res.status(500).json({message: "Unable to create task"})
    }
}

export async function getTasks(req: Request, res: Response){
    try {
        const status = req.query.status as string | undefined;
        const category = req.query.category as string | undefined;

        const tasks = await findTasks({status, category});
        
        res.status(200).json({message: 'Tasks successfully fetched', tasks});
    } catch (error) {
        console.error('getTasks error', error);
        res.status(500).json({ message: "Unable to fetch tasks" });
    }
}


export async function getTasksById(req: Request, res: Response){
    try {
        const {id} = req.params;
        const task = await findTasksById(id);
        res.status(200).json({message: 'Task successfully fetched', task});
    } catch (error: any) {
        if (error.message === 'NotFound'){
            res.status(404).json({message: 'Task not found'});
        }

        console.error("getTasksById error: ", error);
        res.status(500).json({message: "Unable to fetch task"});
    }
}

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

        res.status(500).json({ message: 'Internal server error' });
    }
};

export const applyForTaskController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const { taskId } = req.params;

        if (!taskId || !userId){
            res.status(400).json({ message: "Missing task id or user id"});
        }
        const application = await applyForTask(userId, taskId);
        res.status(201).json({message: 'Task application submitted', data: application});
    } catch (error: any) {
        console.error('applyForTaskController error', error);
        res.status(400).json({message: error.message || 'Failed to apply for task'});
    }
}

export const completeTaskController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const taskId = req.params.id;
        if (!taskId || !userId) {
            res.status(400).json({ message: 'Missing user or task ID' });
        }
        const completed = await completeTask(taskId, userId);
        res.status(200).json({ message: 'Task marked as completed', data: completed })
    } catch (error: any) {
        console.error('completeTaskController error:', error);

        if (error.message === 'NotFound') {
        res.status(404).json({ message: 'Task not found' });
        }

        if (error.message === 'NotAuthorized') {
        res.status(403).json({ message: 'You are not authorized to complete this task' });
        }

        res.status(500).json({ message: 'Something went wrong' });
    }
}


export const confirmPaymentController = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id;
        const { phoneNumber } = req.body;       

        const task = await confirmPayment(taskId, phoneNumber);
        res.status(200).json({ message: 'Payment confirmed', data: task });

    } catch (error: any) {
        console.error('confirmPaymentController error:', error);

        if (error.message === 'TaskNotFound') {
        res.status(404).json({ message: 'Task not found' });
        }
        res.status(500).json({ message: 'Unable to confirm payment' });
    }
};

