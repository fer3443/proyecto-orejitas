-- DropIndex
DROP INDEX "PetPost_status_idx";

-- CreateIndex
CREATE INDEX "PetPost_type_idx" ON "PetPost"("type");
