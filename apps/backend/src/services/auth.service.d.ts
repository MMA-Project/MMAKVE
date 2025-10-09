declare module "../services/auth.service.js" {
    export function register(input: {
        username: string;
        password: string;
        role?: string;
    }): Promise<any>;
    export function login(input: { username: string; password: string }): Promise<string>;
    export function getUserById(id: string): Promise<any | null>;
    export function findByUsername(username: string): Promise<any | null>;
}

export {};
