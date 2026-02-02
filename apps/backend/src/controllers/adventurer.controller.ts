import { Request, Response } from "express";
import * as adventurerService from "../services/adventurer.service";
import { AppError, ErrorCodes, sendError } from "../utils/error";
import { AdventurerCreation, AdventurerType } from "@mmakve/shared";
import { generateRandomPassword } from "../utils/adventurer";

/**
 * ! Rôle: Assistant
 * Get all adventurers with optional filters
 */
export const getAllAdventurers = async (req: Request, res: Response) => {
    try {
        const { type, status, guildId, minXp, maxXp } = req.query;

        const params: any = {};
        if (type) params.type = type as unknown as AdventurerType;
        if (status) params.status = status as string;
        if (guildId) params.guildId = guildId as string;
        if (minXp) params.minXp = parseInt(minXp as string);
        if (maxXp) params.maxXp = parseInt(maxXp as string);

        const adventurers = await adventurerService.getAll(params);
        return res.status(200).json(adventurers);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "Internal server error", { status: 500 });
    }
};

/**
 * ! Rôle: Assistant
 * Get adventurer by ID
 */
export const getAdventurerById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            throw new AppError(ErrorCodes.VALIDATION_ERROR, "Adventurer ID is required", 422);
        }

        const adventurer = await adventurerService.getById(id);

        if (!adventurer) {
            throw new AppError(ErrorCodes.NOT_FOUND, "Adventurer not found", 404);
        }

        return res.status(200).json(adventurer);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "Internal server error", { status: 500 });
    }
};

/**
 * ! Rôle: Assistant
 * Get adventurers by quest
 */
export const getAdventurersByQuest = async (req: Request, res: Response) => {
    try {
        const { questId } = req.params;

        if (!questId) {
            throw new AppError(ErrorCodes.VALIDATION_ERROR, "Quest ID is required", 422);
        }

        const adventurers = await adventurerService.getByQuest(questId);
        return res.status(200).json(adventurers);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "Internal server error", { status: 500 });
    }
};

/**
 * ! Rôle: Assistant
 * Create a new adventurer and associated user
 */
export const createAdventurer = async (req: Request, res: Response) => {
    try {
        const data = req.body;

        if (!data) {
            throw new AppError(ErrorCodes.VALIDATION_ERROR, "Adventurer data is required", 422);
        }

        if (!data.name || !data.type || !data.guildId || !data.username) {
            throw new AppError(
                ErrorCodes.VALIDATION_ERROR,
                "Name, type, guildId, and username are required",
                422,
            );
        }

        const fake_password = generateRandomPassword();

        data.password = fake_password;

        const adventurer = await adventurerService.create(data);
        return res.status(201).json(adventurer);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "Internal server error", { status: 500 });
    }
};

/**
 * ! Rôle: Assistant
 * Update an adventurer
 */
export const modifyAdventurer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (!id) {
            throw new AppError(ErrorCodes.VALIDATION_ERROR, "Adventurer ID is required", 422);
        }

        if (!data) {
            throw new AppError(ErrorCodes.VALIDATION_ERROR, "Adventurer data is required", 422);
        }

        const adventurer = await adventurerService.modify(id, data);
        return res.status(200).json(adventurer);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "Internal server error", { status: 500 });
    }
};

/**
 * ! Rôle: Assistant
 * Delete an adventurer
 */
export const deleteAdventurer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            throw new AppError(ErrorCodes.VALIDATION_ERROR, "Adventurer ID is required", 422);
        }

        await adventurerService.remove(id);
        return res.status(204).send();
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "Internal server error", { status: 500 });
    }
};
