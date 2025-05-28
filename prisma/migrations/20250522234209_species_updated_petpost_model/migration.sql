/*
  Warnings:

  - Added the required column `species` to the `PetPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PetPost" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "breed" TEXT,
ADD COLUMN     "species" TEXT NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
