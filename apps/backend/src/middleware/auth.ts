import { Response, NextFunction, Request } from "express";
import jwt from "jsonwebtoken";
import { getUserById } from "../services/auth.service";
import { Role } from "../generated/prisma/index.js";
import { sendError, ErrorCodes } from "../utils/error";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export interface AuthenticatedRequest extends Request {
    user?: { id: string; role: string };
}

export const authenticateToken = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) => {
    const header = req.headers["authorization"] as string | undefined;
    const token = header && header.split(" ")[1];

    if (!header || !header.startsWith("Bearer ")) {
        return sendError(res, ErrorCodes.AUTH_TOKEN_REQUIRED, "Authorization header malformed", {
            status: 401,
        });
    }

    if (!token) {
        return sendError(res, ErrorCodes.AUTH_TOKEN_REQUIRED, "Access token required", {
            status: 401,
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; role: string };

        // Verify user still exists and fetch current role from DB
        const user = await getUserById(decoded.id);
        if (!user)
            return sendError(res, ErrorCodes.AUTH_USER_NOT_FOUND, "User not found", {
                status: 401,
            });

        req.user = { id: user.id, role: user.role };
        next();
    } catch (err) {
        return sendError(res, ErrorCodes.AUTH_INVALID_TOKEN, "Invalid or expired token", {
            status: 403,
        });
    }
};

export const authorizeRole = (...allowed: Role[]) => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        if (!req.user)
            return sendError(res, ErrorCodes.NOT_AUTHENTICATED, "Not authenticated", {
                status: 401,
            });
        if (!allowed.includes(req.user.role as Role)) {
            return sendError(res, ErrorCodes.AUTH_ACCESS_DENIED, "Access denied", { status: 403 });
        }
        next();
    };
};
