import { AdventurerType } from "./adventurer.type";

export type Item = {
  id: string;

  name: string;
  description: string;
  durability: number;
  price: number;

  type: "weapon" | "armor" | "potion" | "misc";
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";

  profiles: AdventurerType[];
};

export type ItemCreation = Omit<Item, "id">;
