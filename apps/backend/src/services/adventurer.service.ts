import { prisma } from "../prisma-client";
import { AppError, ErrorCodes } from "../utils/error";
import bcrypt from "bcryptjs";
import type { Adventurer, AdventurerType } from "@mmakve/shared";

/**
 * ! Rôle: Assistant
 * Get all adventurers with optional query filters
 */
export async function getAll(params?: {
    type?: AdventurerType | string;
    status?: string;
    guildId?: string;
    minXp?: number;
    maxXp?: number;
}): Promise<Adventurer[]> {
    const where: any = {};

    if (params?.type) {
        where.type = params.type;
    }
    if (params?.status) {
        where.status = params.status;
    }
    if (params?.guildId) {
        where.guildId = params.guildId;
    }
    if (params?.minXp !== undefined || params?.maxXp !== undefined) {
        where.xp = {};
        if (params.minXp !== undefined) where.xp.gte = params.minXp;
        if (params.maxXp !== undefined) where.xp.lte = params.maxXp;
    }

    const adventurers = await prisma.adventurer.findMany({
        where,
        include: {
            user: true,
            guild: true,
            assignments: {
                include: {
                    quest: true,
                },
            },
        },
        orderBy: { xp: "desc" },
    });

    return adventurers.map((a: any) => ({
        id: a.id,
        type: a.type as unknown as AdventurerType,
        status: a.status.toLowerCase() as
            | "available"
            | "on_quest"
            | "injured"
            | "dead"
            | "sleeping",
        xp: a.xp,
    }));
}

/**
 * ! Rôle: Assistant
 * Get adventurer by ID
 */
export async function getById(id: string): Promise<Adventurer | null> {
    const adventurer = await prisma.adventurer.findUnique({
        where: { id },
        include: {
            user: true,
            guild: true,
            assignments: {
                include: {
                    quest: true,
                },
            },
        },
    });

    if (!adventurer) return null;

    return {
        id: adventurer.id,
        type: adventurer.type as unknown as AdventurerType,
        status: adventurer.status.toLowerCase() as
            | "available"
            | "on_quest"
            | "injured"
            | "dead"
            | "sleeping",
        xp: adventurer.xp,
    };
}

/**
 * ! Rôle: Assistant
 * Get adventurers by quest ID
 */
export async function getByQuest(questId: string): Promise<Adventurer[]> {
    const assignments = await prisma.questAssignment.findMany({
        where: { questId },
        include: {
            adventurer: {
                include: {
                    user: true,
                    guild: true,
                },
            },
        },
    });

    return assignments.map((assignment: any) => ({
        id: assignment.adventurer.id,
        type: assignment.adventurer.type as unknown as AdventurerType,
        status: assignment.adventurer.status.toLowerCase() as
            | "available"
            | "on_quest"
            | "injured"
            | "dead"
            | "sleeping",
        xp: assignment.adventurer.xp,
    }));
}

/**
 * ! Rôle: Assistant
 * Create a new adventurer and associated user account
 */
export async function create(data: {
    name: string;
    type: AdventurerType | string;
    guildId: string;
    username: string;
    password: string;
}): Promise<Adventurer> {
    // Validate required fields
    console.log("DEBUG create", JSON.stringify(data, null, 2));
    if (!data.name || !data.type || !data.guildId || !data.username || !data.password) {
        throw new AppError(
            ErrorCodes.VALIDATION_ERROR,
            "Name, type, guildId, username and password are required",
            422,
        );
    }

    // Check if username already exists
    const existingUser = await prisma.user.findUnique({
        where: { username: data.username },
    });
    if (existingUser) {
        throw new AppError(ErrorCodes.USERNAME_TAKEN, "Username already taken", 409);
    }

    // Check if guild exists
    const guild = await prisma.guild.findUnique({
        where: { id: data.guildId },
    });
    if (!guild) {
        throw new AppError(ErrorCodes.NOT_FOUND, "Guild not found", 404);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create adventurer and user in a transaction
    const result = await prisma.$transaction(async (tx: any) => {
        // Create the adventurer first
        const adventurer = await tx.adventurer.create({
            data: {
                name: data.name,
                type: data.type as string,
                status: "AVAILABLE",
                xp: 0,
                guildId: data.guildId,
            },
        });

        // Create the user linked to the adventurer
        await tx.user.create({
            data: {
                username: data.username,
                password: hashedPassword,
                role: "AVENTURIER",
                adventurerId: adventurer.id,
            },
        });

        return adventurer;
    });

    return {
        id: result.id,
        type: result.type as unknown as AdventurerType,
        status: result.status.toLowerCase() as
            | "available"
            | "on_quest"
            | "injured"
            | "dead"
            | "sleeping",
        xp: result.xp,
    };
}

/**
 * ! Rôle: Assistant
 * Update an adventurer
 */
export async function modify(
    id: string,
    data: Partial<{
        name: string;
        type: AdventurerType | string;
        status: string;
        xp: number;
        guildId: string;
    }>,
): Promise<Adventurer | null> {
    // Check if adventurer exists
    const existing = await prisma.adventurer.findUnique({
        where: { id },
    });
    if (!existing) {
        throw new AppError(ErrorCodes.NOT_FOUND, "Adventurer not found", 404);
    }

    // If guildId is being changed, verify the new guild exists
    if (data.guildId) {
        const guild = await prisma.guild.findUnique({
            where: { id: data.guildId },
        });
        if (!guild) {
            throw new AppError(ErrorCodes.NOT_FOUND, "Guild not found", 404);
        }
    }

    const updateData: any = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.type !== undefined) updateData.type = data.type as string;
    if (data.status !== undefined) updateData.status = data.status.toUpperCase();
    if (data.xp !== undefined) updateData.xp = data.xp;
    if (data.guildId !== undefined) updateData.guildId = data.guildId;

    const adventurer = await prisma.adventurer.update({
        where: { id },
        data: updateData,
        include: {
            user: true,
            guild: true,
        },
    });

    return {
        id: adventurer.id,
        type: adventurer.type as unknown as AdventurerType,
        status: adventurer.status.toLowerCase() as
            | "available"
            | "on_quest"
            | "injured"
            | "dead"
            | "sleeping",
        xp: adventurer.xp,
    };
}

/**
 * ! Rôle: Assistant
 * Delete an adventurer and associated user
 */
export async function remove(id: string): Promise<void> {
    // Check if adventurer exists
    const existing = await prisma.adventurer.findUnique({
        where: { id },
        include: {
            user: true,
            assignments: true,
        },
    });

    if (!existing) {
        throw new AppError(ErrorCodes.NOT_FOUND, "Adventurer not found", 404);
    }

    // Check if adventurer has active quests
    if (existing.assignments.length > 0) {
        throw new AppError(
            ErrorCodes.VALIDATION_ERROR,
            "Cannot delete adventurer with active quest assignments",
            422,
        );
    }

    // Delete in transaction
    await prisma.$transaction(async (tx: any) => {
        // Delete the associated user if exists
        if (existing.user) {
            await tx.user.delete({
                where: { id: existing.user.id },
            });
        }

        // Delete the adventurer
        await tx.adventurer.delete({
            where: { id },
        });
    });
}
