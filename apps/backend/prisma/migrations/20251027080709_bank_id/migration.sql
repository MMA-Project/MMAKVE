/*
  Warnings:

  - The `status` column on the `Adventurer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rarity` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Quest` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `assistantId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Assistant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemOnAdventurer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AdventurerGuild` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[bankId]` on the table `Guild` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `guildId` to the `Adventurer` table without a default value. This is not possible if the table is not empty.
  - Made the column `xp` on table `Adventurer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `bankId` to the `Guild` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `durability` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `type` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Quest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deadline` on table `Quest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `reward` on table `Quest` required. This step will fail if there are existing NULL values in that column.
  - Made the column `estimatedDuration` on table `Quest` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "QuestStatus" AS ENUM ('PENDING', 'APPROVED', 'IN_PROGRESS', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "AdventurerStatus" AS ENUM ('AVAILABLE', 'ON_QUEST', 'INJURED', 'DEAD', 'RETIRED');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('WEAPON', 'EQUIPMENT', 'POTION', 'MISC');

-- CreateEnum
CREATE TYPE "ItemRarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'EPIC', 'LEGENDARY');

-- DropForeignKey
ALTER TABLE "public"."ItemOnAdventurer" DROP CONSTRAINT "ItemOnAdventurer_adventurerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ItemOnAdventurer" DROP CONSTRAINT "ItemOnAdventurer_itemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_assistantId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_clientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AdventurerGuild" DROP CONSTRAINT "_AdventurerGuild_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AdventurerGuild" DROP CONSTRAINT "_AdventurerGuild_B_fkey";

-- DropIndex
DROP INDEX "public"."User_assistantId_key";

-- DropIndex
DROP INDEX "public"."User_clientId_key";

-- AlterTable
ALTER TABLE "Adventurer" ADD COLUMN     "guildId" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "AdventurerStatus" NOT NULL DEFAULT 'AVAILABLE',
ALTER COLUMN "xp" SET NOT NULL,
ALTER COLUMN "xp" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Guild" ADD COLUMN     "bankId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "durability" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "ItemType" NOT NULL,
DROP COLUMN "rarity",
ADD COLUMN     "rarity" "ItemRarity" NOT NULL DEFAULT 'COMMON';

-- AlterTable
ALTER TABLE "Quest" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "deadline" SET NOT NULL,
ALTER COLUMN "reward" SET NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "QuestStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "estimatedDuration" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "assistantId",
DROP COLUMN "clientId",
ALTER COLUMN "role" SET DEFAULT 'CLIENT';

-- DropTable
DROP TABLE "public"."Assistant";

-- DropTable
DROP TABLE "public"."Client";

-- DropTable
DROP TABLE "public"."ItemOnAdventurer";

-- DropTable
DROP TABLE "public"."_AdventurerGuild";

-- CreateIndex
CREATE UNIQUE INDEX "Guild_bankId_key" ON "Guild"("bankId");

-- AddForeignKey
ALTER TABLE "Adventurer" ADD CONSTRAINT "Adventurer_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
