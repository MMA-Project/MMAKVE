import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { ItemCase } from "../Item/ItemCase";
import { XPtoLvl, progressToNextLevel } from "../../utils/XPtoLvl";

import adventurerImg from "../../assets/adventurer.png";
import alchemyImg from "../../assets/alchemy.png";
import barbarianImg from "../../assets/barbarian.png";
import bowImg from "../../assets/bow.png";
import druidImg from "../../assets/druid.png";
import knightImg from "../../assets/knight.png";
import magicianImg from "../../assets/magician.png";
import martialImg from "../../assets/martial.png";
import ninjaImg from "../../assets/ninja.png";
import priestImg from "../../assets/priest.png";
import swordsmanImg from "../../assets/swordsman.png";
import wizardImg from "../../assets/wizard.png";

interface AdventurerQuestCardProps {
    adventurer: Adventurer;
    items: Item[];
}

const adventurerImages: Record<AdventurerType, string> = {
    [AdventurerType.WARRIOR]: swordsmanImg,
    [AdventurerType.ARCHER]: bowImg,
    [AdventurerType.BARBARIAN]: barbarianImg,
    [AdventurerType.PALADIN]: knightImg,
    [AdventurerType.ARCANE_MAGE]: wizardImg,
    [AdventurerType.PRIEST]: priestImg,
    [AdventurerType.GEOMANCER]: druidImg,
    [AdventurerType.ALCHEMIST]: alchemyImg,
    [AdventurerType.BLACKSMITH]: martialImg,
    [AdventurerType.ENCHANTER]: magicianImg,
    [AdventurerType.MESSENGER]: adventurerImg,
    [AdventurerType.ROGUE]: ninjaImg,
};

const typeLabels: Record<AdventurerType, string> = {
    [AdventurerType.ARCHER]: "Archer",
    [AdventurerType.BARBARIAN]: "Barbare",
    [AdventurerType.PALADIN]: "Paladin",
    [AdventurerType.ARCANE_MAGE]: "Mage des Arcanes",
    [AdventurerType.PRIEST]: "Prêtre",
    [AdventurerType.GEOMANCER]: "Géomancien",
    [AdventurerType.ALCHEMIST]: "Alchimiste",
    [AdventurerType.BLACKSMITH]: "Forgeron",
    [AdventurerType.ENCHANTER]: "Enchanteur",
    [AdventurerType.MESSENGER]: "Messager",
    [AdventurerType.ROGUE]: "Roublard",
    [AdventurerType.WARRIOR]: "Guerrier",
};

const statusColors: Record<string, string> = {
    available: "bg-green-500",
    on_quest: "bg-blue-500",
    injured: "bg-orange-500",
    dead: "bg-red-500",
    sleeping: "bg-purple-500",
};

const statusLabels: Record<string, string> = {
    available: "Disponible",
    on_quest: "En quête",
    injured: "Blessé",
    dead: "Décédé",
    sleeping: "Endormi",
};

export function AdventurerQuestCard({ adventurer, items }: AdventurerQuestCardProps) {
    const level = XPtoLvl(adventurer.xp);
    const { percent, remainingXP } = progressToNextLevel(adventurer.xp);

    return (
        <li className="p-4 border border-slate-700 rounded-lg bg-slate-800 hover:bg-slate-750 transition">
            <div className="flex items-start gap-4">
                {/* Avatar et info principale */}
                <div className="flex items-center gap-3 flex-1">
                    <div className="relative">
                        <img
                            src={adventurerImages[adventurer.type]}
                            alt={typeLabels[adventurer.type]}
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
                            {typeLabels[adventurer.type]} - Niveau {level}
                        </p>
                        <div className="mt-2 space-y-1">
                            <div className="flex items-center justify-between text-xs text-slate-500">
                                <span>XP: {adventurer.xp.toLocaleString()}</span>
                                <span>{remainingXP} XP pour le prochain niveau</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-1.5">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
                                    style={{ width: `${percent}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inventaire */}
                <div className="flex flex-col gap-2">
                    <span className="text-xs text-slate-400 font-medium text-center">
                        Inventaire
                    </span>
                    <div className="flex gap-1.5">
                        {items.map((item) => (
                            <div key={item.id} className="relative">
                                <ItemCase item={item} />
                                {item.isConsumable && item.quantity && item.quantity > 1 && (
                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                        {item.quantity}
                                    </span>
                                )}
                            </div>
                        ))}
                        {Array.from({ length: 5 - items.length }, (_, index) => (
                            <div
                                key={`empty-${index}`}
                                className="w-12 h-12 rounded bg-slate-700/30 border border-slate-600/50 flex items-center justify-center"
                            >
                                <span className="text-slate-600 text-xs">—</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
}
