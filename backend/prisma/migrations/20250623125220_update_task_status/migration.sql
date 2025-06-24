/*
  Warnings:

  - You are about to alter the column `status` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `Task` MODIFY `status` ENUM('CREATED', 'REVIEW', 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED') NOT NULL DEFAULT 'CREATED';
