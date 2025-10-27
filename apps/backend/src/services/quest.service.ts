import { prisma } from "@mmakve/apps/backend/client";
import { Quest, QuestStatus, AdventurerType, QuestAssignement } from "@mmakve/shared";
import { getUserById } from "./auth.service";

/**
 * ! Rôle: Assistant
 */
export async function getAll(): Promise<Quest[]> {
    const quests = await prisma.quest.findMany({
        include: {
            assignments: true,
        },
        orderBy: { endDate: "desc" },
    });

    return quests.map((q) => ({
        id: q.id,
        requester: q.createdBy ? getUserById(q.createdBy) as any : null,
        title: q.title,
        description: q.description ?? "",
        date_limit: q.deadline ? new Date(q.deadline) : new Date(),
        prime: q.reward ?? 0,
        status: (q.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
        options: {
            profils: (q.requiredProfiles ?? []).map((p) => p as unknown as AdventurerType),
            start_date: q.startDate ? new Date(q.startDate) : new Date(),
            end_date: q.endDate ? new Date(q.endDate) : new Date(),
            xp_required: q.xpRequired ?? 0,
            assignements: (q.assignments ?? []) as unknown as QuestAssignement[],
        },
    }));
}

export const getAllByUser = async (userId: string): Promise<Quest[]> => {
    const quests = await prisma.quest.findMany({
        where: { createdBy: userId },
        include: {
            assignments: true,
        },
        orderBy: { endDate: "desc" },
    });

    return quests.map((q) => ({
        id: q.id,
        requester: q.createdBy ? getUserById(q.createdBy) as any : null,
        title: q.title,
        description: q.description ?? "",
        date_limit: q.deadline ? new Date(q.deadline) : new Date(),
        prime: q.reward ?? 0,
        status: (q.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
        options: {
            profils: (q.requiredProfiles ?? []).map((p) => p as unknown as AdventurerType),
            start_date: q.startDate ? new Date(q.startDate) : new Date(),
            end_date: q.endDate ? new Date(q.endDate) : new Date(),
            xp_required: q.xpRequired ?? 0,
            assignements: (q.assignments ?? []) as unknown as QuestAssignement[],
        },
    }));
};

// Classic creation
export const create = async (data: Quest): Promise<Quest> => {
    const quest = await prisma.quest.create({
        data: {
            ...data,
            createdBy: data.requester.id,
        },
        include: {
            assignments: true,
        },
    });

    return {
        id: quest.id,
        requester: quest.createdBy ? getUserById(quest.createdBy) as any : null,
        title: quest.title,
        description: quest.description ?? "",
        date_limit: quest.deadline ? new Date(quest.deadline) : new Date(),
        prime: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
    };
};

export const update = async (id: string, data: Partial<Quest>): Promise<Quest | null> => {
    const quest = await prisma.quest.update({
        where: { id },
        data: {
            ...data,
            createdBy: data?.requester?.id,
        },
        include: {
            assignments: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.createdBy ? getUserById(quest.createdBy) as any : null,
        title: quest.title,
        description: quest.description ?? "",
        date_limit: quest.deadline ? new Date(quest.deadline) : new Date(),
        prime: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
        options: {
            profils: (quest.requiredProfiles ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.startDate ? new Date(quest.startDate) : new Date(),
            end_date: quest.endDate ? new Date(quest.endDate) : new Date(),
            xp_required: quest.xpRequired ?? 0,
            assignements: (quest.assignments ?? []) as unknown as QuestAssignement[],
        },
    };
}

export const validate = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.update({
        where: { id },
        data: { status: QuestStatus.APPROVED },
        include: {
            assignments: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.createdBy ? getUserById(quest.createdBy) as any : null,
        title: quest.title,
        description: quest.description ?? "",
        date_limit: quest.deadline ? new Date(quest.deadline) : new Date(),
        prime: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
        options: {
            profils: (quest.requiredProfiles ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.startDate ? new Date(quest.startDate) : new Date(),
            end_date: quest.endDate ? new Date(quest.endDate) : new Date(),
            xp_required: quest.xpRequired ?? 0,
            assignements: (quest.assignments ?? []) as unknown as QuestAssignement[],
        },
    };
}

export const cancel = async (id: string): Promise<Quest | null> => {
    const quest = await prisma.quest.delete({
        where: { id },
        include: {
            assignments: true,
        },
    });

    if (!quest) return null;

    return {
        id: quest.id,
        requester: quest.createdBy ? getUserById(quest.createdBy) as any : null,
        title: quest.title,
        description: quest.description ?? "",
        date_limit: quest.deadline ? new Date(quest.deadline) : new Date(),
        prime: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
        options: {
            profils: (quest.requiredProfiles ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.startDate ? new Date(quest.startDate) : new Date(),
            end_date: quest.endDate ? new Date(quest.endDate) : new Date(),
            xp_required: quest.xpRequired ?? 0,
            assignements: (quest.assignments ?? []) as unknown as QuestAssignement[],
        },
    };
}