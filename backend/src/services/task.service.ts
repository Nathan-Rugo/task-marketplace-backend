import { PrismaClient, Task, TaskStatus } from '../generated/prisma';
import { userReturned } from '../lib/userReturned';

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
            },
        });
}

export async function findTasks(
    filters?:{   
        status?: string,
        category?: string,
    }): Promise<Task[]>{
        
    const where: any = {};

    if (filters?.status){
        where.status = filters.status;
    }
    if (filters?.category){
        where.category = filters.category
    }

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

export async function acceptTask(posterId: string, applicationId: string):Promise<Task>{
    const application = await prisma.taskApplications.findUnique({
        where: { id: applicationId },
        include: { task: true },
    });

    if (!application) throw new Error("Application not found");

    // Ensure only the poster of the task can accept
    if (application.task.taskPosterId !== posterId) {
        throw new Error("Not authorized to accept this application");
    }

    // Update the application status and assign the task
    await prisma.taskApplications.update({
        where: { id: applicationId },
        data: { status: "ACCEPTED" },
    });

    const updatedTask = await prisma.task.update({
        where: { id: application.taskId },
        data: {
            taskerAssignedId: application.userId,
            status: "IN_PROGRESS",
        },
    });

    return updatedTask;
};

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

    return prisma.task.update({
        where: {id: taskId},
        data: {
            status: 'COMPLETED',
            updatedAt: new Date(),
        }
    })
    
}

