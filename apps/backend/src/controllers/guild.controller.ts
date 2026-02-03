import { Request, Response } from "express";
import * as guildService from "../services/guild.service";
import * as adventurerService from "../services/adventurer.service";
import { AppError, sendError, ErrorCodes } from "../utils/error";
import { prisma } from "../prisma-client";

export const getAllGuilds = async (req: Request, res: Response) => {
    const { id, name } = req.query;

    const params: any = {};
    if (id) params.id = id;
    if (name) params.name = name;

    try {
        const guilds = await guildService.getAll(params);
        return res.status(200).json(guilds);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, "INTERNAL_ERROR", "Internal server error", { status: 500 });
    }
};

export const getGuildBank = async (req: Request, res: Response) => {
    const { guildId } = req.params;

    try {
        const bank = await guildService.getGuildBank(guildId);
        if (!bank) {
            return sendError(res, "NOT_FOUND", "Guild bank not found", { status: 404 });
        }
        return res.status(200).json(bank);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, "INTERNAL_ERROR", "Internal server error", { status: 500 });
    }
};

// Helper to get guildId from params or use a default mock guild
const getGuildIdFromRequest = async (req: Request, guildIdParam?: string): Promise<string> => {
    if (guildIdParam) {
        return guildIdParam;
    }

    // MOCK: Since auth is mocked, we use the default guild created in seed
    // In a real scenario, this would come from req.user
    // For now, try to get the first guild from DB
    const guild = await prisma.guild.findFirst();
    if (guild) {
        return guild.id;
    }

    throw new AppError(ErrorCodes.VALIDATION_ERROR, "Guild ID is required in URL", 422);
};

export const getGuildInventory = async (req: Request, res: Response) => {
    const { guildId } = req.params;

    try {
        const resolvedGuildId = await getGuildIdFromRequest(req, guildId);
        const inventory = await guildService.getGuildInventory(resolvedGuildId);
        return res.status(200).json(inventory);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, "INTERNAL_ERROR", "Internal server error", { status: 500 });
    }
};

export const addItemToInventory = async (req: Request, res: Response) => {
    const { guildId } = req.params;
    const itemData = req.body;

    try {
        const resolvedGuildId = await getGuildIdFromRequest(req, guildId);
        const item = await guildService.addItemToGuildInventory(resolvedGuildId, itemData);
        return res.status(201).json(item);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, "INTERNAL_ERROR", "Internal server error", { status: 500 });
    }
};

export const updateInventoryItem = async (req: Request, res: Response) => {
    const { guildId, itemId } = req.params;
    const itemData = req.body;

    try {
        const resolvedGuildId = await getGuildIdFromRequest(req, guildId);
        const item = await guildService.updateGuildInventoryItem(resolvedGuildId, itemId, itemData);
        return res.status(200).json(item);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, "INTERNAL_ERROR", "Internal server error", { status: 500 });
    }
};

export const deleteInventoryItem = async (req: Request, res: Response) => {
    const { guildId, itemId } = req.params;

    try {
        const resolvedGuildId = await getGuildIdFromRequest(req, guildId);
        await guildService.deleteGuildInventoryItem(resolvedGuildId, itemId);
        return res.status(204).send();
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
        return sendError(res, "INTERNAL_ERROR", "Internal server error", { status: 500 });
    }
};
