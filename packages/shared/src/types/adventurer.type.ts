import { Guild } from "./guild.type";
import { User } from "./user.type";

export enum AdventurerType {
    ARCHER = "ARCHER",
    BARBARIAN = "BARBARIAN",
    PALADIN = "PALADIN",
    ARCANE_MAGE = "ARCANE_MAGE",
    PRIEST = "PRIEST",
    GEOMANCER = "GEOMANCER",
    ALCHEMIST = "ALCHEMIST",
    BLACKSMITH = "BLACKSMITH",
    ENCHANTER = "ENCHANTER",
    MESSENGER = "MESSENGER",
    ROGUE = "ROGUE",
    WARRIOR = "WARRIOR",
}

export enum AdventurerStatus {
    AVAILABLE = "AVAILABLE",
    ON_QUEST = "ON_QUEST",
    INJURED = "INJURED",
    DEAD = "DEAD",
    RESTING = "RESTING",
    LEAVED = "LEAVED",
    DELETED = "DELETED",
}

export type Adventurer = {
    id: string;
    user: User;
    type: AdventurerType;
    status: AdventurerStatus;
    xp: number;
};

export type AdventurerCreation = Omit<Adventurer, "id" | "status" | "xp">;
