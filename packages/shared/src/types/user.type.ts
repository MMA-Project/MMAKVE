export type Role = "AVENTURIER" | "ASSISTANT" | "CLIENT";

export type User = {
    id: string;
    name: string;
    role: Role;
    createdAt: Date;
};
