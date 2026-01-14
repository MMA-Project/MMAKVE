import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { ItemCase } from "../Item/ItemCase";

export function GuildInventory({ inventory }: { inventory: Item[] }) {
    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Inventaire de la Guilde</h2>
            <div className="grid grid-cols-10 gap-2 mt-2">
                {Array.from({ length: 100 }, (_, index) => (
                    <div key={index} className="w-12 h-12 rounded bg-slate-700">
                        {inventory[index] && <ItemCase item={inventory[index]} />}
                    </div>
                ))}
            </div>
        </div>
    );
}
