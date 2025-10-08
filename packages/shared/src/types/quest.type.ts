import {Adventurer, AdventurerType} from "./adventurer.type";

export type Quest = {
    id: number;

    title: string;
    description: string;
    date_limit: number; // timestamp
    prime: number;
    status: "waiting_approval" | "approved";

    options?: {
        estimated_time: number; // in hours
        profils: AdventurerType[];
        xp_required: number;
        assignements: QuestAssignement[];
    };
};

export type QuestAssignement = {
    id: number;
    items: number[];
    adventurers: number[];
}