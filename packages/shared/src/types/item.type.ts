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

export type Item = {
  id: string;

  name: string;
  description: string;
  durability: number;
  price: number;

  type: ItemType;
  rarity: ItemRarity;

  profiles: AdventurerType[];
};

export type ItemCreation = Omit<Item, "id">;
