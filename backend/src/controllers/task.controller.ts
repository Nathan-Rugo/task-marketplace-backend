import { Request, Response } from 'express';
import { createTask, CreateTaskDTO, findTasks, findTasksById, applyForTask, confirmPayment, completeTask, cancelTask, giveReview, approveTaskCompleted} from '../services/task.service';
import { initiateSTKPush } from '../lib/utils/initiateSTKPush';
import { PrismaClient, TaskStatus } from '../generated/prisma';

const prisma = new PrismaClient();

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
};

export const completeTaskController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const taskId = req.params.id;
        if (!taskId || !userId) {
            res.status(400).json({ message: 'Missing user or task ID' });
        }
        const completed = await completeTask(taskId, userId);
        res.status(200).json({ message: 'Yey 🙌🏾! You have completed your task. Under review', data: completed })
    } catch (error: any) {
        console.error('completeTaskController error:', error);

        if (error.message === 'NotFound') {
        res.status(404).json({ message: 'Task not found' });
        }

        if (error.message === 'NotAuthorized') {
        res.status(403).json({ message: 'You are not authorized to complete this task' });
        }

        if (error.message === 'TaskerNotFound') {
        res.status(403).json({ message: 'Tasker not found', detail: 'No tasker has been selected' });
        }
        
        if (error.name === 'InvalidStage'){
            res.status(401).json({ message: error.message});
            return;
        }

        res.status(500).json({ message: 'Something went wrong' });
    }
}

export const confirmPaymentController = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id;
        const userId = req.user?.id;
        const { phoneNumber } = req.body;

        if (!userId){
            res.status(401).json({ message: 'Missing user id' });
            return
        }
        if (!phoneNumber){
            res.status(400).json({ message: 'Phone number is required' });
            return;
        }

        let formattedPhone: string;

        if (phoneNumber.startsWith('0')) {
            formattedPhone = '254' + phoneNumber.slice(1);
        } else if (phoneNumber.startsWith('+254')) {
            formattedPhone = phoneNumber.slice(1);
        } else if (phoneNumber.startsWith('254')) {
            formattedPhone = phoneNumber;
        } else {
            res.status(400).json({ message: 'Invalid phone number format' });
            return
        }

        const serviceFee = 2;

        const { CheckoutRequestID } = await initiateSTKPush(formattedPhone, serviceFee, taskId, userId);

        const task = await prisma.task.update({
            where: { id: taskId, status: TaskStatus.CREATED},
            data: {
                status: 'PENDING',
                updatedAt: new Date()
            }
        });

        res.status(202).json({
            message: 'STK Push initiated',
            task
        });
        
    } catch (error: any) {
        console.error('confirmPaymentController error:', error);
        res.status(500).json({ message: 'Unable to initiate payment' });
    }
};



export const cancelTaskController = async (req: Request, res: Response) => {
    try {
        const taskId = req.params.id;
        const userId = req.user?.id;

        if (!taskId) throw new Error('MissingTaskId');
        if(!userId) throw new Error('MissingUserId');

        const task = await cancelTask(taskId, userId);
        res.status(200).json({ message: 'Task has been cancelled', task});
    } catch (error: any) {
        console.error('cancelTaskController error:', error);
        if (error.message === 'InvalidTaskId'){
            res.status(401).json({ message:'Missing task id'});
            return;
        }

        if (error.message === 'MissingUserId'){
            res.status(401).json({ message:'Missing user id'})
            return;
        }

        if (error.message === 'NotFound'){
            res.status(404).json({ message:'No such user found'})
            return;
        }

        if (error.message === 'Unauthorised'){
            res.status(401).json({ message:'Unauthorised', details: 'You are not authorized to cancel the task'})
            return;
        }
    }
}

export const giveReviewController = async (req: Request, res: Response) => {
    try{
        const taskId = req.params.taskId;
        const reviewerId = req.user?.id;
        const { rating, comment, revieweeId } = req.body;

        const review = await giveReview(taskId, reviewerId, rating, comment || undefined, revieweeId);

        res.status(201).json({message: 'Review submitted!', review});
    }catch(error: any){
        console.error('giveReviewController error: ', error);

        if (error.message === 'MissingData'){
            res.status(404).json({ message: 'Missing Data', details: 'Ensure rating, revieweeId and reviewerId'});
            return;
        }
        if (error.message ==='MissingTaskId'){
            res.status(405).json({ message: 'Missing Task Id' });
            return;
        }
        if (error.message === 'AlreadyReview'){
            res.status(406).json({ message: 'You have already left a review'});
            return
        }

        if (error.message === 'NotAuthorised'){
            res.status(401).json({message: 'You are not authorised to give a review'});
            return;
        }

        if (error.message === 'TaskNotFound'){
            res.status(401).json({message: 'Task not found'});
            return
        }

        res.status(500).json({ message: 'Internal Server Error '});
    }
    
}

export const approveTaskCompletedController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const taskId = req.params.taskId;

        if (!userId){
            res.status(404).json({ message: 'Missing user id'});
            return;
        }

        if (!taskId){
            res.status(404).json({ message: 'Missing task id'});
        }

        const approvedTask = await approveTaskCompleted(taskId, userId);

        res.status(202).json({message: 'Task approved', approvedTask});

    } catch (error: any) {
        console.error('approveTaskCompletedController error: ', error);

        if (error.message === 'NotFound'){
            res.status(404).json({ message: 'Task does not exist'});
            return;
        }

        if (error.message === 'AlreadyCompleted'){
            res.status(401).json({ message: 'You have already approved this task'})
        }

        if(error.message === 'Unauthorised'){
            res.status(401).json({ message: 'You are not authorised to approve this task'})
            return;
        }
        
        if (error.name === 'InvalidStage')
            res.status(401).json({ message: error.message});
            return;
        }
        
        res.status(500).json('Internal Server Error');
}
