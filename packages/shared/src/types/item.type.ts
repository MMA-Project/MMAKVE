import { AdventurerType } from "./adventurer.type";

export enum ItemType {
    WEAPON = "WEAPON",
    ARMOR = "ARMOR",
    POTION = "POTION",
    MISC = "MISC",
}
export enum ItemRarity {
    COMMON = "COMMON",
    UNCOMMON = "UNCOMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    LEGENDARY = "LEGENDARY",
}

export enum ItemName {
    SWORD = "SWORD",
    SHIELD = "SHIELD",
    HELMET = "HELMET",
    HEALING_POTION = "HEALING_POTION",
    MAGIC_RING = "MAGIC_RING",
    BOW = "BOW",
    DAGGER = "DAGGER",
    STAFF = "STAFF",
    ARMOR = "ARMOR",
    AXE = "AXE",
    ARROW = "ARROW",
}

export enum ItemStatus {
    AVAILABLE = "AVAILABLE",
    IN_USE = "IN_USE",
    CONSUMED = "CONSUMED",
    BROKEN = "BROKEN",
    LOST = "LOST",
}

export type Item = {
    id: string;
    name: ItemName;
    description: string;
    durability?: number;
    maxDurability?: number;
    quantity?: number;
    isConsumable: boolean;
    price: number;
    type: ItemType;
    rarity: ItemRarity;
    profiles: AdventurerType[];
    status: ItemStatus;
    questId?: string;
};

export type ItemCreation = Omit<Item, "id">;
