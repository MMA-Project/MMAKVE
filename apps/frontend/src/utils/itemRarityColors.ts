import { ItemRarity } from "../../../../packages/shared/src/types/item.type";

export const itemRarityColors: Record<ItemRarity, string> = {
    [ItemRarity.COMMON]: "gray",
    [ItemRarity.UNCOMMON]: "green",
    [ItemRarity.RARE]: "blue",
    [ItemRarity.EPIC]: "purple",
    [ItemRarity.LEGENDARY]: "orange",
};
