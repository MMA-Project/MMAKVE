/*
  Warnings:

  - You are about to drop the column `name` on the `Adventurer` table. All the data in the column will be lost.
  - Changed the type of `name` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ItemName" AS ENUM ('SWORD', 'SHIELD', 'HELMET', 'HEALING_POTION', 'MAGIC_RING', 'BOW', 'DAGGER', 'STAFF', 'ARMOR', 'AXE', 'ARROW');

-- AlterTable
ALTER TABLE "Adventurer" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "name",
ADD COLUMN     "name" "ItemName" NOT NULL;
