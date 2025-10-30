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
import { calculateSoloWinProbability, calculateTeamWinProbability } from "../utils/quests";
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
            assignments: true,
        },
        orderBy: { start_date: "desc" },
    });

    return quests.map((q) => ({
        id: q.id,
        requester: q.createdBy ? (getUserById(q.createdBy) as any) : null,
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
            assignments: (q.assignments ?? []) as unknown as QuestAssignement[],
        },
    }));
}

export const getAllByUser = async (userId: string): Promise<Quest[]> => {
    const quests = await prisma.quest.findMany({
        where: { createdBy: userId },
        include: {
            assignments: true,
        },
        orderBy: { end_date: "desc" },
    });

    return quests.map((q) => ({
        id: q.id,
        requester: q.createdBy ? (getUserById(q.createdBy) as any) : null,
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
            assignments: (q.assignments ?? []) as unknown as QuestAssignement[],
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
        },
        include: {
            assignments: true,
        },
    });

    return {
        id: quest.id,
        requester: quest.createdBy ? (getUserById(quest.createdBy) as any) : null,
        title: quest.title,
        description: quest.description ?? "",
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.PENDING,
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
            assignments: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.createdBy ? (getUserById(quest.createdBy) as any) : null,
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
            assignments: (quest.assignments ?? []) as unknown as QuestAssignement[],
        },
    };
};

export const validate = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.update({
        where: { id },
        data: { status: QuestStatus.APPROVED as any },
        include: {
            assignments: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.createdBy ? (getUserById(quest.createdBy) as any) : null,
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
            assignments: (quest.assignments ?? []) as unknown as QuestAssignement[],
        },
    };
};

export const cancel = async (id: string): Promise<Quest | null> => {
    await prisma.questAssignment.deleteMany({
        where: { questId: id },
    });

    const quest = await prisma.quest.delete({
        where: { id },
        include: {
            assignments: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.createdBy ? (getUserById(quest.createdBy) as any) : null,
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
            assignments: (quest.assignments ?? []) as unknown as QuestAssignement[],
        },
    };
};

export const suggestQuestTeammates = async (
    id: string,
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

    const xp_required = quest?.xp_required ?? 1000;
    const profils = quest?.profils ?? [];

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
