/*
  Warnings:

  - The values [SLEEPING] on the enum `AdventurerStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [EQUIPMENT] on the enum `ItemType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `stats` on the `Item` table. All the data in the column will be lost.
  - Changed the type of `date` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('AVAILABLE', 'IN_USE', 'CONSUMED', 'BROKEN', 'LOST');

-- AlterEnum
BEGIN;
CREATE TYPE "AdventurerStatus_new" AS ENUM ('AVAILABLE', 'ON_QUEST', 'INJURED', 'DEAD', 'RESTING', 'LEAVED');
ALTER TABLE "public"."Adventurer" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Adventurer" ALTER COLUMN "status" TYPE "AdventurerStatus_new" USING ("status"::text::"AdventurerStatus_new");
ALTER TYPE "AdventurerStatus" RENAME TO "AdventurerStatus_old";
ALTER TYPE "AdventurerStatus_new" RENAME TO "AdventurerStatus";
DROP TYPE "public"."AdventurerStatus_old";
ALTER TABLE "Adventurer" ALTER COLUMN "status" SET DEFAULT 'AVAILABLE';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ItemType_new" AS ENUM ('WEAPON', 'ARMOR', 'POTION', 'MISC');
ALTER TABLE "Item" ALTER COLUMN "type" TYPE "ItemType_new" USING ("type"::text::"ItemType_new");
ALTER TYPE "ItemType" RENAME TO "ItemType_old";
ALTER TYPE "ItemType_new" RENAME TO "ItemType";
DROP TYPE "public"."ItemType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "stats",
ADD COLUMN     "isConsumable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "maxDurability" INTEGER,
ADD COLUMN     "quantity" INTEGER,
ADD COLUMN     "status" "ItemStatus" NOT NULL DEFAULT 'AVAILABLE',
ALTER COLUMN "durability" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Quest" ALTER COLUMN "xp_required" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "date",
ADD COLUMN     "date" INTEGER NOT NULL;
