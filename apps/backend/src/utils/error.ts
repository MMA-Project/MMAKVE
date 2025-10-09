import { Response } from "express";

// Standardized error code list (extend as needed)
export const ErrorCodes = {
    AUTH_TOKEN_REQUIRED: "AUTH_TOKEN_REQUIRED",
    AUTH_INVALID_TOKEN: "AUTH_INVALID_TOKEN",
    AUTH_USER_NOT_FOUND: "AUTH_USER_NOT_FOUND",
    AUTH_ACCESS_DENIED: "AUTH_ACCESS_DENIED",
    NOT_AUTHENTICATED: "NOT_AUTHENTICATED",
    USERNAME_TAKEN: "USERNAME_TAKEN",
    INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

export type ErrorCode = keyof typeof ErrorCodes | (typeof ErrorCodes)[keyof typeof ErrorCodes];

// Custom application error to throw inside services/controllers
export class AppError extends Error {
    public code: string;
    public status: number;
    public details?: unknown;
    constructor(code: string, message: string, status = 400, details?: unknown) {
        super(message);
        this.code = code;
        this.status = status;
        this.details = details;
    }
}

interface SendErrorOptions {
    status?: number;
    details?: unknown;
    headers?: Record<string, string>;
}

export const sendError = (
    res: Response,
    code: string,
    message: string,
    { status = 400, details, headers }: SendErrorOptions = {},
) => {
    if (headers) {
        Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
    }
    return res
        .status(status)
        .json({ error: { code, message, ...(details !== undefined ? { details } : {}) } });
};

// Helper to translate unknown errors into unified response
export const handleUnknownError = (res: Response, err: unknown) => {
    if (err instanceof AppError) {
        return sendError(res, err.code, err.message, { status: err.status, details: err.details });
    }
    return sendError(res, ErrorCodes.INTERNAL_ERROR, "Une erreur interne est survenue", {
        status: 500,
    });
};
