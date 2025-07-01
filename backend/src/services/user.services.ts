import { PrismaClient, Task, TaskStatus, TaskApplicationStatus} from '../generated/prisma';
import { userReturned, appliedTask, taskStatusAppliedFilter } from '../lib/selectTypes';
import { isTasker } from '../middlewares/isTasker.middleware';

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

type AppliedInfo = {
    id: String
    appliedAt: Date;
    status: TaskApplicationStatus;
    task:     Task;
}


export async function findUser(userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: userReturned
    });

    if (!user) throw new Error('NotFound');

    return user;
}


export async function getTasksByUserId(userId: string): Promise<{
    assigned: Task[];
    posted: Task[];
    applied: AppliedInfo[];
    }> {
    const assigned = await prisma.task.findMany({
        where: {
        taskerAssignedId: userId,
        status: { in: [TaskStatus.IN_PROGRESS, TaskStatus.REVIEW] },
        },
        orderBy: { updatedAt: 'desc' },
    });

    const posted = await prisma.task.findMany({
        where: {
        taskPosterId: userId,
        status: { in: [TaskStatus.CREATED, TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.REVIEW, TaskStatus.COMPLETED] },
        },
        orderBy: { updatedAt: 'desc' },
        include: {
            taskerAssigned: {select: userReturned},
            taskPoster: {select: userReturned},
        }
    });

    const applied = await prisma.taskApplications.findMany({
        where: {
            userId: userId,
            task: taskStatusAppliedFilter,
        },
        select: {
            id: true,
            appliedAt: true,
            status: true,
            task: {select: appliedTask},
        },
    });

    return { assigned: assigned, posted: posted, applied: applied};
}

export async function toggleAvailability(userId: string): Promise<User>{
    const toggle = await prisma.user.findUnique({
        where: {id: userId},
        select: {
            isTasker: true
        }
    });


    const user = await prisma.user.update({
        where: {id: userId},
        data: {
            isTasker: !toggle?.isTasker
        },
        select: userReturned
    });

    return user;
}

export async function editProfile(userId: string, body: User): Promise<User>{
    const name = body.username;
    const email = body.email;
    const phone = body.phone;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)?strathmore\.edu$/
    const regexPhone = /^(?:\+254|0)7\d{8}$/

    if (!name || name.length == 0) throw new Error('InvalidName');
    if (!email || !regexEmail.test(email)) throw new Error('InvalidEmail');
    if (!phone || !regexPhone.test(phone)) throw new Error('InvalidPhone');

    const user = await prisma.user.update({
        where: {id: userId},
        data: {
            username: name,
            email: email,
            phone: phone,
        },
        select: userReturned
    });

    return user;
}