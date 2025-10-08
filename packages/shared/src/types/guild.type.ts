import { Item } from "./item.type";

export type Guild = {
    id: number;

    name: string;

    bank: number;
    inventory: Item[];
}