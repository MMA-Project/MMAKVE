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

export type Item = {
    id: string;
    name: ItemName;
    description: string;
    durability: number;
    price: number;
    type: ItemType;
    rarity: ItemRarity;
    profiles: AdventurerType[];
};

export type ItemCreation = Omit<Item, "id">;
