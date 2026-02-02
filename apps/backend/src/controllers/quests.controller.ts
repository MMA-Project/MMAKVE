import { Request, Response } from "express";
import {
    cancel,
    create,
    getAll,
    getAllByUser,
    getById,
    processQuest,
    startQuest,
    suggestQuestTeammates,
    update,
    validate,
    completeQuestSuccess,
    completeQuestFail,
} from "../services/quest.service";
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

export const getQuestById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (!id) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest ID is required", 422);
        const quest = await getById(id);
        if (!quest) {
            return sendError(res, ErrorCodes.NOT_FOUND, "Quest not found", { status: 404 });
        }
        return res.status(200).json(quest);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
    }
};

export const createQuest = async (req: Request, res: Response) => {
    const data: any = req.body;
    try {
        if (!data) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest data is required", 422);
        if (!data.title || !data.description || !data.deadline || !data.reward)
            throw new AppError(
                ErrorCodes.VALIDATION_ERROR,
                "Title, description, deadline and reward are required",
                422,
            );

        // MOCK: Since auth is mocked, we need to provide requester data
        // The frontend should include requester in the data, or we use a default mock
        const questData: QuestCreation = {
            ...data,
            requester: data.requester || {
                id: "1004",
                name: "Lyria Moonshadow",
                role: "CLIENT" as const,
                createdAt: new Date(),
            },
        };

        const quest = await create(questData);
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

export const processQuestController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    if (!id) {
        return sendError(res, ErrorCodes.VALIDATION_ERROR, "Quest ID is required", { status: 422 });
    }
    try {
        // Convertir les dates si elles sont en string
        if (data.startDate && typeof data.startDate === "string") {
            data.startDate = new Date(data.startDate);
        }
        if (data.endDate && typeof data.endDate === "string") {
            data.endDate = new Date(data.endDate);
        }

        const quest = await processQuest(id, data);
        return res.json(quest);
    } catch (error) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "An unexpected error occurred", {
            status: 500,
        });
    }
};

export const suggestTeammates = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { xpRequired, profils } = req.query;

    if (!id) {
        return sendError(res, ErrorCodes.VALIDATION_ERROR, "Quest ID is required", { status: 422 });
    }
    try {
        const parsedProfils = profils
            ? (Array.isArray(profils) ? profils : String(profils).split(",")).map(
                  (profil) => profil as AdventurerType,
              )
            : undefined;
        const parsedXpRequired = xpRequired ? Number(xpRequired) : undefined;

        const suggestion = await suggestQuestTeammates(id, {
            xpRequired: parsedXpRequired,
            profils: parsedProfils,
        });
        return res.json({ ...suggestion });
    } catch (error) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "An unexpected error occurred", {
            status: 500,
        });
    }
};
export const startQuestController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (!id) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest ID is required", 422);
        const quest = await startQuest(id);
        return res.status(200).json(quest);
    } catch (error: any) {
        console.error("Error starting quest:", error);
        console.error("Error stack:", error?.stack);
        console.error("Error message:", error?.message);
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "An unexpected error occurred", {
            status: 500,
        });
    }
};

export const completeQuestSuccessController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (!id) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest ID is required", 422);
        const quest = await completeQuestSuccess(id);
        return res.status(200).json(quest);
    } catch (error: any) {
        console.error("Error completing quest with success:", error);
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "An unexpected error occurred", {
            status: 500,
        });
    }
};

export const completeQuestFailController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (!id) throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest ID is required", 422);
        const quest = await completeQuestFail(id);
        return res.status(200).json(quest);
    } catch (error: any) {
        console.error("Error completing quest with failure:", error);
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "An unexpected error occurred", {
            status: 500,
        });
    }
};
