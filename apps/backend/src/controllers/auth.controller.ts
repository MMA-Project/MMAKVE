import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import { sendError, ErrorCodes, AppError } from "../utils/error";

export const register = async (req: Request, res: Response) => {
    const { name, password, role } = req.body;
    try {
        if (!name || !password) {
            throw new AppError(
                ErrorCodes.VALIDATION_ERROR,
                "Username and password are required",
                422,
            );
        }
        const user = await AuthService.register({ name, password, role });
        const token = await AuthService.login({ name, password });
        return res.status(201).json({
            user: { id: user.id, name: user.name, role: user.role },
            token,
        });
    } catch (err: any) {
        if (err instanceof AppError) {
            return sendError(res, err.code, err.message, { status: err.status });
        }
        if (typeof err?.message === "string") {
            if (err.message === "Username already taken") {
                return sendError(res, ErrorCodes.USERNAME_TAKEN, err.message, { status: 409 });
            }
            if (err.message === "Username and password are required") {
                return sendError(res, ErrorCodes.VALIDATION_ERROR, err.message, { status: 422 });
            }
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "Unable to register", { status: 500 });
    }
};

export const login = async (req: Request, res: Response) => {
    const { name, password } = req.body;
    try {
        if (!name || !password) {
            return sendError(
                res,
                ErrorCodes.VALIDATION_ERROR,
                "Username and password are required",
                { status: 422 },
            );
        }
        const token = await AuthService.login({ name, password });
        const user = await AuthService.findByName(name);
        if (!user) {
            return sendError(res, ErrorCodes.AUTH_USER_NOT_FOUND, "User not found", {
                status: 404,
            });
        }
        return res.json({
            user: { id: user.id, username: user.name, role: user.role },
            token,
        });
    } catch (err: any) {
        const msg = err?.message;
        if (msg === "Invalid credentials") {
            return sendError(res, ErrorCodes.INVALID_CREDENTIALS, "Invalid credentials", {
                status: 401,
            });
        }
        if (msg === "Username and password are required") {
            return sendError(res, ErrorCodes.VALIDATION_ERROR, msg, { status: 422 });
        }
        return sendError(res, ErrorCodes.INTERNAL_ERROR, "Unable to login", { status: 500 });
    }
};
