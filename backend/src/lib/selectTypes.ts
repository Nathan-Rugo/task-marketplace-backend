import { TaskStatus } from "../generated/prisma";
export const userReturned = {
    id: true,
    username: true,
    email: true,
    phone: true,
    profilePicture: true,
    rating: true,
    tasksPosted: true,
    tasksCompleted: true,
    isTasker: true,
    authProvider: true,
    createdAt: true,
    updatedAt: true,
};

export const taskStatusAppliedFilter = {
    status: {
        in: [
        TaskStatus.PENDING,
        TaskStatus.IN_PROGRESS,
        TaskStatus.REVIEW,
        ],
    },
};

export const appliedTask = {
    id: true,
    title: true,
    description: true,
    category: true,
    location: true,
    offer: true,      
    status: true,
    taskPosterId: true,
    taskPoster: {select: userReturned},
    taskerAssignedId: true,
    taskerAssigned: {select: userReturned},
    taskersApplied: false,
    reviews: true,
    createdAt: true,
    updatedAt: false
}

