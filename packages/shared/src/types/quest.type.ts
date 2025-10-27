import { Adventurer, AdventurerType } from "./adventurer.type";
import { Item } from "./item.type";

export enum QuestStatus {
    WAITING_APPROVAL = "waiting_approval",
    APPROVED = "approved",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    FAILED = "failed",
    CANCELED = "canceled",
}

export type Quest = {
    id: number;
    requester_id: number;
    title: string;
    description: string;
    date_limit: Date;
    prime: number;
    status: QuestStatus;
    options?: {
        profils: AdventurerType[];
        start_date: Date;
        end_date: Date;
        xp_required: number;
        assignements: QuestAssignement[];
    };
};

export type QuestCreation = Omit<Quest, "id" | "status">;

export type QuestAssignement = {
    id: number;
    items: Item[];
    adventurer: Adventurer;
};
