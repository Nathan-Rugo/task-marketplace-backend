import { Task, TaskApplicationStatus, TaskApplications } from "../generated/prisma";
import { userReturned } from "../lib/selectTypes";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();


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
            { taskId: application.taskId }
        ]},
        data: { status: 'DENIED'}
    })

    const updatedTask = await prisma.task.update({
        where: { id: application.taskId },
        data: {
            taskerAssignedId: application.userId,
            status: "IN_PROGRESS",
        },
        include: {
            taskPoster: {select: userReturned},
            taskerAssigned: {select: userReturned}
        }
    });

    return updatedTask;
};

export const getTaskApplicationsByTaskId = async(taskId: string): Promise<TaskApplications[]> => {
    const task = await prisma.task.findUnique({
        where: {id: taskId},
        select: {
            id: true
        }
    });

    if (!task?.id) throw new Error('InvalidTaskId');

    const tasksApplications = await prisma.taskApplications.findMany({
        where: {
            taskId: taskId,
            status: TaskApplicationStatus.PENDING
        },
        include:{
            task: true,
            user: {select: userReturned}
        }
    })

    if (!tasksApplications) throw new Error('NotFound');

    return tasksApplications;
}