-- CreateEnum
CREATE TYPE "AdventurerType" AS ENUM ('ARCHER', 'BARBARIAN', 'PALADIN', 'ARCANE_MAGE', 'PRIEST', 'GEOMANCER', 'ALCHEMIST', 'BLACKSMITH', 'ENCHANTER', 'MESSENGER');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('AVENTURIER', 'ASSISTANT', 'CLIENT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'AVENTURIER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adventurerId" TEXT,
    "assistantId" TEXT,
    "clientId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assistant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Assistant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "deadline" TIMESTAMP(3),
    "reward" INTEGER,
    "status" TEXT,
    "estimatedDuration" INTEGER,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "requiredProfiles" "AdventurerType"[],
    "xpRequired" INTEGER,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestAssignment" (
    "id" TEXT NOT NULL,
    "adventurerId" TEXT NOT NULL,
    "questId" TEXT NOT NULL,

    CONSTRAINT "QuestAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adventurer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "AdventurerType" NOT NULL,
    "status" TEXT,
    "xp" INTEGER,

    CONSTRAINT "Adventurer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "durability" INTEGER,
    "price" INTEGER,
    "type" TEXT,
    "stats" TEXT,
    "rarity" TEXT,
    "profiles" "AdventurerType"[],

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guild" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "guildId" TEXT NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "bankId" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemOnAdventurer" (
    "adventurerId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "ItemOnAdventurer_pkey" PRIMARY KEY ("adventurerId","itemId")
);

-- CreateTable
CREATE TABLE "ItemOnQuestAssignment" (
    "questAssignmentId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "ItemOnQuestAssignment_pkey" PRIMARY KEY ("questAssignmentId","itemId")
);

-- CreateTable
CREATE TABLE "ItemOnGuild" (
    "guildId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,

    CONSTRAINT "ItemOnGuild_pkey" PRIMARY KEY ("guildId","itemId")
);

-- CreateTable
CREATE TABLE "_AdventurerGuild" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdventurerGuild_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_adventurerId_key" ON "User"("adventurerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_assistantId_key" ON "User"("assistantId");

-- CreateIndex
CREATE UNIQUE INDEX "User_clientId_key" ON "User"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_guildId_key" ON "Bank"("guildId");

-- CreateIndex
CREATE INDEX "_AdventurerGuild_B_index" ON "_AdventurerGuild"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_adventurerId_fkey" FOREIGN KEY ("adventurerId") REFERENCES "Adventurer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_assistantId_fkey" FOREIGN KEY ("assistantId") REFERENCES "Assistant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestAssignment" ADD CONSTRAINT "QuestAssignment_adventurerId_fkey" FOREIGN KEY ("adventurerId") REFERENCES "Adventurer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestAssignment" ADD CONSTRAINT "QuestAssignment_questId_fkey" FOREIGN KEY ("questId") REFERENCES "Quest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnAdventurer" ADD CONSTRAINT "ItemOnAdventurer_adventurerId_fkey" FOREIGN KEY ("adventurerId") REFERENCES "Adventurer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnAdventurer" ADD CONSTRAINT "ItemOnAdventurer_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnQuestAssignment" ADD CONSTRAINT "ItemOnQuestAssignment_questAssignmentId_fkey" FOREIGN KEY ("questAssignmentId") REFERENCES "QuestAssignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnQuestAssignment" ADD CONSTRAINT "ItemOnQuestAssignment_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnGuild" ADD CONSTRAINT "ItemOnGuild_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnGuild" ADD CONSTRAINT "ItemOnGuild_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdventurerGuild" ADD CONSTRAINT "_AdventurerGuild_A_fkey" FOREIGN KEY ("A") REFERENCES "Adventurer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdventurerGuild" ADD CONSTRAINT "_AdventurerGuild_B_fkey" FOREIGN KEY ("B") REFERENCES "Guild"("id") ON DELETE CASCADE ON UPDATE CASCADE;
