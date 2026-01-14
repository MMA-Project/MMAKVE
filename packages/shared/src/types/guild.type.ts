import { Adventurer } from "./adventurer.type";
import { Bank } from "./bank.type";
import { Item } from "./item.type";

export type Guild = {
    id: string;
    name: string;
    bank?: Bank;
    adventurers: Adventurer[];
    inventory?: Item[];
};

export type GuildCreation = Omit<Guild, "id" | "bank" | "inventory" | "adventurers">;
