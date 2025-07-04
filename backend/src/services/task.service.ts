import { Task, TaskStatus } from '../generated/prisma';
import { appliedTask, taskersApplied, userReturned } from '../lib/selectTypes';
import { PrismaClient } from '../generated/prisma';
import { updateReviewStats } from './user.services';

const prisma = new PrismaClient();

export interface CreateTaskDTO{
    title: string;
    description: string;
    category: string;
    location: string;
    offer: number;
}


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
        },
    })

    if (existingApplication) throw new Error('You have already applied for this task');

    const newApplication = await prisma.taskApplications.create({
        data: {
            taskId,
            userId,
        },
        select: {
            appliedAt: true,
            user: {select: userReturned},
            task: {select: appliedTask},
        }
    });

    return newApplication;
};

export async function acceptTask(posterId: string, applicationId: string):Promise<Task>{
    const application = await prisma.taskApplications.findUnique({
        where: { id: applicationId },
        include: { task: true },
    });

    if (!application) throw new Error("Application not found");


    if (application.task.taskPosterId !== posterId) {
        throw new Error("Not authorized to accept this application");
    }

    if (application.status === 'ACCEPTED'){
        throw new Error('PreviouslyAccepted');
    }

    await prisma.taskApplications.update({
        where: { id: applicationId },
        data: { status: "ACCEPTED" },
    });

    await prisma.taskApplications.updateMany({
        where: {
            NOT: [
            { id: applicationId},
            ],
            taskId: application.taskId,
        },
        data: { status: 'DENIED'}
    })

    const updatedTask = await prisma.task.update({
        where: { id: application.taskId },
        data: {
            taskerAssignedId: application.userId,
            status: "IN_PROGRESS",
            updatedAt: new Date()
        },
        include: {
            taskPoster: {select: userReturned},
            taskerAssigned: {select: userReturned}
        }
    });

    return updatedTask;
};

export const confirmPayment = async(taskId: string, userId: string) => {
    await prisma.user.update({
        where: {id: userId},
        data: {
            tasksPosted: {increment: 1}
        }
    });

    const task = await prisma.task.update({
        where: {id: taskId},
        data: {
            status: 'PENDING',
            updatedAt: new Date(),
        },
        select: {
            taskPoster: { select: userReturned },
            taskerAssigned: { select: userReturned },
            taskersApplied: { select: taskersApplied},
        }
    });

    if (!task) throw new Error('NotFound');

    return task;

}
export const completeTask = async(taskId: string, userId: string) => {
    const task = await prisma.task.findUnique({ where: {id: taskId}});
    if (!task) throw new Error('NotFound');

    if(!task.taskerAssignedId) throw new Error('TaskerNotFound');

    if (task.status !== TaskStatus.IN_PROGRESS){
        const err = new Error(`You cannot approve task at ${task.status} status`);
        err.name = 'InvalidStage';
        throw err;
    }

    if (task.taskerAssignedId != userId){
        throw new Error('NotAuthorized')
    }

    return prisma.task.update({
        where: {id: taskId},
        data: {
            status: TaskStatus.REVIEW,
            updatedAt: new Date(),
        },
        include:{
            taskPoster: {select: userReturned},
            taskerAssigned: {select: userReturned}
        }
    })
};

export const cancelTask = async(taskId: string, userId:string) => {
    const user = await prisma.task.findUnique({
        where: {
            id: taskId,
        }
    });

    if (!user) throw new Error('NotFound');

    if(user.taskPosterId !== userId) throw new Error('Unauthorised');

    const task = await prisma.task.update({
        where: {id: taskId, taskPosterId: userId},
        data: {
            status: TaskStatus.CANCELLED,
            updatedAt: new Date()
        },
        include: {
            taskPoster: {select: userReturned},
        }
    });

    return task;
};

export const giveReview = async(taskId:string, reviewerId: string, rating: number, comment: string, revieweeId: string) => {
    if (!rating || !revieweeId || reviewerId) throw new Error('MissingData');
    if (!taskId) throw new Error('MissingTaskId');

    const existingReview = await prisma.review.findFirst({
        where: {
            taskId: taskId,
            reviewerId: reviewerId
        }
    });

    if (existingReview) throw new Error('AlreadyReview');

    await updateReviewStats(revieweeId, rating);

    const review = await prisma.review.create({
        data: {
            taskId: taskId,
            reviewerId: reviewerId,
            revieweeId: revieweeId,
            rating: rating,
            comment: comment,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        select: {
            reviewerId: false,
            revieweeId: false,
            reviewer: {select: userReturned},
            reviewee: {select: userReturned}
        }
    });

    return review;
}

export const approveTaskCompleted = async(taskId: string, userId: string) => {
    const currentStatus = await prisma.task.findUnique({
        where: {id: taskId}
    });

    if (!currentStatus) throw new Error('NotFound');

    if (!currentStatus.taskerAssignedId) throw new Error('Task poster not found');

    if (currentStatus.status === TaskStatus.COMPLETED) throw new Error('AlreadyCompleted');

    if (currentStatus.status !== TaskStatus.IN_PROGRESS && currentStatus.status !== TaskStatus.REVIEW){
        const err = new Error(`You cannot approve task at ${currentStatus.status} status`);
        err.name = 'InvalidStage';
        throw err;
    }

    if (currentStatus.taskPosterId !== userId){
        throw new Error('Unauthorised')
    }

    await prisma.user.update({
        where: {id: currentStatus.taskerAssignedId},
        data: {
            tasksCompleted: {increment: 1}
        }
    })

    const approved = await prisma.task.update({
        where: {id: taskId},
        data:{
            status: TaskStatus.COMPLETED,
            updatedAt: new Date(),
        },
        include:{
            taskPoster: {select: userReturned},
            taskerAssigned: {select: userReturned},
        }
    });

    return approved;
}

