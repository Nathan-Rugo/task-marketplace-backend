/*
  Warnings:

  - You are about to drop the column `acceptedById` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `postedById` on the `Task` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.
  - You are about to drop the column `isVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tasker` on the `User` table. All the data in the column will be lost.
  - Added the required column `taskPosterId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Made the column `category` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_acceptedById_fkey`;

-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_postedById_fkey`;

-- DropIndex
DROP INDEX `Task_acceptedById_fkey` ON `Task`;

-- DropIndex
DROP INDEX `Task_postedById_fkey` ON `Task`;

-- AlterTable
ALTER TABLE `Task` DROP COLUMN `acceptedById`,
    DROP COLUMN `postedById`,
    ADD COLUMN `taskPosterId` VARCHAR(191) NOT NULL,
    ADD COLUMN `taskerAssignedId` VARCHAR(191) NULL,
    MODIFY `category` VARCHAR(191) NOT NULL,
    MODIFY `status` ENUM('CREATED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'CREATED';

-- AlterTable
ALTER TABLE `User` DROP COLUMN `isVerified`,
    DROP COLUMN `tasker`,
    ADD COLUMN `isTasker` BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE `TaskApplications` (
    `id` VARCHAR(191) NOT NULL,
    `appliedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('ACCEPTED', 'PENDING', 'DENIED') NOT NULL DEFAULT 'PENDING',
    `taskId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` VARCHAR(191) NOT NULL,
    `reviewerId` VARCHAR(191) NOT NULL,
    `revieweeId` VARCHAR(191) NOT NULL,
    `taskId` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL DEFAULT 0.0,
    `comment` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_taskPosterId_fkey` FOREIGN KEY (`taskPosterId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_taskerAssignedId_fkey` FOREIGN KEY (`taskerAssignedId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskApplications` ADD CONSTRAINT `TaskApplications_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TaskApplications` ADD CONSTRAINT `TaskApplications_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_reviewerId_fkey` FOREIGN KEY (`reviewerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_revieweeId_fkey` FOREIGN KEY (`revieweeId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
