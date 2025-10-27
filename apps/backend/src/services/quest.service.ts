import { Quest, QuestStatus, AdventurerType, QuestAssignement, QuestCreation } from "@mmakve/shared";
import { getUserById } from "./auth.service";
import { prisma } from "../prisma-client";

/**
 * ! Rôle: Assistant
 */
export async function getAll(): Promise<Quest[]> {
    const quests = await prisma.quest.findMany({
        include: {
            assignments: true,
        },
        orderBy: { start_date: "desc" },
    });

    return quests.map((q) => ({
        id: q.id,
        requester: q.createdBy ? getUserById(q.createdBy) as any : null,
        title: q.title,
        description: q.description ?? "",
        deadline: q.deadline ? new Date(q.deadline) : new Date(),
        status: (q.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
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
        requester: q.createdBy ? getUserById(q.createdBy) as any : null,
        title: q.title,
        description: q.description ?? "",
        deadline: q.deadline ? new Date(q.deadline) : new Date(),
        reward: q.reward ?? 0,
        status: (q.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
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
            status: QuestStatus.WAITING_APPROVAL as any,
            createdBy: data.requester.id,
            xp_required: data.options?.xp_required ?? 0,
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
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
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
        requester: quest.createdBy ? getUserById(quest.createdBy) as any : null,
        title: quest.title,
        description: quest.description ?? "",
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
        options: {
            profils: (quest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.start_date ? new Date(quest.start_date) : new Date(),
            end_date: quest.end_date ? new Date(quest.end_date) : new Date(),
            xp_required: quest.xp_required ?? 0,
            assignments: (quest.assignments ?? []) as unknown as QuestAssignement[],
        },
    };
}

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
        requester: quest.createdBy ? getUserById(quest.createdBy) as any : null,
        title: quest.title,
        description: quest.description ?? "",
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
        options: {
            profils: (quest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.start_date ? new Date(quest.start_date) : new Date(),
            end_date: quest.end_date ? new Date(quest.end_date) : new Date(),
            xp_required: quest.xp_required ?? 0,
            assignments: (quest.assignments ?? []) as unknown as QuestAssignement[],
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
        deadline: quest.deadline ? new Date(quest.deadline) : new Date(),
        reward: quest.reward ?? 0,
        status: (quest.status as QuestStatus) ?? QuestStatus.WAITING_APPROVAL,
        options: {
            profils: (quest.profils ?? []).map((p) => p as unknown as AdventurerType),
            start_date: quest.start_date ? new Date(quest.start_date) : new Date(),
            end_date: quest.end_date ? new Date(quest.end_date) : new Date(),
            xp_required: quest.xp_required ?? 0,
            assignments: (quest.assignments ?? []) as unknown as QuestAssignement[],
        },
    };
}