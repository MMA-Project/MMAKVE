import { Adventurer } from "./adventurer.type";
import { Bank } from "./bank.type";
import { Item } from "./item.type";

export type Guild = {
    id: string;
    name: string;
    bank?: Bank; /** Not implemented yet */
    adventurers: Adventurer[];
    inventory?: Item[]; /** Not implemented yet */
};

export type GuildCreation = Omit<Guild, "id" | "bank" | "inventory" | "adventurers">;
