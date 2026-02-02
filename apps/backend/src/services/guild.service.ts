import {
    Guild,
    Bank,
    Item,
    ItemName,
    ItemType,
    ItemRarity,
    ItemStatus,
    AdventurerType,
    AdventurerStatus,
} from "@mmakve/shared";
import { prisma } from "../prisma-client";
import { AppError, ErrorCodes } from "../utils/error";

export async function getAll(params?: { id?: string; name?: string }): Promise<Guild[]> {
    const where: any = {};

    if (params?.id) {
        where.id = params.id;
    }
    if (params?.name) {
        where.name = { contains: params.name, mode: "insensitive" };
    }

    const guilds = await prisma.guild.findMany({
        where,
        include: {
            bank: {
                include: {
                    history: true,
                },
            },
            adventurers: {
                include: {
                    user: true,
                },
            },
            inventory: {
                include: {
                    item: {
                        include: {
                            questAssignments: {
                                include: {
                                    questAssignment: {
                                        include: {
                                            quest: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    return guilds.map((guild) => ({
        id: guild.id,
        name: guild.name,
        bank: guild.bank
            ? {
                  balance: guild.bank.amount,
                  transactions: guild.bank.history.map((t) => ({
                      id: t.id,
                      amount: t.amount,
                      date: t.date,
                      name: t.name,
                  })),
              }
            : undefined,
        adventurers: guild.adventurers.map((adv) => ({
            id: adv.id,
            user: adv.user
                ? {
                      id: adv.user.id,
                      name: adv.user.name,
                      role: adv.user.role,
                      createdAt: new Date(adv.user.createdAt),
                  }
                : (null as any),
            type: adv.type as unknown as AdventurerType,
            status: adv.status.toLowerCase() as AdventurerStatus,
            xp: adv.xp,
        })),
        inventory: guild.inventory.map((invItem) => {
            // Trouver l'assignement de quête en cours (s'il existe)
            const activeQuestAssignment = invItem.item.questAssignments.find(
                (qa: any) =>
                    qa.questAssignment.quest &&
                    ["PENDING", "IN_PROGRESS", "APPROVED"].includes(
                        qa.questAssignment.quest.status as string,
                    ),
            );

            return {
                id: invItem.item.id,
                name: invItem.item.name as unknown as ItemName,
                description: invItem.item.description,
                durability: invItem.item.durability ?? undefined,
                maxDurability: invItem.item.maxDurability ?? undefined,
                quantity: invItem.item.quantity ?? undefined,
                isConsumable: invItem.item.isConsumable,
                price: invItem.item.price,
                type: invItem.item.type as ItemType,
                rarity: invItem.item.rarity as ItemRarity,
                profiles: invItem.item.profiles as unknown as AdventurerType[],
                status: invItem.item.status as ItemStatus,
                questId: activeQuestAssignment?.questAssignment.quest?.id,
            };
        }),
    }));
}

export async function getGuildBank(guildId: string): Promise<Bank | null> {
    const guild = await prisma.guild.findUnique({
        where: { id: guildId },
        include: {
            bank: {
                include: {
                    history: true,
                },
            },
        },
    });

    if (!guild || !guild.bank) {
        return null;
    }

    return {
        balance: guild.bank.amount,
        transactions: guild.bank.history.map((t) => ({
            id: t.id,
            amount: t.amount,
            date: t.date,
            name: t.name,
        })),
    };
}

export async function getGuildInventory(guildId: string): Promise<Item[]> {
    const guild = await prisma.guild.findUnique({
        where: { id: guildId },
        include: {
            inventory: {
                include: {
                    item: {
                        include: {
                            questAssignments: {
                                include: {
                                    questAssignment: {
                                        include: {
                                            quest: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    if (!guild) {
        return [];
    }

    return guild.inventory.map((invItem: any) => {
        // Trouver l'assignement de quête en cours (s'il existe)
        const activeQuestAssignment = invItem.item.questAssignments.find(
            (qa: any) =>
                qa.questAssignment.quest &&
                ["PENDING", "IN_PROGRESS", "APPROVED"].includes(
                    qa.questAssignment.quest.status as string,
                ),
        );

        return {
            id: invItem.item.id,
            name: invItem.item.name as unknown as ItemName,
            description: invItem.item.description,
            durability: invItem.item.durability ?? undefined,
            maxDurability: invItem.item.maxDurability ?? undefined,
            quantity: invItem.item.quantity ?? undefined,
            isConsumable: invItem.item.isConsumable,
            price: invItem.item.price,
            type: invItem.item.type as ItemType,
            rarity: invItem.item.rarity as ItemRarity,
            profiles: invItem.item.profiles as unknown as AdventurerType[],
            status: invItem.item.status as ItemStatus,
            questId: activeQuestAssignment?.questAssignment.quest?.id,
        };
    });
}

export async function addItemToGuildInventory(
    guildId: string,
    itemData: Omit<Item, "id">,
): Promise<Item> {
    // Vérifier que la guilde existe
    const guild = await prisma.guild.findUnique({
        where: { id: guildId },
    });

    if (!guild) {
        throw new AppError(ErrorCodes.NOT_FOUND, "Guild not found", 404);
    }

    // Créer l'item
    const item = await prisma.item.create({
        data: {
            name: itemData.name as any,
            description: itemData.description,
            durability: itemData.durability ?? null,
            maxDurability: itemData.maxDurability ?? null,
            quantity: itemData.quantity ?? null,
            isConsumable: itemData.isConsumable,
            price: itemData.price,
            type: itemData.type as any,
            rarity: itemData.rarity as any,
            profiles: itemData.profiles as any[],
            status: itemData.status as any,
        },
    });

    // Lier l'item à la guilde
    await prisma.itemOnGuild.create({
        data: {
            guildId: guildId,
            itemId: item.id,
        },
    });

    return {
        id: item.id,
        name: item.name as unknown as ItemName,
        description: item.description,
        durability: item.durability ?? undefined,
        maxDurability: item.maxDurability ?? undefined,
        quantity: item.quantity ?? undefined,
        isConsumable: item.isConsumable,
        price: item.price,
        type: item.type as ItemType,
        rarity: item.rarity as ItemRarity,
        profiles: item.profiles as unknown as AdventurerType[],
        status: item.status as ItemStatus,
    };
}

export async function updateGuildInventoryItem(
    guildId: string,
    itemId: string,
    itemData: Partial<Item>,
): Promise<Item> {
    // Vérifier que l'item appartient à la guilde
    const itemOnGuild = await prisma.itemOnGuild.findUnique({
        where: {
            guildId_itemId: {
                guildId: guildId,
                itemId: itemId,
            },
        },
    });

    if (!itemOnGuild) {
        throw new AppError(ErrorCodes.NOT_FOUND, "Item not found in guild inventory", 404);
    }

    // Mettre à jour l'item
    const updateData: any = {};
    if (itemData.name !== undefined) updateData.name = itemData.name as any;
    if (itemData.description !== undefined) updateData.description = itemData.description;
    if (itemData.durability !== undefined) updateData.durability = itemData.durability;
    if (itemData.maxDurability !== undefined) updateData.maxDurability = itemData.maxDurability;
    if (itemData.quantity !== undefined) updateData.quantity = itemData.quantity;
    if (itemData.isConsumable !== undefined) updateData.isConsumable = itemData.isConsumable;
    if (itemData.price !== undefined) updateData.price = itemData.price;
    if (itemData.type !== undefined) updateData.type = itemData.type as any;
    if (itemData.rarity !== undefined) updateData.rarity = itemData.rarity as any;
    if (itemData.profiles !== undefined) updateData.profiles = itemData.profiles as any[];
    if (itemData.status !== undefined) updateData.status = itemData.status as any;

    const item = await prisma.item.update({
        where: { id: itemId },
        data: updateData,
    });

    return {
        id: item.id,
        name: item.name as unknown as ItemName,
        description: item.description,
        durability: item.durability ?? undefined,
        maxDurability: item.maxDurability ?? undefined,
        quantity: item.quantity ?? undefined,
        isConsumable: item.isConsumable,
        price: item.price,
        type: item.type as ItemType,
        rarity: item.rarity as ItemRarity,
        profiles: item.profiles as unknown as AdventurerType[],
        status: item.status as ItemStatus,
    };
}

export async function deleteGuildInventoryItem(guildId: string, itemId: string): Promise<void> {
    // Vérifier que l'item appartient à la guilde
    const itemOnGuild = await prisma.itemOnGuild.findUnique({
        where: {
            guildId_itemId: {
                guildId: guildId,
                itemId: itemId,
            },
        },
    });

    if (!itemOnGuild) {
        throw new AppError(ErrorCodes.NOT_FOUND, "Item not found in guild inventory", 404);
    }

    // Supprimer la relation
    await prisma.itemOnGuild.delete({
        where: {
            guildId_itemId: {
                guildId: guildId,
                itemId: itemId,
            },
        },
    });

    // Optionnel : supprimer l'item lui-même si plus utilisé
    const itemUsage = await prisma.itemOnGuild.findMany({
        where: { itemId: itemId },
    });

    if (itemUsage.length === 0) {
        await prisma.item.delete({
            where: { id: itemId },
        });
    }
}
