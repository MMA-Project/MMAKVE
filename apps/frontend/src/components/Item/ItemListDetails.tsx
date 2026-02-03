import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { ItemStatus } from "../../../../../packages/shared/src/types/item.type";
import { itemNameLabels, itemRarityLabels, itemTypeLabels } from "../../utils/itemConstants";
import { itemRarityColors } from "../../utils/itemRarityColors";

interface ItemListDetailsProps {
    item: Item;
}

export function ItemListDetails({ item }: ItemListDetailsProps) {
    return (
        <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-slate-200 truncate">
                {itemNameLabels[item.name] || item.name}
                {item.isConsumable && item.quantity && <span> × {item.quantity}</span>}
            </p>
            <div className="text-[11px] text-slate-400 truncate">
                <span>{itemTypeLabels[item.type]}</span>
                <span className="text-slate-500"> - </span>
                <span style={{ color: itemRarityColors[item.rarity] }}>
                    {itemRarityLabels[item.rarity] ?? item.rarity}
                </span>
            </div>
            <p className="text-[11px] text-slate-500 truncate">{item.description}</p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span>{item.price} 🪙</span>
                {item.isConsumable && item.status === ItemStatus.CONSUMED && (
                    <span className="text-rose-400">Consommé</span>
                )}
            </div>
            {!item.isConsumable &&
                item.durability !== undefined &&
                item.maxDurability !== undefined && (
                    <div className="flex items-center gap-2 mt-1">
                        <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                                style={{
                                    width: `${((item.durability || 0) / (item.maxDurability || 1)) * 100}%`,
                                }}
                            />
                        </div>
                        <span className="text-[11px] text-slate-500">
                            {item.durability}/{item.maxDurability}
                        </span>
                    </div>
                )}
        </div>
    );
}
