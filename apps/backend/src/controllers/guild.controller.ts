import { Request, Response } from "express";
import * as guildService from "../services/guild.service";
import { AppError, sendError } from "../utils/error";

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
    }
}

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
    }
}

export const getGuildInventory = async (req: Request, res: Response) => {
    const { guildId } = req.params;

    try {
        const inventory = await guildService.getGuildInventory(guildId);
        return res.status(200).json(inventory);
    } catch (error: any) {
        if (error instanceof AppError) {
            return sendError(res, error.code, error.message, { status: error.status });
        }
    }
}