import { describe, it, expect, beforeEach } from "vitest";
import {
    create,
    getAll,
    getById,
    getByQuest,
    modify,
    remove,
} from "../services/adventurer.service";
import { prisma } from "../prisma-client";
import { ErrorCodes } from "../utils/error";
import { $Enums } from "../generated/prisma-client";

// Helper function to create a guild with bank
async function createTestGuild(name: string = "Test Guild") {
    // Create guild first with temporary bankId
    const tempId = "temp-" + Math.random().toString(36).substring(7);

    const guild = await prisma.guild.create({
        data: {
            name,
            bankId: tempId,
        },
    });

    // Create bank with the guild reference
    const bank = await prisma.bank.create({
        data: {
            amount: 1000,
            guildId: guild.id,
        },
    });

    // Update guild with real bank ID
    await prisma.guild.update({
        where: { id: guild.id },
        data: { bankId: bank.id },
    });

    return guild;
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

describe("Adventurer Service - create", () => {
    it("creates an adventurer with associated user account", async () => {
        const guild = await createTestGuild();

        const adventurer = await create({
            name: "Legolas",
            type: $Enums.AdventurerType.ARCHER,
            guildId: guild.id,
            username: "legolas_archer",
            password: "elvenbow123",
        });

        expect(adventurer.id).toBeDefined();
        expect(adventurer.type).toBe($Enums.AdventurerType.ARCHER);
        expect(adventurer.status).toBe("AVAILABLE");
        expect(adventurer.xp).toBe(0);

        // Verify user was created
        const user = await prisma.user.findFirst({
            where: { username: "legolas_archer" },
        });
        expect(user).toBeDefined();
        expect(user?.role).toBe("AVENTURIER");
        expect(user?.adventurerId).toBe(adventurer.id);
    });

    it("rejects creation with duplicate username", async () => {
        const guild = await createTestGuild();

        await create({
            name: "Gimli",
            type: $Enums.AdventurerType.WARRIOR,
            guildId: guild.id,
            username: "gimli",
            password: "axe123",
        });

        await expect(
            create({
                name: "Gimli Clone",
                type: $Enums.AdventurerType.BARBARIAN,
                guildId: guild.id,
                username: "gimli",
                password: "differentpass",
            }),
        ).rejects.toMatchObject({
            code: ErrorCodes.USERNAME_TAKEN,
        });
    });

    it("rejects creation with non-existent guild", async () => {
        await expect(
            create({
                name: "Gandalf",
                type: $Enums.AdventurerType.ARCANE_MAGE,
                guildId: "non-existent-guild-id",
                username: "gandalf",
                password: "youshallnotpass",
            }),
        ).rejects.toMatchObject({
            code: ErrorCodes.NOT_FOUND,
        });
    });

    it("rejects creation with missing required fields", async () => {
        await expect(
            create({
                name: "",
                type: $Enums.AdventurerType.PRIEST,
                guildId: "some-id",
                username: "test",
                password: "test",
            }),
        ).rejects.toMatchObject({
            code: ErrorCodes.VALIDATION_ERROR,
        });
    });
});

describe("Adventurer Service - getAll", () => {
    it("returns all adventurers without filters", async () => {
        const guild = await createTestGuild("Fellowship");

        await create({
            name: "Aragorn",
            type: $Enums.AdventurerType.WARRIOR,
            guildId: guild.id,
            username: "aragorn",
            password: "ranger",
        });

        await create({
            name: "Boromir",
            type: $Enums.AdventurerType.PALADIN,
            guildId: guild.id,
            username: "boromir",
            password: "gondor",
        });

        const adventurers = await getAll();
        expect(adventurers.length).toBe(2);
    });

    it("filters adventurers by type", async () => {
        const guild = await createTestGuild("Fellowship");

        await create({
            name: "Archer1",
            type: $Enums.AdventurerType.ARCHER,
            guildId: guild.id,
            username: "archer1",
            password: "pass",
        });

        await create({
            name: "Mage1",
            type: $Enums.AdventurerType.ARCANE_MAGE,
            guildId: guild.id,
            username: "mage1",
            password: "pass",
        });

        const archers = await getAll({ type: $Enums.AdventurerType.ARCHER });
        expect(archers.length).toBe(1);
        expect(archers[0].type).toBe($Enums.AdventurerType.ARCHER);
    });

    it("filters adventurers by XP range", async () => {
        const guild = await createTestGuild("Fellowship");

        const adv1 = await create({
            name: "Newbie",
            type: $Enums.AdventurerType.WARRIOR,
            guildId: guild.id,
            username: "newbie",
            password: "pass",
        });

        // Update XP manually
        await prisma.adventurer.update({
            where: { id: adv1.id },
            data: { xp: 50 },
        });

        const adv2 = await create({
            name: "Veteran",
            type: $Enums.AdventurerType.WARRIOR,
            guildId: guild.id,
            username: "veteran",
            password: "pass",
        });

        await prisma.adventurer.update({
            where: { id: adv2.id },
            data: { xp: 500 },
        });

        const filtered = await getAll({ minXp: 100 });
        expect(filtered.length).toBe(1);
        expect(filtered[0].xp).toBe(500);
    });
});

describe("Adventurer Service - getById", () => {
    it("returns an adventurer by ID", async () => {
        const guild = await createTestGuild();

        const created = await create({
            name: "Frodo",
            type: $Enums.AdventurerType.ROGUE,
            guildId: guild.id,
            username: "frodo",
            password: "ring",
        });

        const found = await getById(created.id);
        expect(found).toBeDefined();
        expect(found?.id).toBe(created.id);
        expect(found?.type).toBe($Enums.AdventurerType.ROGUE);
    });

    it("returns null for non-existent ID", async () => {
        const found = await getById("non-existent-id");
        expect(found).toBeNull();
    });
});

describe("Adventurer Service - getByQuest", () => {
    it("returns adventurers assigned to a quest", async () => {
        const guild = await createTestGuild();

        // Create user for quest requester
        const requester = await prisma.user.create({
            data: {
                username: "client",
                password: "pass",
                role: "CLIENT",
            },
        });

        // Create quest
        const quest = await prisma.quest.create({
            data: {
                title: "Test Quest",
                description: "Test",
                deadline: new Date(),
                xp_required: 100,
                reward: 500,
                status: "PENDING",
                createdBy: requester.id,
            },
        });

        // Create adventurer
        const adventurer = await create({
            name: "Sam",
            type: $Enums.AdventurerType.WARRIOR,
            guildId: guild.id,
            username: "sam",
            password: "potato",
        });

        // Assign adventurer to quest
        await prisma.questAssignment.create({
            data: {
                adventurerId: adventurer.id,
                questId: quest.id,
            },
        });

        const adventurers = await getByQuest(quest.id);
        expect(adventurers.length).toBe(1);
        expect(adventurers[0].id).toBe(adventurer.id);
    });

    it("returns empty array for quest with no adventurers", async () => {
        const requester = await prisma.user.create({
            data: {
                username: "client",
                password: "pass",
                role: "CLIENT",
            },
        });

        const quest = await prisma.quest.create({
            data: {
                title: "Empty Quest",
                description: "Test",
                deadline: new Date(),
                xp_required: 100,
                reward: 500,
                status: "PENDING",
                createdBy: requester.id,
            },
        });

        const adventurers = await getByQuest(quest.id);
        expect(adventurers.length).toBe(0);
    });
});

describe("Adventurer Service - modify", () => {
    it("updates adventurer properties", async () => {
        const guild = await createTestGuild();

        const adventurer = await create({
            name: "Merry",
            type: $Enums.AdventurerType.ROGUE,
            guildId: guild.id,
            username: "merry",
            password: "pipeweed",
        });

        const updated = await modify(adventurer.id, {
            name: "Meriadoc",
            xp: 150,
            status: "INJURED",
        });

        expect(updated).toBeDefined();
        expect(updated?.xp).toBe(150);
        expect(updated?.status).toBe("INJURED");
    });

    it("rejects update for non-existent adventurer", async () => {
        await expect(
            modify("non-existent-id", {
                name: "Ghost",
            }),
        ).rejects.toMatchObject({
            code: ErrorCodes.NOT_FOUND,
        });
    });

    it("rejects update with non-existent guild", async () => {
        const guild = await createTestGuild();

        const adventurer = await create({
            name: "Pippin",
            type: $Enums.AdventurerType.ROGUE,
            guildId: guild.id,
            username: "pippin",
            password: "tookish",
        });

        await expect(
            modify(adventurer.id, {
                guildId: "non-existent-guild",
            }),
        ).rejects.toMatchObject({
            code: ErrorCodes.NOT_FOUND,
        });
    });
});

describe("Adventurer Service - remove", () => {
    it("deletes adventurer and associated user", async () => {
        const guild = await createTestGuild();

        const adventurer = await create({
            name: "Sauron",
            type: $Enums.AdventurerType.ARCANE_MAGE,
            guildId: guild.id,
            username: "sauron",
            password: "onering",
        });

        await remove(adventurer.id);

        // Verify adventurer is deleted
        const foundAdventurer = await prisma.adventurer.findUnique({
            where: { id: adventurer.id },
        });
        expect(foundAdventurer).toBeNull();

        // Verify user is deleted
        const foundUser = await prisma.user.findFirst({
            where: { username: "sauron" },
        });
        expect(foundUser).toBeNull();
    });

    it("rejects deletion of non-existent adventurer", async () => {
        await expect(remove("non-existent-id")).rejects.toMatchObject({
            code: ErrorCodes.NOT_FOUND,
        });
    });

    it("rejects deletion of adventurer with active quests", async () => {
        const guild = await createTestGuild();

        const requester = await prisma.user.create({
            data: {
                username: "client",
                password: "pass",
                role: "CLIENT",
            },
        });

        const quest = await prisma.quest.create({
            data: {
                title: "Active Quest",
                description: "Test",
                deadline: new Date(),
                xp_required: 100,
                reward: 500,
                status: "IN_PROGRESS",
                createdBy: requester.id,
            },
        });

        const adventurer = await create({
            name: "Busy Hero",
            type: $Enums.AdventurerType.PALADIN,
            guildId: guild.id,
            username: "busyhero",
            password: "working",
        });

        // Assign adventurer to quest
        await prisma.questAssignment.create({
            data: {
                adventurerId: adventurer.id,
                questId: quest.id,
            },
        });

        await expect(remove(adventurer.id)).rejects.toMatchObject({
            code: ErrorCodes.VALIDATION_ERROR,
        });
    });
});
