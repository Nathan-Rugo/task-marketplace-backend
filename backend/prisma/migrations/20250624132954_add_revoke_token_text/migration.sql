/*
  Warnings:

  - The primary key for the `RevokedToken` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `RevokedToken` DROP PRIMARY KEY,
    MODIFY `token` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`token`);
