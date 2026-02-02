import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { ItemCase } from "../Item/ItemCase";
import {
    adventurerImages,
    adventurerTypeLabels,
    statusColors,
    statusLabels,
} from "../../utils/adventurerImages";

interface AdventurerQuestCardProps {
    adventurer: Adventurer;
    items: Item[];
}

export function AdventurerQuestCard({ adventurer, items }: AdventurerQuestCardProps) {
    return (
        <li className="p-4 border border-slate-700 rounded-lg bg-slate-800 hover:bg-slate-750 transition">
            <div className="flex items-start gap-4">
                <div className="flex items-center gap-3 flex-1">
                    <div className="relative">
                        <img
                            src={adventurerImages[adventurer.type]}
                            alt={adventurerTypeLabels[adventurer.type]}
                            className="w-16 h-16 rounded-full border-2 border-slate-700 object-cover bg-slate-800"
                        />
                        <span
                            className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-800 ${statusColors[adventurer.status]}`}
                            title={statusLabels[adventurer.status]}
                        ></span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-100 truncate">
                            {adventurer.user.name}
                        </h3>
                        <p className="text-sm text-slate-400">
                            {adventurerTypeLabels[adventurer.type]}
                        </p>
                        <p className="text-xs text-slate-500">
                            XP: {adventurer.xp.toLocaleString("fr-FR")}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-400 font-medium text-center">
                        Items assignés
                    </span>
                    <div className="flex gap-1.5 flex-wrap">
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                <div
                                    key={`${adventurer.id}-${item.id}-${index}`}
                                    className="relative"
                                >
                                    <ItemCase item={item} />
                                    {item.isConsumable && item.quantity && item.quantity > 1 && (
                                        <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                            {item.quantity}
                                        </span>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="w-12 h-12 rounded bg-slate-700/30 border border-slate-600/50 flex items-center justify-center">
                                <span className="text-slate-600 text-xs">—</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}
