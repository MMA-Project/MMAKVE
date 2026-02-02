import { XPtoLvl, progressToNextLevel } from "../../utils/XPtoLvl";
import { ItemCase } from "../Item/ItemCase";
import { XpProgressBar } from "./AdventurerProgressBar";
import avatarImage from "../../assets/swordsman.png";
import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { statusColors, statusLabels } from "../../utils/adventurerImages";

export function AdventurerDetails({
    adventurer,
    items,
}: {
    adventurer: Adventurer;
    items: Item[];
}) {
    return (
        <li className="p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <img
                        src={avatarImage}
                        alt="Adventurer Avatar"
                        className="w-16 h-16 rounded-full border-2 border-slate-700"
                    />
                    <span
                        className={`absolute top-0 left-0 w-4 h-4 rounded-full border-2 border-slate-800 ${statusColors[adventurer.status]}`}
                        title={statusLabels[adventurer.status]}
                    ></span>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Aventurier: {adventurer.user.name}</h3>
                    <p>Type: {adventurer.type}</p>
                    <p>Statut: {statusLabels[adventurer.status]}</p>
                    <p>LVL: {XPtoLvl(adventurer.xp)}</p>
                </div>
            </div>
            <div className="mt-4">
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>XP: {adventurer.xp}</span>
                        <span>
                            {progressToNextLevel(adventurer.xp).remainingXP} XP pour le niveau
                            suivant
                        </span>
                    </div>
                    <XpProgressBar percent={progressToNextLevel(adventurer.xp).percent} />
                </div>
            </div>
            {items.length > 0 && (
                <div className="mt-4">
                    <div className="flex gap-2 mt-2 justify-around items-center">
                        {items.map((item) => (
                            <ItemCase key={item.id} item={item} />
                        ))}
                        {Array.from({ length: 5 - items.length }, (_, index) => (
                            <div
                                key={`empty-${index}`}
                                className="w-12 h-12 rounded bg-slate-700"
                            ></div>
                        ))}
                    </div>
                </div>
            )}
        </li>
    );
}
