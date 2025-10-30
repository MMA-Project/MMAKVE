import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import { sendError, ErrorCodes, AppError } from "../utils/error";

export const register = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;
    try {
        if (!username || !password) {
            throw new AppError(
                ErrorCodes.VALIDATION_ERROR,
                "Username and password are required",
                422,
            );
        }
        const user = await AuthService.register({ username, password, role });
        const token = await AuthService.login({ username, password });
        return res.status(201).json({
            user: { id: user.id, username: user.username, role: user.role },
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
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return sendError(
                res,
                ErrorCodes.VALIDATION_ERROR,
                "Username and password are required",
                { status: 422 },
            );
        }
        const token = await AuthService.login({ username, password });
        const user = await AuthService.findByUsername(username);
        if (!user) {
            return sendError(res, ErrorCodes.AUTH_USER_NOT_FOUND, "User not found", {
                status: 404,
            });
        }
        return res.json({
            user: { id: user.id, username: user.username, role: user.role },
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
