import { Adventurer } from "./adventurer.type";
import { Item } from "./item.type";

export type Guild = {
    id: string;
    name: string;
    bank: number;
    adventurers: Adventurer[];
    inventory: Item[];
};

export type GuildCreation = Omit<Guild, "id" | "bank" | "inventory" | "adventurers">;
