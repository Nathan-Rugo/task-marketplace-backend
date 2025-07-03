import { Request, Response } from 'express';
import { createTask, CreateTaskDTO, findTasks, findTasksById, applyForTask, confirmPayment, completeTask } from '../services/task.service';
import { initiateSTKPush } from '../lib/utils/initiateSTKPush';

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
        const userId = req.user?.id as string | undefined;

        const tasks = await findTasks({status, category, userId});
        
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
        let formattedPhoneNumber;

        if (!phoneNumber) {
        res.status(400).json({ message: 'Phone number is required' });
        return;
        }

        if (phoneNumber.startsWith('0')) {
            formattedPhoneNumber = '254' + phoneNumber.slice(1);
        }

        if (phoneNumber.startsWith('254')) {
            formattedPhoneNumber = phoneNumber;
        }

        const serviceFee = 2;

        /*const stkResponse = await initiateSTKPush(formattedPhoneNumber, serviceFee, taskId);
        res.status(202).json({
            message: 'STK Push initiated; enter your PIN on your phone.',
            checkoutId: stkResponse.id,
        });*/

        const task = await confirmPayment(taskId);
        res.status(202).json({ message: "Payment successful", task});

    } catch (error: any) {
        console.error('confirmPaymentController error:', error);
        
        if (error.message === 'NotFound'){
            res.status(404).json({ message: 'Task not found'})
            return;
        }
        res.status(500).json({ message: 'Unable to process payment' });
    }
};
