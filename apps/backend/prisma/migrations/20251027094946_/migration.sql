/*
  Warnings:

  - You are about to drop the column `endDate` on the `Quest` table. All the data in the column will be lost.
  - You are about to drop the column `estimatedDuration` on the `Quest` table. All the data in the column will be lost.
  - You are about to drop the column `requiredProfiles` on the `Quest` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Quest` table. All the data in the column will be lost.
  - You are about to drop the column `xpRequired` on the `Quest` table. All the data in the column will be lost.
  - Added the required column `xp_required` to the `Quest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quest" DROP COLUMN "endDate",
DROP COLUMN "estimatedDuration",
DROP COLUMN "requiredProfiles",
DROP COLUMN "startDate",
DROP COLUMN "xpRequired",
ADD COLUMN     "end_date" TIMESTAMP(3),
ADD COLUMN     "profils" "AdventurerType"[],
ADD COLUMN     "start_date" TIMESTAMP(3),
ADD COLUMN     "xp_required" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
