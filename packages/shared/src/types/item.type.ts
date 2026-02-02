import { AdventurerType } from "./adventurer.type";

export enum ItemType {
    WEAPON = "weapon",
    ARMOR = "armor",
    POTION = "potion",
    MISC = "misc",
}
export enum ItemRarity {
    COMMON = "common",
    UNCOMMON = "uncommon",
    RARE = "rare",
    EPIC = "epic",
    LEGENDARY = "legendary",
}

export enum ItemName {
    SWORD = "Sword",
    SHIELD = "Shield",
    HELMET = "Helmet",
    HEALING_POTION = "Healing Potion",
    MAGIC_RING = "Magic Ring",
    BOW = "Bow",
    DAGGER = "Dagger",
    STAFF = "Staff",
    ARMOR = "Armor",
    AXE = "Axe",
    ARROW = "Arrow",
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
