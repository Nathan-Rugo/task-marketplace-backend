/*
  Warnings:

  - Made the column `taskerAssignedId` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_taskerAssignedId_fkey`;

-- DropIndex
DROP INDEX `Task_taskerAssignedId_fkey` ON `Task`;

-- AlterTable
ALTER TABLE `Review` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Task` MODIFY `status` ENUM('CREATED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'OPEN') NOT NULL DEFAULT 'OPEN',
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `taskerAssignedId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_taskerAssignedId_fkey` FOREIGN KEY (`taskerAssignedId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
