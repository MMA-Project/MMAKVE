import { type Item, ItemType, ItemName } from "../../../../../packages/shared/src/types/item.type";
import { itemRarityColors } from "../../utils/itemRarityColors";
import { itemImages, itemEmojis } from "../../utils/itemConstants";

export function ItemCase({ item }: { item: Item }) {
    const imageSrc = itemImages[item.name];
    const emoji = itemEmojis[item.name];

    return (
        <div
            className="w-12 h-12 flex items-center justify-center rounded bg-slate-700"
            style={{
                boxShadow: `inset 0 0 10px ${itemRarityColors[item.rarity]}`,
            }}
            title={`${item.name} - Durabilité: ${item.durability}%`}
        >
            {imageSrc ? (
                <img src={imageSrc} alt={item.name} className="w-8 h-8 object-contain" />
            ) : (
                <span className="text-2xl">{emoji}</span>
            )}
        </div>
    );
}
