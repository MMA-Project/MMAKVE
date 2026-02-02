import { prisma } from "../prisma-client";
import { AppError, ErrorCodes } from "../utils/error";
import bcrypt from "bcryptjs";
import type { Adventurer, AdventurerStatus, AdventurerType } from "@mmakve/shared";

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
}): Promise<Adventurer[] | []> {
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

    return adventurers.map((adventurer) => ({
        id: adventurer.id,
        user: adventurer.user
            ? {
                  id: adventurer.user.id,
                  name: adventurer.user.name,
                  role: adventurer.user.role,
                  createdAt: new Date(adventurer.user.createdAt),
              }
            : (null as any),
        type: adventurer.type as unknown as AdventurerType,
        status: adventurer.status.toLowerCase() as AdventurerStatus,
        xp: adventurer.xp,
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
        user: adventurer.user
            ? {
                  id: adventurer.user.id,
                  name: adventurer.user.name,
                  role: adventurer.user.role,
                  createdAt: new Date(adventurer.user.createdAt),
              }
            : (null as any),
        type: adventurer.type as unknown as AdventurerType,
        status: adventurer.status.toLowerCase() as AdventurerStatus,
        xp: adventurer.xp,
    };
}

/**
 * ! Rôle: Assistant
 * Get adventurer by User ID
 */
export async function getByUserId(userId: string) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            adventurer: {
                include: {
                    user: true,
                    guild: true,
                    assignments: {
                        include: {
                            quest: true,
                        },
                    },
                },
            },
        },
    });

    if (!user?.adventurer) return null;

    const adventurer = user.adventurer;

    return {
        id: adventurer.id,
        guildId: adventurer.guildId,
        user: adventurer.user
            ? {
                  id: adventurer.user.id,
                  name: adventurer.user.name,
                  role: adventurer.user.role,
                  createdAt: new Date(adventurer.user.createdAt),
              }
            : (null as any),
        type: adventurer.type as unknown as AdventurerType,
        status: adventurer.status.toLowerCase() as AdventurerStatus,
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
        user: assignment.adventurer.user
            ? {
                  id: assignment.adventurer.user.id,
                  name: assignment.adventurer.user.username,
                  role: assignment.adventurer.user.role,
                  createdAt: new Date(assignment.adventurer.user.createdAt),
              }
            : (null as any),
        type: assignment.adventurer.type as unknown as AdventurerType,
        status: assignment.adventurer.status.toLowerCase() as AdventurerStatus,
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

    // Check if username already exists (checking the 'name' field in User model)
    const existingUser = await prisma.user.findUnique({
        where: { name: data.username },
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
        // Create the adventurer first (without name, it goes into User)
        const adventurer = await tx.adventurer.create({
            data: {
                type: data.type as string,
                status: "AVAILABLE",
                xp: 0,
                guildId: data.guildId,
            },
        });

        // Create the user linked to the adventurer
        const user = await tx.user.create({
            data: {
                name: data.username,
                password: hashedPassword,
                role: "ADVENTURER",
                adventurerId: adventurer.id,
            },
        });

        return { adventurer, user };
    });

    return {
        id: result.adventurer.id,
        user: {
            id: result.user.id,
            name: result.user.name,
            role: result.user.role,
            createdAt: new Date(result.user.createdAt),
        },
        type: result.adventurer.type as unknown as AdventurerType,
        status: result.adventurer.status.toLowerCase() as AdventurerStatus,
        xp: result.adventurer.xp,
    };
}

/**
 * ! Rôle: Assistant
 * Update an adventurer
 */
export async function modify(
    id: string,
    data: Partial<{
        user: Partial<{ name: string; role: string }>;
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
        include: { user: true },
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
    if (data.type !== undefined) updateData.type = data.type as string;
    if (data.status !== undefined) updateData.status = data.status.toUpperCase();
    if (data.xp !== undefined) updateData.xp = data.xp;
    if (data.guildId !== undefined) updateData.guildId = data.guildId;

    // Update User if user data is provided
    if (data.user && existing.user) {
        const userUpdateData: any = {};
        if (data.user.name !== undefined) userUpdateData.name = data.user.name;
        if (data.user.role !== undefined) userUpdateData.role = data.user.role;

        if (Object.keys(userUpdateData).length > 0) {
            await prisma.user.update({
                where: { id: existing.user.id },
                data: userUpdateData,
            });
        }
    }

    // Handle legacy 'name' field (for direct updates)
    if (data.name !== undefined && existing.user) {
        await prisma.user.update({
            where: { id: existing.user.id },
            data: { name: data.name },
        });
    }

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
        user: adventurer.user
            ? {
                  id: adventurer.user.id,
                  name: adventurer.user.name,
                  role: adventurer.user.role,
                  createdAt: new Date(adventurer.user.createdAt),
              }
            : (null as any),
        type: adventurer.type as unknown as AdventurerType,
        status: adventurer.status.toLowerCase() as AdventurerStatus,
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
