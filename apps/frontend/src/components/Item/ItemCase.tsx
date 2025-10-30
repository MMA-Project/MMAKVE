import { type Item, ItemType } from "../../../../../packages/shared/src/types/item.type";
import { itemRarityColors } from "../../utils/itemRarityColors";

export function ItemCase({ item }: { item: Item }) {
    return (
        <div
            className="w-12 h-12 flex items-center justify-center rounded bg-slate-700"
            style={{
                boxShadow: `inset 0 0 10px ${itemRarityColors[item.rarity]}`,
            }}
        >
            <img
                src={
                    item.type === ItemType.WEAPON
                        ? "/src/assets/sword.png"
                        : "/src/assets/chest.png"
                }
                alt={item.name}
                className="w-8 h-8"
                title={`${item.name} - Durabilité: ${item.durability}`}
            />
        </div>
    );
}
