import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { itemRarityColors } from "../../utils/itemRarityColors";
import { itemImages, itemEmojis, itemNameLabels } from "../../utils/itemConstants";

export function ItemCase({ item }: { item: Item }) {
    const imageSrc = itemImages[item.name] ?? null;
    const emoji = itemEmojis[item.name] ?? "📦";
    const label = itemNameLabels[item.name] ?? item.name;

    const tooltipText = item.isConsumable
        ? label
        : `${label} - Durabilité : ${item.durability}/${item.maxDurability}`;

    return (
        <div
            className="w-12 h-12 flex items-center justify-center rounded bg-slate-700"
            style={{
                boxShadow: `inset 0 0 10px ${itemRarityColors[item.rarity]}`,
            }}
            title={tooltipText}
        >
            {imageSrc ? (
                <img src={imageSrc} alt={label} className="w-8 h-8 object-contain" />
            ) : (
                <span className="text-2xl">{emoji}</span>
            )}
        </div>
    );
}
