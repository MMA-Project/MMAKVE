export type Role = "ADVENTURER" | "ASSISTANT" | "CLIENT";

export type User = {
    id: string;
    name: string;
    role: Role;
    createdAt: Date;
};
