// src/services/payment.service.ts
import { PrismaClient, TaskStatus, Task } from '../generated/prisma';
import { userReturned, taskersApplied } from '../lib/selectTypes';

const prisma = new PrismaClient();

export async function mpesaCallBack(taskId: string): Promise<Task> {
    return await prisma.task.update({
        where: { id: taskId },
        data: { status: TaskStatus.PENDING, updatedAt: new Date() },
        include: {
        taskerAssigned: { select: userReturned },
        taskPoster:     { select: userReturned },
        taskersApplied: { select: taskersApplied },
        },
    });
}
