-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_taskerAssignedId_fkey`;

-- DropIndex
DROP INDEX `Task_taskerAssignedId_fkey` ON `Task`;

-- AlterTable
ALTER TABLE `Task` MODIFY `taskerAssignedId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_taskerAssignedId_fkey` FOREIGN KEY (`taskerAssignedId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
