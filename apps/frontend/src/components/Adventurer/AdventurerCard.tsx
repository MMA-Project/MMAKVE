import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { UpdateButton } from "../Buttons/UpdateButton";
import { DeleteButton } from "../Buttons/DeleteButton";
import { ItemCase } from "../Item/ItemCase";
import { Link } from "react-router-dom";
import { mockQuests } from "../../api/quest.api";
import { mockGuildApi } from "../../api/guildApi";
import { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import {
    adventurerImages,
    typeLabels,
    statusColors,
    statusLabels,
} from "../../utils/adventurerImages";

interface AdventurerCardProps {
    adventurer: Adventurer;
    onEdit: (adventurer: Adventurer) => void;
    onDelete: (id: string) => void;
}

export function AdventurerCard({ adventurer, onEdit, onDelete }: AdventurerCardProps) {
    const level = Math.floor(adventurer.xp / 1000);
    const xpInCurrentLevel = adventurer.xp % 1000;
    const progressPercent = (xpInCurrentLevel / 1000) * 100;

    const activeQuest = mockQuests.find(
        (quest) =>
            quest.status === QuestStatus.IN_PROGRESS &&
            quest.options?.assignments?.some((a) => a.adventurer.id === adventurer.id),
    );

    const usedItems: Item[] = (mockGuildApi.inventory || []).filter((item) =>
        activeQuest?.options?.assignments?.some(
            (a) => a.adventurer.id === adventurer.id && a.items.some((i) => i.id === item.id),
        ),
    );

    return (
        <div className="p-4 border border-slate-700 rounded bg-slate-900 flex flex-col gap-3 hover:bg-slate-800 transition">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="relative">
                            <img
                                src={adventurerImages[adventurer.type]}
                                alt={typeLabels[adventurer.type]}
                                className="w-16 h-16 rounded-full border-2 border-slate-700 object-cover bg-slate-800"
                            />
                            <span
                                className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-900 ${statusColors[adventurer.status]}`}
                                title={statusLabels[adventurer.status]}
                            ></span>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{adventurer.user.name}</h2>
                            <p className="text-sm text-slate-400">
                                {typeLabels[adventurer.type]} - Niveau {level}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Statut: {statusLabels[adventurer.status]}</span>
                            <span>{xpInCurrentLevel} / 1000 XP</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                        </div>

                        {activeQuest && (
                            <div className="mt-3 pt-3 border-t border-slate-700">
                                <p className="text-xs text-slate-500 mb-1">Quête active:</p>
                                <Link
                                    to={`/quest/${activeQuest.id}`}
                                    className="text-sm text-blue-400 hover:text-blue-300 font-medium block truncate"
                                >
                                    {activeQuest.title}
                                </Link>
                            </div>
                        )}

                        {usedItems.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-slate-700">
                                <p className="text-xs text-slate-500 mb-2">Inventaire:</p>
                                <div className="flex gap-1.5 flex-wrap">
                                    {usedItems.map((item: Item) => (
                                        <div key={item.id} className="relative">
                                            <ItemCase item={item} />
                                            {item.isConsumable &&
                                                item.quantity &&
                                                item.quantity > 1 && (
                                                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                                        {item.quantity}
                                                    </span>
                                                )}
                                        </div>
                                    ))}
                                    {Array.from({ length: 5 - usedItems.length }, (_, index) => (
                                        <div
                                            key={`empty-${index}`}
                                            className="w-12 h-12 rounded bg-slate-700/30 border border-slate-600/50 flex items-center justify-center"
                                        >
                                            <span className="text-slate-600 text-xs">-</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <p className="text-xs text-slate-500">
                            Total XP: {adventurer.xp.toLocaleString()} | Créé le{" "}
                            {new Date(adventurer.user.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <UpdateButton onClick={() => onEdit(adventurer)} />
                    <DeleteButton onClick={() => onDelete(adventurer.id)} />
                </div>
            </div>
        </div>
    );
}
