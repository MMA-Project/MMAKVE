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