import { Request, Response } from "express";
import { cancel, create, getAll, getAllByUser, update, validate } from "../services/quest.service";
import { AppError, ErrorCodes, sendError } from "../utils/error";
import { Adventurer, Quest, QuestCreation } from "@mmakve/shared";
import { mockQuests } from "../mocks/quest.mock";
import { calculateSoloWinProbability, calculateTeamWinProbability } from "../utils/quests";
import { mockAdventurers } from "../mocks/adventurer.mock";

export const getAllQuests = async (_: Request, res: Response) => {
    try {
        const quests = await getAll();
        return res.status(200).json(quests);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
    }
};

export const getAllQuestsByUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        if (!userId) throw new AppError(ErrorCodes.VALIDATION_ERROR, "User ID is required", 422);
        const quests = await getAllByUser(userId);
        return res.status(200).json(quests);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
    }
};

export const createQuest = async (req: Request, res: Response) => {
    const data: QuestCreation = req.body;
    try {
        if (!data) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest data is required", 422);
        if (!data.title || !data.description || !data.deadline || !data.reward)
            throw new AppError(
                ErrorCodes.VALIDATION_ERROR,
                "Title, description, deadline and reward are required",
                422,
            );
        const quest = await create(data);
        return res.status(201).json(quest);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
    }
};

export const updateQuest = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data: Quest = req.body;
    try {
        if (!id) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest ID is required", 422);
        if (!data) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest data is required", 422);
        const quest = await update(id, data);
        return res.status(200).json(quest);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
    }
};

export const validateQuest = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (!id) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest ID is required", 422);
        const isValid = await validate(id);
        return res.status(200).json({ isValid });
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
    }
};

export const cancelQuest = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (!id) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest ID is required", 422);
        await cancel(id);
        return res.status(204).send();
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
    }
};

/**
 * ! TODO: Pour assistants
 */

export const suggestTeammates = async (req: Request, res: Response) => {
    const quest: Quest = mockQuests[0];
    const xp_required = quest.options?.xp_required ?? 1000;
    const profils = quest.options?.profils ?? [];

    const availableTeammates = mockAdventurers.filter(
        (a) => a.status === "available" && profils.includes(a.type),
    );

    const bestTeammates: Adventurer[] = [];

    for (const profil of profils) {
        const sameType = availableTeammates.filter((a) => a.type === profil);

        if (sameType.length === 0) continue;

        const sorted = sameType.sort(
            (a, b) => Math.abs(a.xp - xp_required) - Math.abs(b.xp - xp_required),
        );

        bestTeammates.push(sorted[0]);
    }

    const teamRates = bestTeammates.map((a) => calculateSoloWinProbability(a.xp, xp_required));
    const winRate = calculateTeamWinProbability(teamRates);

    return res.json({
        quest: quest.title,
        profils,
        bestTeammates,
        teamRates,
        winRate,
    });
};
