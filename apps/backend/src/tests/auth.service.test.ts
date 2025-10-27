import { describe, it, expect, beforeEach } from "vitest";
import { register, login } from "../services/auth.service";
import { prisma } from "../prisma-client";
import { ErrorCodes } from "../utils/error";

// Clean users table before each test
beforeEach(async () => {
    await prisma.user.deleteMany();
});

describe("Auth Service - register", () => {
    it("creates a user with default role when no role provided", async () => {
        const user = await register({ username: "alice", password: "secret" });
        expect(user.username).toBe("alice");
        expect(user.role).toBe("AVENTURIER");
    });

    it("rejects duplicate username", async () => {
        await register({ username: "bob", password: "123" });
        await expect(register({ username: "bob", password: "456" })).rejects.toMatchObject({
            code: ErrorCodes.USERNAME_TAKEN,
        });
    });

    it("rejects invalid role", async () => {
        await expect(
            register({ username: "charlie", password: "123", role: "BAD" }),
        ).rejects.toMatchObject({ code: ErrorCodes.VALIDATION_ERROR });
    });
});

describe("Auth Service - login", () => {
    it("returns a JWT for valid credentials", async () => {
        await register({ username: "dave", password: "pass" });
        const token = await login({ username: "dave", password: "pass" });
        expect(typeof token).toBe("string");
        expect(token.split(".").length).toBe(3); // rudimentary JWT shape check
    });

    it("fails for wrong password", async () => {
        await register({ username: "erin", password: "good" });
        await expect(login({ username: "erin", password: "bad" })).rejects.toMatchObject({
            code: ErrorCodes.INVALID_CREDENTIALS,
        });
    });

    it("fails for missing fields", async () => {
        // @ts-expect-error intentional missing password
        await expect(login({ username: "ghost" })).rejects.toMatchObject({
            code: ErrorCodes.VALIDATION_ERROR,
        });
    });
});
