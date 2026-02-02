import { ItemName, ItemRarity } from "../../../../../packages/shared/src/types/item.type";
import { itemImages, itemEmojis } from "../../utils/itemConstants";
import { itemRarityColors } from "../../utils/itemRarityColors";

interface ItemIconProps {
    name: ItemName;
    rarity: ItemRarity;
}

export function ItemIcon({ name, rarity }: ItemIconProps) {
    const imageSrc = itemImages[name];
    const emoji = itemEmojis[name];

    return (
        <div
            className="w-8 h-8 flex items-center justify-center rounded text-base"
            style={{
                boxShadow: `inset 0 0 8px ${itemRarityColors[rarity]}`,
            }}
        >
            {imageSrc ? (
                <img src={imageSrc} alt={name} className="w-6 h-6 object-contain" />
            ) : (
                emoji
            )}
        </div>
    );
}
