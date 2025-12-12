import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError, ErrorCodes } from "../utils/error";
import { prisma } from "../prisma-client";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
const TOKEN_EXPIRY = process.env.JWT_EXPIRES_IN || "2h";

type RegisterInput = { name: string; password: string; role?: string };
type LoginInput = { name: string; password: string };

const normalizeRole = (role?: string) => {
    if (!role) return undefined;
    const r = role.toUpperCase();
    // Accept both AVENTURIER / Aventurier etc.
    if (r === "AVENTURIER" || r === "ASSISTANT" || r === "CLIENT") return r;
    return undefined;
};

export const register = async ({ name, password, role }: RegisterInput) => {
    if (!name || !password)
        throw new AppError(ErrorCodes.VALIDATION_ERROR, "Username and password are required", 422);

    const existing = await prisma.user.findUnique({ where: { name } });
    if (existing) throw new AppError(ErrorCodes.USERNAME_TAKEN, "Username already taken", 409);

    const roleVal = normalizeRole(role) ?? "CLIENT";
    if (role && !normalizeRole(role))
        throw new AppError(ErrorCodes.VALIDATION_ERROR, "Invalid role", 422);

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            password: hashed,
            role: roleVal as any,
        },
    });

    return user;
};

export const login = async ({ name, password }: LoginInput) => {
    if (!name || !password)
        throw new AppError(ErrorCodes.VALIDATION_ERROR, "Username and password are required", 422);

    const user = await prisma.user.findUnique({ where: { name } });
    if (!user) throw new AppError(ErrorCodes.INVALID_CREDENTIALS, "Invalid credentials", 401);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new AppError(ErrorCodes.INVALID_CREDENTIALS, "Invalid credentials", 401);

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
        expiresIn: TOKEN_EXPIRY,
    });

    return token;
};

export const getUserById = async (id: string) => {
    if (!id) return null;
    return prisma.user.findUnique({ where: { id } });
};

export const findByName = async (name: string) => {
    return prisma.user.findUnique({ where: { name } });
};
