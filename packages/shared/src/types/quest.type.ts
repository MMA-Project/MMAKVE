import { Adventurer, AdventurerType } from "./adventurer.type";
import { Item } from "./item.type";
import { User } from "./user.type";

export enum QuestStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
}

export type Quest = {
    id: string;
    requester: User;
    title: string;
    description: string;
    deadline: Date;
    reward: number;
    status: QuestStatus;
    options?: {
        profils: AdventurerType[];
        start_date: Date;
        end_date: Date;
        xp_required: number;
        assignments: QuestAssignement[];
    };
};

export type QuestCreation = Omit<Quest, "id" | "status">;

export type QuestAssignement = {
    id: string;
    items: Item[];
    adventurer: Adventurer;
};
