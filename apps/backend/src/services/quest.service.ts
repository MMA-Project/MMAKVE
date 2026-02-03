import {
    Quest,
    QuestStatus,
    AdventurerType,
    QuestAssignement,
    QuestCreation,
    Adventurer,
} from "@mmakve/shared";
import { getUserById } from "./auth.service";
import { prisma } from "../prisma-client";
import {
    calculateSoloWinProbability,
    calculateTeamWinProbability,
    calculateRewardDistribution,
} from "../utils/quests";
import { AppError, ErrorCodes } from "../utils/error";

/**
 * ! Rôle: Assistant
 */
export async function getAll(params?: {
    status?: QuestStatus | string;
    createdBy?: string;
    profils?: AdventurerType[];
    minReward?: number;
    maxReward?: number;
    startDate?: Date;
    endDate?: Date;
}): Promise<Quest[]> {
    const where: any = {};

    if (params?.status) {
        where.status = params.status;
    }
    if (params?.createdBy) {
        where.createdBy = params.createdBy;
    }
    if (params?.minReward !== undefined || params?.maxReward !== undefined) {
        where.reward = {};
        if (params.minReward !== undefined) {
            where.reward.gte = params.minReward;
        }
        if (params.maxReward !== undefined) {
            where.reward.lte = params.maxReward;
        }
    }
    if (params?.startDate) {
        where.start_date = { gte: params.startDate };
    }
    if (params?.endDate) {
        where.end_date = { lte: params.endDate };
    }
    if (params?.profils && params.profils.length > 0) {
        where.profils = {
            hasSome: params.profils,
        };
    }

    const quests = await prisma.quest.findMany({
        where,
        include: {
            assignments: {
                include: {
                    items: {
                        include: {
                            item: true,
                        },
                    },
                    adventurer: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            requester: true,
        },
        orderBy: { start_date: "desc" },
    });

    return quests.map((q) => ({
        id: q.id,
        requester: q.requester,
        title: q.title,
        description: q.description ?? "",
        deadline: q.deadline ? new Date(q.deadline) : new Date(),
        status: (q.status as QuestStatus) ?? QuestStatus.PENDING,
        reward: q.reward ?? 0,
        options: {
            profils: (q.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: q.start_date ? new Date(q.start_date) : new Date(),
            end_date: q.end_date ? new Date(q.end_date) : new Date(),
            xp_required: q.xp_required ?? 0,
            xp_reward: q.xp_reward ?? 0,
            assignments: (q.assignments ?? []).map((a) => ({
                id: a.id,
                adventurer: a.adventurer as unknown as Adventurer,
                items: a.items.map((itemOnAssignment) => itemOnAssignment.item) as any[],
            })) as unknown as QuestAssignement[],
        },
    }));
}

export const getById = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.findUnique({
        where: { id },
        include: {
            assignments: {
                include: {
                    items: {
                        include: {
                            item: true,
                        },
                    },
                    adventurer: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            requester: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.requester,
        title: quest.title,
        description: quest.description ?? "",
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.PENDING,
        options: {
            profils: (quest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.start_date ? new Date(quest.start_date) : new Date(),
            end_date: quest.end_date ? new Date(quest.end_date) : new Date(),
            xp_required: quest.xp_required ?? 0,
            xp_reward: quest.xp_reward ?? 0,
            assignments: (quest.assignments ?? []).map((a) => ({
                id: a.id,
                adventurer: a.adventurer as unknown as Adventurer,
                items: a.items.map((itemOnAssignment) => itemOnAssignment.item) as any[],
            })) as unknown as QuestAssignement[],
        },
    };
};

export const getAllByUser = async (userId: string): Promise<Quest[]> => {
    const quests = await prisma.quest.findMany({
        where: { createdBy: userId },
        include: {
            assignments: {
                include: {
                    items: {
                        include: {
                            item: true,
                        },
                    },
                    adventurer: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            requester: true,
        },
        orderBy: { end_date: "desc" },
    });

    return quests.map((q) => ({
        id: q.id,
        requester: q.requester,
        title: q.title,
        description: q.description ?? "",
        deadline: q.deadline ? new Date(q.deadline) : new Date(),
        reward: q.reward ?? 0,
        status: (q.status as QuestStatus) ?? QuestStatus.PENDING,
        options: {
            profils: (q.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: q.start_date ? new Date(q.start_date) : new Date(),
            end_date: q.end_date ? new Date(q.end_date) : new Date(),
            xp_required: q.xp_required ?? 0,
            xp_reward: q.xp_reward ?? 0,
            assignments: (q.assignments ?? []).map((a) => ({
                id: a.id,
                adventurer: a.adventurer as unknown as Adventurer,
                items: a.items.map((itemOnAssignment) => itemOnAssignment.item) as any[],
            })) as unknown as QuestAssignement[],
        },
    }));
};

// Classic creation
export const create = async (data: QuestCreation): Promise<Quest> => {
    const quest = await prisma.quest.create({
        data: {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            reward: data.reward,
            status: QuestStatus.PENDING as any,
            createdBy: data.requester.id,
            xp_required: data.options?.xp_required ?? 0,
            profils: data.options?.profils ?? [],
            start_date: data.options?.start_date,
            end_date: data.options?.end_date,
        },
        include: {
            assignments: {
                include: {
                    items: {
                        include: {
                            item: true,
                        },
                    },
                    adventurer: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
        },
    });

    return {
        id: quest.id,
        requester: data.requester,
        title: quest.title,
        description: quest.description ?? "",
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.PENDING,
        options: {
            profils: (quest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.start_date ? new Date(quest.start_date) : new Date(),
            end_date: quest.end_date ? new Date(quest.end_date) : new Date(),
            xp_required: quest.xp_required ?? 0,
            xp_reward: quest.xp_reward ?? 0,
            assignments: (quest.assignments ?? []).map((a) => ({
                id: a.id,
                adventurer: a.adventurer as unknown as Adventurer,
                items: a.items.map((itemOnAssignment) => itemOnAssignment.item) as any[],
            })) as unknown as QuestAssignement[],
        },
    };
};

export const update = async (id: string, data: Partial<Quest>): Promise<Quest | null> => {
    const quest = await prisma.quest.update({
        where: { id },
        data: {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            reward: data.reward,
            status: data.status as any,
        },
        include: {
            assignments: {
                include: {
                    items: {
                        include: {
                            item: true,
                        },
                    },
                    adventurer: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            requester: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.requester,
        title: quest.title,
        description: quest.description ?? "",
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.PENDING,
        options: {
            profils: (quest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.start_date ? new Date(quest.start_date) : new Date(),
            end_date: quest.end_date ? new Date(quest.end_date) : new Date(),
            xp_required: quest.xp_required ?? 0,
            xp_reward: quest.xp_reward ?? 0,
            assignments: (quest.assignments ?? []).map((a) => ({
                id: a.id,
                adventurer: a.adventurer as unknown as Adventurer,
                items: a.items.map((itemOnAssignment) => itemOnAssignment.item) as any[],
            })) as unknown as QuestAssignement[],
        },
    };
};

export const validate = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.update({
        where: { id },
        data: { status: QuestStatus.APPROVED as any },
        include: {
            assignments: {
                include: {
                    items: {
                        include: {
                            item: true,
                        },
                    },
                    adventurer: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            requester: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.requester,
        title: quest.title,
        description: quest.description ?? "",
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.PENDING,
        options: {
            profils: (quest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.start_date ? new Date(quest.start_date) : new Date(),
            end_date: quest.end_date ? new Date(quest.end_date) : new Date(),
            xp_required: quest.xp_required ?? 0,
            xp_reward: quest.xp_reward ?? 0,
            assignments: (quest.assignments ?? []).map((a) => ({
                id: a.id,
                adventurer: a.adventurer as unknown as Adventurer,
                items: a.items.map((itemOnAssignment) => itemOnAssignment.item) as any[],
            })) as unknown as QuestAssignement[],
        },
    };
};

export const cancel = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.update({
        where: { id },
        data: { status: QuestStatus.CANCELED as any },
        include: {
            assignments: {
                include: {
                    items: {
                        include: {
                            item: true,
                        },
                    },
                    adventurer: {
                        include: {
                            user: true,
                        },
                    },
                },
            },
            requester: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.requester,
        title: quest.title,
        description: quest.description ?? "",
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.PENDING,
        options: {
            profils: (quest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.start_date ? new Date(quest.start_date) : new Date(),
            end_date: quest.end_date ? new Date(quest.end_date) : new Date(),
            xp_required: quest.xp_required ?? 0,
            xp_reward: quest.xp_reward ?? 0,
            assignments: (quest.assignments ?? []).map((a) => ({
                id: a.id,
                adventurer: a.adventurer as unknown as Adventurer,
                items: a.items.map((itemOnAssignment) => itemOnAssignment.item) as any[],
            })) as unknown as QuestAssignement[],
        },
    };
};

export const processQuest = async (
    id: string,
    data: {
        profils: AdventurerType[];
        xpRequired: number;
        xpGained: number;
        adventurers: string[];
        approved: boolean;
        startDate?: Date;
        endDate?: Date;
    },
): Promise<Quest | null> => {
    const quest = await prisma.quest.findUnique({
        where: { id },
        include: {
            assignments: true,
            requester: true,
        },
    });

    if (!quest) throw new AppError(ErrorCodes.NOT_FOUND, "Quest not found", 404);

    if (!data.approved) {
        // Rejeter la quête
        const updatedQuest = await prisma.quest.update({
            where: { id },
            data: { status: QuestStatus.REJECTED as any },
            include: {
                assignments: {
                    include: {
                        items: { include: { item: true } },
                        adventurer: { include: { user: true } },
                    },
                },
                requester: true,
            },
        });

        return {
            id: updatedQuest.id,
            requester: updatedQuest.requester,
            title: updatedQuest.title,
            description: updatedQuest.description ?? "",
            deadline: updatedQuest.deadline ? new Date(updatedQuest.deadline) : new Date(),
            reward: updatedQuest.reward ?? 0,
            status: QuestStatus.REJECTED,
            options: {
                profils: (updatedQuest.profils ?? []).map((p) => p as unknown as AdventurerType),
                start_date: updatedQuest.start_date
                    ? new Date(updatedQuest.start_date)
                    : new Date(),
                end_date: updatedQuest.end_date ? new Date(updatedQuest.end_date) : new Date(),
                xp_required: updatedQuest.xp_required ?? 0,
                xp_reward: updatedQuest.xp_reward ?? 0,
                assignments: [],
            },
        };
    }

    // Approuver et créer les assignments
    const updatedQuest = await prisma.quest.update({
        where: { id },
        data: {
            status: QuestStatus.APPROVED as any,
            profils: data.profils as any[],
            xp_required: data.xpRequired,
            xp_reward: data.xpGained,
            start_date: data.startDate,
            end_date: data.endDate,
        },
        include: {
            assignments: {
                include: {
                    items: { include: { item: true } },
                    adventurer: { include: { user: true } },
                },
            },
            requester: true,
        },
    });

    // Supprimer les anciens assignments
    await prisma.questAssignment.deleteMany({
        where: { questId: id },
    });

    // Créer les nouveaux assignments
    for (const adventurerId of data.adventurers) {
        await prisma.questAssignment.create({
            data: {
                questId: id,
                adventurerId: adventurerId,
            },
        });
    }

    // Récupérer la quête mise à jour avec les assignments
    const finalQuest = await prisma.quest.findUnique({
        where: { id },
        include: {
            assignments: {
                include: {
                    items: { include: { item: true } },
                    adventurer: { include: { user: true } },
                },
            },
            requester: true,
        },
    });

    if (!finalQuest) return null;

    return {
        id: finalQuest.id,
        requester: finalQuest.requester,
        title: finalQuest.title,
        description: finalQuest.description ?? "",
        deadline: finalQuest.deadline ? new Date(finalQuest.deadline) : new Date(),
        reward: finalQuest.reward ?? 0,
        status: QuestStatus.APPROVED,
        options: {
            profils: (finalQuest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: finalQuest.start_date ? new Date(finalQuest.start_date) : new Date(),
            end_date: finalQuest.end_date ? new Date(finalQuest.end_date) : new Date(),
            xp_required: finalQuest.xp_required ?? 0,
            xp_reward: finalQuest.xp_reward ?? 0,
            assignments: (finalQuest.assignments ?? []).map((a) => ({
                id: a.id,
                adventurer: a.adventurer as unknown as Adventurer,
                items: a.items.map((itemOnAssignment) => itemOnAssignment.item) as any[],
            })) as unknown as QuestAssignement[],
        },
    };
};

export const suggestQuestTeammates = async (
    id: string,
    options?: {
        xpRequired?: number;
        profils?: AdventurerType[];
    },
): Promise<{
    bestTeammates: Adventurer[];
    teamRates: number[];
    winRate: number;
}> => {
    const quest = await prisma.quest.findUnique({
        where: { id },
        include: {
            assignments: true,
            requester: true,
        },
    });

    if (!quest) throw new AppError(ErrorCodes.NOT_FOUND, "Quest not found", 404);

    const xp_required = options?.xpRequired ?? quest?.xp_required ?? 1000;
    const profils = options?.profils?.length ? options.profils : (quest?.profils ?? []);

    const availableTeammates = await prisma.adventurer.findMany({
        where: { status: "AVAILABLE", AND: { type: { in: profils } } },
        include: {
            user: true,
        },
    });

    const bestTeammates: Adventurer[] = [];

    for (const profil of profils) {
        const sameType = availableTeammates.filter((a) => a.type === profil);
        if (sameType.length === 0) continue;

        let bestCandidate: Adventurer | null = null;
        let bestRate = 0;

        for (const candidate of sameType) {
            const simulatedTeam = [...bestTeammates, candidate];
            const teamRates = simulatedTeam.map((a) =>
                calculateSoloWinProbability(a.xp, xp_required),
            );
            const winRate = calculateTeamWinProbability(teamRates);

            if (winRate > bestRate) {
                bestRate = winRate;
                bestCandidate = candidate as any;
            }
        }

        if (bestCandidate) bestTeammates.push(bestCandidate);
    }

    const teamRates = bestTeammates.map((a) => calculateSoloWinProbability(a.xp, xp_required));
    const winRate = calculateTeamWinProbability(teamRates);
    return {
        bestTeammates,
        teamRates,
        winRate,
    };
};
export const startQuest = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.findUnique({
        where: { id },
        include: {
            assignments: {
                include: {
                    adventurer: {
                        include: {
                            guild: true,
                        },
                    },
                },
            },
        },
    });

    if (!quest) throw new AppError(ErrorCodes.NOT_FOUND, "Quest not found", 404);

    if (quest.status !== QuestStatus.APPROVED) {
        throw new AppError(
            ErrorCodes.VALIDATION_ERROR,
            "Quest must be in APPROVED status to start",
            400,
        );
    }

    // Mettre la quête en IN_PROGRESS
    const updatedQuest = await prisma.quest.update({
        where: { id },
        data: { status: "IN_PROGRESS" },
        include: {
            assignments: {
                include: {
                    adventurer: {
                        include: {
                            guild: true,
                        },
                    },
                    items: true,
                },
            },
            requester: true,
        },
    });

    // Mettre à jour le statut des aventuriers assignés en ON_QUEST
    if (updatedQuest.assignments.length > 0) {
        try {
            // Récupérer la guild du premier aventurier (supposée être la même pour tous)
            const guild = updatedQuest.assignments[0]?.adventurer?.guild;

            if (guild && guild.bankId) {
                // Calculer 20% de la prime
                const deposit = Math.round(quest.reward * 0.2 * 100) / 100;

                // Créditer la banque de la guild
                await prisma.bank.update({
                    where: { id: guild.bankId },
                    data: { amount: { increment: deposit } },
                });

                // Créer une transaction
                await prisma.transaction.create({
                    data: {
                        bankId: guild.bankId,
                        amount: deposit,
                        date: Math.floor(Date.now() / 1000),
                        name: `Acompte quête - ${quest.title}`,
                    },
                });
            }

            // Mettre à jour le statut des aventuriers
            await Promise.all(
                updatedQuest.assignments.map((assignment) =>
                    prisma.adventurer.update({
                        where: { id: assignment.adventurer.id },
                        data: { status: "ON_QUEST" },
                    }),
                ),
            );
        } catch (error) {
            console.error("Error updating adventurer status or guild bank:", error);
            throw error;
        }
    }

    return updatedQuest as any;
};

/**
 * Compléter une quête avec succès
 * ! Rôle: Assistant
 */
export const completeQuestSuccess = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.findUnique({
        where: { id },
        include: {
            assignments: {
                include: {
                    adventurer: {
                        include: {
                            guild: true,
                            user: true,
                        },
                    },
                    items: {
                        include: {
                            item: true,
                        },
                    },
                },
            },
            requester: true,
        },
    });

    if (!quest) throw new AppError(ErrorCodes.NOT_FOUND, "Quest not found", 404);

    if (quest.status !== "IN_PROGRESS") {
        throw new AppError(
            ErrorCodes.VALIDATION_ERROR,
            "Quest must be in IN_PROGRESS status to complete",
            400,
        );
    }

    // Calculer la durée de la mission en jours
    const startDate = quest.start_date ? new Date(quest.start_date) : new Date();
    const endDate = quest.end_date ? new Date(quest.end_date) : new Date();
    const durationInDays = Math.max(
        1,
        Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)),
    );

    // Récupérer la guild du premier aventurier
    const guild = quest.assignments[0]?.adventurer?.guild;

    if (guild && guild.bankId) {
        // Créditer les 80% restants de la prime
        const remainingReward = Math.round(quest.reward * 0.8 * 100) / 100;

        await prisma.bank.update({
            where: { id: guild.bankId },
            data: { amount: { increment: remainingReward } },
        });

        await prisma.transaction.create({
            data: {
                bankId: guild.bankId,
                amount: remainingReward,
                date: Math.floor(Date.now() / 1000),
                name: `Prime quête (succès) - ${quest.title}`,
            },
        });
    }

    // Traiter chaque aventurier
    for (const assignment of quest.assignments) {
        const adventurer = assignment.adventurer;

        // Calculer le paiement de l'aventurier
        const j_base = 3; // Taux de base journalier (même valeur que le frontend)
        const dailyRate = calculateRewardDistribution(adventurer.xp, j_base);
        const payment = Math.round(dailyRate * durationInDays * 100) / 100;

        // Créer une transaction négative pour le paiement
        if (guild && guild.bankId) {
            await prisma.bank.update({
                where: { id: guild.bankId },
                data: { amount: { decrement: payment } },
            });

            await prisma.transaction.create({
                data: {
                    bankId: guild.bankId,
                    amount: -payment,
                    date: Math.floor(Date.now() / 1000),
                    name: `Paiement aventurier ${adventurer.user?.name || adventurer.id} - ${quest.title}`,
                },
            });
        }

        // Incrémenter l'XP de l'aventurier avec xp_reward
        await prisma.adventurer.update({
            where: { id: adventurer.id },
            data: {
                status: "RESTING",
                xp: { increment: quest.xp_reward || 0 },
            },
        });

        // Traiter les items utilisés
        for (const itemOnAssignment of assignment.items) {
            const item = itemOnAssignment.item;

            if (item.isConsumable) {
                // Consommer l'item
                await prisma.item.update({
                    where: { id: item.id },
                    data: { status: "CONSUMED" },
                });
            } else {
                // Réduire la durabilité
                const newDurability = (item.durability || 0) - durationInDays;

                if (newDurability <= 0) {
                    // Item cassé
                    await prisma.item.update({
                        where: { id: item.id },
                        data: {
                            status: "BROKEN",
                            durability: 0,
                        },
                    });
                } else {
                    // Item toujours disponible
                    await prisma.item.update({
                        where: { id: item.id },
                        data: {
                            status: "AVAILABLE",
                            durability: newDurability,
                        },
                    });
                }
            }
        }
    }

    // Mettre à jour le statut de la quête
    const updatedQuest = await prisma.quest.update({
        where: { id },
        data: { status: "COMPLETED" },
        include: {
            assignments: {
                include: {
                    items: { include: { item: true } },
                    adventurer: { include: { user: true } },
                },
            },
            requester: true,
        },
    });

    return updatedQuest as any;
};

/**
 * Compléter une quête avec échec
 * ! Rôle: Assistant
 */
export const completeQuestFail = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.findUnique({
        where: { id },
        include: {
            assignments: {
                include: {
                    adventurer: {
                        include: {
                            guild: true,
                            user: true,
                        },
                    },
                    items: {
                        include: {
                            item: true,
                        },
                    },
                },
            },
            requester: true,
        },
    });

    if (!quest) throw new AppError(ErrorCodes.NOT_FOUND, "Quest not found", 404);

    if (quest.status !== "IN_PROGRESS") {
        throw new AppError(
            ErrorCodes.VALIDATION_ERROR,
            "Quest must be in IN_PROGRESS status to fail",
            400,
        );
    }

    // Calculer la durée de la mission en jours
    const startDate = quest.start_date ? new Date(quest.start_date) : new Date();
    const endDate = quest.end_date ? new Date(quest.end_date) : new Date();
    const durationInDays = Math.max(
        1,
        Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)),
    );

    // Récupérer la guild
    const guild = quest.assignments[0]?.adventurer?.guild;

    // Traiter chaque aventurier
    for (const assignment of quest.assignments) {
        const adventurer = assignment.adventurer;

        // Calculer le paiement avec malus de 40%
        const j_base = 3; // Taux de base journalier (même valeur que le frontend)
        const dailyRate = calculateRewardDistribution(adventurer.xp, j_base);
        const payment = Math.round(dailyRate * durationInDays * 0.6 * 100) / 100; // 60% du paiement normal

        // Créer une transaction négative pour le paiement
        if (guild && guild.bankId) {
            await prisma.bank.update({
                where: { id: guild.bankId },
                data: { amount: { decrement: payment } },
            });

            await prisma.transaction.create({
                data: {
                    bankId: guild.bankId,
                    amount: -payment,
                    date: Math.floor(Date.now() / 1000),
                    name: `Paiement aventurier (échec) ${adventurer.user?.name || adventurer.id} - ${quest.title}`,
                },
            });
        }

        // Mettre l'aventurier en repos (pas d'XP)
        await prisma.adventurer.update({
            where: { id: adventurer.id },
            data: { status: "RESTING" },
        });

        // Traiter les items utilisés
        for (const itemOnAssignment of assignment.items) {
            const item = itemOnAssignment.item;

            if (item.isConsumable) {
                // Consommer l'item
                await prisma.item.update({
                    where: { id: item.id },
                    data: { status: "CONSUMED" },
                });
            } else {
                // Réduire la durabilité
                const newDurability = (item.durability || 0) - durationInDays;

                if (newDurability <= 0) {
                    // Item cassé
                    await prisma.item.update({
                        where: { id: item.id },
                        data: {
                            status: "BROKEN",
                            durability: 0,
                        },
                    });
                } else {
                    // Item toujours disponible
                    await prisma.item.update({
                        where: { id: item.id },
                        data: {
                            status: "AVAILABLE",
                            durability: newDurability,
                        },
                    });
                }
            }
        }
    }

    // Mettre à jour le statut de la quête
    const updatedQuest = await prisma.quest.update({
        where: { id },
        data: { status: "FAILED" },
        include: {
            assignments: {
                include: {
                    items: { include: { item: true } },
                    adventurer: { include: { user: true } },
                },
            },
            requester: true,
        },
    });

    return updatedQuest as any;
};
