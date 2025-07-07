/*
  Warnings:

  - A unique constraint covering the columns `[taskId,userId]` on the table `payments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `payments_taskId_userId_key` ON `payments`(`taskId`, `userId`);
