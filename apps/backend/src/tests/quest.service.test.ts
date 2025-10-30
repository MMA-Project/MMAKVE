import { describe, it, expect, beforeEach } from "vitest";
import { create, getAll, getAllByUser, update, validate, cancel } from "../services/quest.service";
import { prisma } from "../prisma-client";
import { QuestStatus, AdventurerType } from "@mmakve/shared";
import { ErrorCodes } from "../utils/error";

// Helper function to create a test user
async function createTestUser(
    username: string = "testuser",
    role: "CLIENT" | "ASSISTANT" = "CLIENT",
) {
    return await prisma.user.create({
        data: {
            username,
            password: "testpass123",
            role,
        },
    });
}

// Clean database before each test
beforeEach(async () => {
    await prisma.questAssignment.deleteMany();
    await prisma.quest.deleteMany();
    await prisma.user.deleteMany();
    await prisma.adventurer.deleteMany();
    await prisma.bank.deleteMany();
    await prisma.guild.deleteMany();
});

describe("Quest Service - create", () => {
    it("creates a quest with all required fields", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const questData = {
            title: "Slay the Dragon",
            description: "A mighty dragon terrorizes the village",
            deadline: new Date("2025-12-31"),
            reward: 1000,
            requester: requester as any,
        };

        const quest = await create(questData);

        expect(quest.id).toBeDefined();
        expect(quest.title).toBe("Slay the Dragon");
        expect(quest.description).toBe("A mighty dragon terrorizes the village");
        expect(quest.reward).toBe(1000);
        expect(quest.status).toBe(QuestStatus.PENDING);
    });

    it("creates a quest with minimal required fields", async () => {
        const requester = await createTestUser("client2", "CLIENT");

        const questData = {
            title: "Simple Quest",
            description: "Basic description",
            deadline: new Date("2025-11-30"),
            reward: 100,
            requester: requester as any,
        };

        const quest = await create(questData);

        expect(quest.id).toBeDefined();
        expect(quest.title).toBe("Simple Quest");
        expect(quest.status).toBe(QuestStatus.PENDING);
    });

    it("creates a quest with zero reward", async () => {
        const requester = await createTestUser("client3", "CLIENT");

        const questData = {
            title: "Free Quest",
            description: "No reward quest",
            deadline: new Date("2025-11-30"),
            reward: 0,
            requester: requester as any,
        };

        const quest = await create(questData);

        expect(quest.reward).toBe(0);
    });
});

describe("Quest Service - getAll", () => {
    it("returns all quests without filters", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        await create({
            title: "Quest 1",
            description: "Description 1",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        await create({
            title: "Quest 2",
            description: "Description 2",
            deadline: new Date("2025-11-30"),
            reward: 750,
            requester: requester as any,
        });

        const quests = await getAll();
        expect(quests.length).toBe(2);
    });

    it("filters quests by status", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quest1 = await create({
            title: "Waiting Quest",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        const quest2 = await create({
            title: "Approved Quest",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 600,
            requester: requester as any,
        });

        // Update quest2 to approved status
        await prisma.quest.update({
            where: { id: quest2.id },
            data: { status: QuestStatus.APPROVED as any },
        });

        const waitingQuests = await getAll({ status: QuestStatus.PENDING });
        expect(waitingQuests.length).toBe(1);
        expect(waitingQuests[0].status).toBe(QuestStatus.PENDING);

        const approvedQuests = await getAll({ status: QuestStatus.APPROVED });
        expect(approvedQuests.length).toBe(1);
        expect(approvedQuests[0].status).toBe(QuestStatus.APPROVED);
    });

    it("filters quests by createdBy (user ID)", async () => {
        const requester1 = await createTestUser("client1", "CLIENT");
        const requester2 = await createTestUser("client2", "CLIENT");

        await create({
            title: "Quest by User 1",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester1 as any,
        });

        await create({
            title: "Quest by User 2",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 600,
            requester: requester2 as any,
        });

        const user1Quests = await getAll({ createdBy: requester1.id });
        expect(user1Quests.length).toBe(1);
        expect(user1Quests[0].title).toBe("Quest by User 1");
    });

    it("filters quests by reward range", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        await create({
            title: "Low Reward Quest",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 100,
            requester: requester as any,
        });

        await create({
            title: "Medium Reward Quest",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        await create({
            title: "High Reward Quest",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 1000,
            requester: requester as any,
        });

        const minRewardQuests = await getAll({ minReward: 500 });
        expect(minRewardQuests.length).toBe(2);

        const maxRewardQuests = await getAll({ maxReward: 500 });
        expect(maxRewardQuests.length).toBe(2);

        const rangeQuests = await getAll({ minReward: 200, maxReward: 800 });
        expect(rangeQuests.length).toBe(1);
        expect(rangeQuests[0].reward).toBe(500);
    });

    it("filters quests by profils", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quest1 = await prisma.quest.create({
            data: {
                title: "Warrior Quest",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 500,
                createdBy: requester.id,
                status: QuestStatus.PENDING as any,
                profils: [AdventurerType.WARRIOR],
                xp_required: 0,
            },
        });

        const quest2 = await prisma.quest.create({
            data: {
                title: "Mage Quest",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 600,
                createdBy: requester.id,
                status: QuestStatus.PENDING as any,
                profils: [AdventurerType.ARCANE_MAGE],
                xp_required: 0,
            },
        });

        const warriorQuests = await getAll({ profils: [AdventurerType.WARRIOR] });
        expect(warriorQuests.length).toBe(1);
        expect(warriorQuests[0].title).toBe("Warrior Quest");

        const mageQuests = await getAll({ profils: [AdventurerType.ARCANE_MAGE] });
        expect(mageQuests.length).toBe(1);
        expect(mageQuests[0].title).toBe("Mage Quest");
    });

    it("filters quests by date range", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        await prisma.quest.create({
            data: {
                title: "Old Quest",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 500,
                createdBy: requester.id,
                status: QuestStatus.PENDING as any,
                start_date: new Date("2025-01-01"),
                end_date: new Date("2025-03-01"),
                xp_required: 0,
            },
        });

        await prisma.quest.create({
            data: {
                title: "Recent Quest",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 600,
                createdBy: requester.id,
                status: QuestStatus.PENDING as any,
                start_date: new Date("2025-06-01"),
                end_date: new Date("2025-08-01"),
                xp_required: 0,
            },
        });

        const recentQuests = await getAll({ startDate: new Date("2025-05-01") });
        expect(recentQuests.length).toBe(1);
        expect(recentQuests[0].title).toBe("Recent Quest");

        const oldQuests = await getAll({ endDate: new Date("2025-04-01") });
        expect(oldQuests.length).toBe(1);
        expect(oldQuests[0].title).toBe("Old Quest");
    });

    it("combines multiple filters", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        await prisma.quest.create({
            data: {
                title: "Filtered Quest",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 500,
                createdBy: requester.id,
                status: QuestStatus.APPROVED as any,
                profils: [AdventurerType.WARRIOR],
                xp_required: 0,
            },
        });

        await prisma.quest.create({
            data: {
                title: "Not Matching Quest",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 100,
                createdBy: requester.id,
                status: QuestStatus.PENDING as any,
                profils: [AdventurerType.ARCHER],
                xp_required: 0,
            },
        });

        const filtered = await getAll({
            status: QuestStatus.APPROVED,
            minReward: 400,
            profils: [AdventurerType.WARRIOR],
        });

        expect(filtered.length).toBe(1);
        expect(filtered[0].title).toBe("Filtered Quest");
    });

    it("returns empty array when no quests match filters", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        await create({
            title: "Quest",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        const quests = await getAll({ minReward: 10000 });
        expect(quests.length).toBe(0);
    });
});

describe("Quest Service - getAllByUser", () => {
    it("returns all quests created by a specific user", async () => {
        const requester1 = await createTestUser("client1", "CLIENT");
        const requester2 = await createTestUser("client2", "CLIENT");

        await create({
            title: "User 1 Quest 1",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester1 as any,
        });

        await create({
            title: "User 1 Quest 2",
            description: "Test",
            deadline: new Date("2025-11-30"),
            reward: 600,
            requester: requester1 as any,
        });

        await create({
            title: "User 2 Quest",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 700,
            requester: requester2 as any,
        });

        const user1Quests = await getAllByUser(requester1.id);
        expect(user1Quests.length).toBe(2);
        expect(user1Quests.every((q) => q.requester)).toBeTruthy();
    });

    it("returns empty array for user with no quests", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quests = await getAllByUser(requester.id);
        expect(quests.length).toBe(0);
    });

    it("orders quests by end_date descending", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quest1 = await prisma.quest.create({
            data: {
                title: "Older Quest",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 500,
                createdBy: requester.id,
                status: QuestStatus.PENDING as any,
                end_date: new Date("2025-01-01"),
                xp_required: 0,
            },
        });

        const quest2 = await prisma.quest.create({
            data: {
                title: "Newer Quest",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 600,
                createdBy: requester.id,
                status: QuestStatus.PENDING as any,
                end_date: new Date("2025-12-01"),
                xp_required: 0,
            },
        });

        const quests = await getAllByUser(requester.id);
        expect(quests[0].title).toBe("Newer Quest");
        expect(quests[1].title).toBe("Older Quest");
    });
});

describe("Quest Service - update", () => {
    it("updates quest properties", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quest = await create({
            title: "Original Title",
            description: "Original description",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        const updated = await update(quest.id, {
            title: "Updated Title",
            description: "Updated description",
            reward: 1000,
        });

        expect(updated).toBeDefined();
        expect(updated?.title).toBe("Updated Title");
        expect(updated?.description).toBe("Updated description");
        expect(updated?.reward).toBe(1000);
    });

    it("updates quest status", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quest = await create({
            title: "Quest",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        const updated = await update(quest.id, {
            status: QuestStatus.IN_PROGRESS,
        });

        expect(updated?.status).toBe(QuestStatus.IN_PROGRESS);
    });

    it("updates only specified fields", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quest = await create({
            title: "Original Title",
            description: "Original description",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        const updated = await update(quest.id, {
            reward: 750,
        });

        expect(updated?.reward).toBe(750);
        expect(updated?.title).toBe("Original Title");
        expect(updated?.description).toBe("Original description");
    });

    it("throws error for non-existent quest", async () => {
        await expect(
            update("non-existent-id", {
                title: "Ghost Quest",
            }),
        ).rejects.toThrow();
    });
});

describe("Quest Service - validate", () => {
    it("validates a quest by changing status to APPROVED", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quest = await create({
            title: "Quest to Validate",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        expect(quest.status).toBe(QuestStatus.PENDING);

        const validated = await validate(quest.id);

        expect(validated).toBeDefined();
        expect(validated?.status).toBe(QuestStatus.APPROVED);
    });

    it("throws error for non-existent quest", async () => {
        await expect(validate("non-existent-id")).rejects.toThrow();
    });
});

describe("Quest Service - cancel", () => {
    it("deletes a quest", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        const quest = await create({
            title: "Quest to Cancel",
            description: "Test",
            deadline: new Date("2025-12-31"),
            reward: 500,
            requester: requester as any,
        });

        const cancelled = await cancel(quest.id);

        expect(cancelled).toBeDefined();
        expect(cancelled?.id).toBe(quest.id);

        // Verify quest is deleted
        const found = await prisma.quest.findUnique({
            where: { id: quest.id },
        });
        expect(found).toBeNull();
    });

    it("throws error for non-existent quest", async () => {
        await expect(cancel("non-existent-id")).rejects.toThrow();
    });

    it("deletes quest with assignments", async () => {
        const requester = await createTestUser("client1", "CLIENT");

        // Create a guild with bank
        const tempId = "temp-" + Math.random().toString(36).substring(7);
        const guild = await prisma.guild.create({
            data: {
                name: "Test Guild",
                bankId: tempId,
            },
        });

        const bank = await prisma.bank.create({
            data: {
                amount: 1000,
                guildId: guild.id,
            },
        });

        await prisma.guild.update({
            where: { id: guild.id },
            data: { bankId: bank.id },
        });

        // Create adventurer
        const adventurer = await prisma.adventurer.create({
            data: {
                name: "Test Adventurer",
                type: "WARRIOR",
                status: "AVAILABLE",
                xp: 0,
                guildId: guild.id,
            },
        });

        // Create quest
        const quest = await prisma.quest.create({
            data: {
                title: "Quest with Assignment",
                description: "Test",
                deadline: new Date("2025-12-31"),
                reward: 500,
                createdBy: requester.id,
                status: QuestStatus.PENDING as any,
                xp_required: 0,
            },
        });

        // Create assignment
        await prisma.questAssignment.create({
            data: {
                adventurerId: adventurer.id,
                questId: quest.id,
            },
        });

        const cancelled = await cancel(quest.id);

        expect(cancelled).toBeDefined();

        // Verify quest and assignments are deleted
        const foundQuest = await prisma.quest.findUnique({
            where: { id: quest.id },
        });
        expect(foundQuest).toBeNull();

        const foundAssignments = await prisma.questAssignment.findMany({
            where: { questId: quest.id },
        });
        expect(foundAssignments.length).toBe(0);
    });
});
