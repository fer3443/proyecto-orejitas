/*
  Warnings:

  - You are about to drop the column `image` on the `PetPost` table. All the data in the column will be lost.
  - Changed the type of `species` on the `PetPost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PetPost" DROP COLUMN "image",
DROP COLUMN "species",
ADD COLUMN     "species" "Species" NOT NULL;

-- CreateTable
CREATE TABLE "ImagePets" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "petPostId" TEXT NOT NULL,

    CONSTRAINT "ImagePets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PetPost_status_idx" ON "PetPost"("status");

-- AddForeignKey
ALTER TABLE "ImagePets" ADD CONSTRAINT "ImagePets_petPostId_fkey" FOREIGN KEY ("petPostId") REFERENCES "PetPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
