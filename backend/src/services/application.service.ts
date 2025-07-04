import { TaskApplicationStatus, TaskApplications } from "../generated/prisma";
import { userReturned } from "../lib/selectTypes";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

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
    console.log(tasksApplications);
    return tasksApplications;
}