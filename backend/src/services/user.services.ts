import { PrismaClient, Task, TaskStatus } from '../generated/prisma';
import { userReturned } from '../lib/userReturned';

const prisma = new PrismaClient();

type User = {
    id: string;
    username: string;
    email: string;
    phone: string | null;
    profilePicture: string | null;
    rating: number;
    tasksPosted: number;
    tasksCompleted: number;
    isTasker: boolean;
    createdAt: Date;
    updatedAt: Date;
};



export async function findUser(userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: userReturned
    });

    if (!user) throw new Error('NotFound');

    return user;
}


export async function getTasksByUserId(userId: string): Promise<{
    asTasker: Task[];
    asPoster: Task[];
    }> {
    const asTasker = await prisma.task.findMany({
        where: {
        taskerAssignedId: userId,
        status: { in: [TaskStatus.IN_PROGRESS, TaskStatus.COMPLETED] },
        },
        orderBy: { updatedAt: 'desc' },
    });

    const asPoster = await prisma.task.findMany({
        where: {
        taskPosterId: userId,
        status: { in: [TaskStatus.CREATED, TaskStatus.IN_PROGRESS, TaskStatus.COMPLETED] },
        },
        orderBy: { updatedAt: 'desc' },
        include: {
            taskerAssigned: {select: userReturned},
            taskPoster: {select: userReturned},
        }
    });

    return { asTasker, asPoster };
}
