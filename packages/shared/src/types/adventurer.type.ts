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

export type Adventurer = {
    id: string;
    type: AdventurerType;
    status: "available" | "on_quest" | "injured" | "dead" | "sleeping";
    xp: number;
};

export type AdventurerCreation = Omit<Adventurer, "id" | "status" | "xp">;
