import { Request, Response } from "express";
import { cancel, create, getAll, getAllByUser, update, validate } from "../services/quest.service";
import { AppError, ErrorCodes, sendError } from "../utils/error";
import { Quest, QuestCreation, QuestStatus, AdventurerType } from "@mmakve/shared";

export const getAllQuests = async (req: Request, res: Response) => {
    try {
        const { status, createdBy, minReward, maxReward, startDate, endDate, profils } = req.query;

        const params: any = {};
        if (status) params.status = status as QuestStatus;
        if (createdBy) params.createdBy = createdBy as string;
        if (minReward) params.minReward = parseInt(minReward as string);
        if (maxReward) params.maxReward = parseInt(maxReward as string);
        if (startDate) params.startDate = new Date(startDate as string);
        if (endDate) params.endDate = new Date(endDate as string);
        if (profils) {
            params.profils = Array.isArray(profils) ? profils : [profils];
        }

        const quests = await getAll(params);
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
