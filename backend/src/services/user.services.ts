import { Task, TaskStatus, TaskApplicationStatus} from '../generated/prisma';
import { userReturned, appliedTask, taskStatusAppliedFilter, taskersApplied } from '../lib/selectTypes';
import { PrismaClient } from '../generated/prisma';

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

    var cutOffdate = new Date();
    cutOffdate.setDate(cutOffdate.getDate() - 3);

    const assigned0 = await prisma.task.findMany({
        where: {
        taskerAssignedId: userId,
        status: { in: [TaskStatus.COMPLETED] },
        updatedAt: {
            gte: cutOffdate,
            lte: new Date()
        }},
        orderBy: { updatedAt: 'desc' },
        include:{
            taskerAssigned: {select: userReturned},
            taskPoster: {select: userReturned},
        },
    });

    const assigned1 = await prisma.task.findMany({
        where: {
            taskerAssignedId: userId,
            status: { in: [TaskStatus.IN_PROGRESS, TaskStatus.REVIEW] },
        },
        orderBy: { updatedAt: 'desc' },
        include:{
            taskerAssigned: {select: userReturned},
            taskPoster: {select: userReturned},
        },
        
    });

    const assigned = assigned0.concat(assigned1).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());;

    const posted0 = await prisma.task.findMany({
        where: {
        taskPosterId: userId,
        status: { in: [TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.REVIEW] },
        createdAt: {
            gte: cutOffdate,
            lte: new Date()
        }
        },
        orderBy: { updatedAt: 'desc' },
        include: {
            taskerAssigned: {select: userReturned},
            taskPoster: {select: userReturned},
            taskersApplied: {select: taskersApplied}
        }
    });

    const posted1 = await prisma.task.findMany({
        where: {
        taskPosterId: userId,
        status: { in: [TaskStatus.COMPLETED] },
        updatedAt: {
            gte: cutOffdate,
            lte: new Date()
        }
        },
        orderBy: { updatedAt: 'desc' },
        include: {
            taskerAssigned: {select: userReturned},
            taskPoster: {select: userReturned},
            taskersApplied: {select: taskersApplied}
        }
    });

    const posted = posted0.concat(posted1).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

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
            user: {select: userReturned}
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
            isTasker: !toggle?.isTasker,
            updatedAt: new Date()
        },
        select: userReturned
    });

    return user;
}

export async function editProfile(userId: string, body: User): Promise<User>{
    const name = body.username;
    const email = body.email;
    const phone = body.phone;
    const image = body.profilePicture;
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
            profilePicture: image,
            updatedAt: new Date()
        },
        select: userReturned
    });

    return user;
}

export async function updateReviewStats(userId: string, rating: number){
    const user = await prisma.user.findUnique({
        where: {id: userId}
    })
    
    if (!user) throw new Error('NotFound');
    
    var newRating;

    if (user.rating == 0){
        newRating = rating;
    }else{
        newRating = (rating + user.rating) / 2;
    }

    await prisma.user.update({
        where: {id: userId},
        data: {
            rating: newRating,
            updatedAt: new Date()
        }
    });
}