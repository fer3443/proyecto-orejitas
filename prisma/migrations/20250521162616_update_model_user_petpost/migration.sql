/*
  Warnings:

  - The values [lost,found,adoption] on the enum `PostStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `petType` on the `PetPost` table. All the data in the column will be lost.
  - You are about to drop the column `resolved` on the `PetPost` table. All the data in the column will be lost.
  - Added the required column `type` to the `PetPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PetPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PetPostType" AS ENUM ('ADOPTION', 'LOST', 'FOUND');

-- AlterEnum
BEGIN;
CREATE TYPE "PostStatus_new" AS ENUM ('ACTIVE', 'RESOLVED', 'CLOSED');
ALTER TABLE "PetPost" ALTER COLUMN "status" TYPE "PostStatus_new" USING ("status"::text::"PostStatus_new");
ALTER TYPE "PostStatus" RENAME TO "PostStatus_old";
ALTER TYPE "PostStatus_new" RENAME TO "PostStatus";
DROP TYPE "PostStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "PetPost" DROP COLUMN "petType",
DROP COLUMN "resolved",
ADD COLUMN     "type" "PetPostType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "PetType";
