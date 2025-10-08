import { Item } from "./item.type";

export type Guild = {
  id: number;

  name: string;

  bank: number;
  inventory: Item[];
};

export type GuildCreation = Omit<Guild, "id" | "bank" | "inventory">;
