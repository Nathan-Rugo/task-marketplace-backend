import { PrismaClient, Task, TaskStatus, TaskApplications, TaskApplicationStatus } from '../generated/prisma';
import { appliedTask, taskersApplied, userReturned } from '../lib/selectTypes';

export interface CreateTaskDTO{
    title: string;
    description: string;
    category: string;
    location: string;
    offer: number;
}

const prisma = new PrismaClient();


// Create a new task posted by userId.
export async function createTask(
    userId: string,
    dto: CreateTaskDTO
): Promise<Task> {
    await prisma.user.update({
        where: {id: userId},
        data: {
            tasksPosted: {increment: 1}
        }
    })
    
    return prisma.task.create({
        data: {
            title:       dto.title,
            description: dto.description,
            category:    dto.category,
            location:    dto.location,
            offer:       dto.offer,
            // Link the poster by their user ID
            taskPoster: {
                connect: { id: userId },
            },
            updatedAt: new Date()
            },
        include: {
            taskPoster: {select: userReturned},
        }
        });
}

export async function findTasks(
    filters?:{   
        status?: string,
        category?: string,
        userId?: string,
    }): Promise<Task[]>{
        
    const where: any = {};

    if (filters?.status){
        where.status = filters.status;
    }
    if (filters?.category){
        where.category = filters.category;
    }

    if (filters?.userId){
        where.taskPosterId = { not: filters.userId};
    }

    where.taskerAssignedId = null;

    return prisma.task.findMany({
        where,
        orderBy: {createdAt: 'desc'},
        include: {
            taskerAssigned: {select: userReturned},
            taskPoster: {select: userReturned},
        }
    });
}

export async function findTasksById(taskId: string):Promise<Task>{
    const task = await prisma.task.findUnique({
        where: {id: taskId},
        include: {
            taskerAssigned: {select: userReturned},
            taskPoster: {select: userReturned},
        }
    });

    if (!task) {
        throw new Error('Task not found');
    }
    
    return task;
}

export async function applyForTask(userId: string, taskId: string):Promise<any>{
    // Checks if task exists
    const task = await prisma.task.findUnique({
        where: {id: taskId}
    });

    if (!task) throw new Error('Task not found');

    // Prevent applying for own task
    if (task.taskPosterId === userId){
        throw new Error('You cannot apply for your own task');
    }


    const existingApplication = await prisma.taskApplications.findFirst({
        where: {
            taskId,
            userId,
        }
    })

    if (existingApplication) throw new Error('You have already applied for this task');

    const newApplication = await prisma.taskApplications.create({
        data: {
            taskId,
            userId,
        },
        include: {
            user: {select: userReturned},
            task: {select: appliedTask}
        }
    });

    return newApplication;
}

export const completeTask = async(taskId: string, userId: string) => {
    const task = await prisma.task.findUnique({ where: {id: taskId}});
    if (!task) throw new Error('NotFound');

    if (task.taskerAssignedId !== userId && task.taskPosterId !== userId){
        throw new Error('NotAuthorized')
    }

    await prisma.user.update({
        where: {id: userId},
        data: {
            tasksCompleted: {increment: 1}
        }
    })

    return prisma.task.update({
        where: {id: taskId},
        data: {
            status: TaskStatus.COMPLETED,
            updatedAt: new Date(),
        }
    })
}

