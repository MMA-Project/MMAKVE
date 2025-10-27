import { User } from "./user.type";

export enum AdventurerType {
    ARCHER,
    BARBARIAN,
    PALADIN,
    ARCANE_MAGE,
    PRIEST,
    GEOMANCER,
    ALCHEMIST,
    BLACKSMITH,
    ENCHANTER,
    MESSENGER,
    ROGUE,
    WARRIOR,
}

export type Adventurer = {
    id: string;
    user: User;
    type: AdventurerType;
    status: "available" | "on_quest" | "injured" | "dead" | "sleeping";
    xp: number;
};

export type AdventurerCreation = Omit<Adventurer, "id" | "status" | "xp">;
