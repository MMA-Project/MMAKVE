import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { UpdateButton } from "../Buttons/UpdateButton";
import { DeleteButton } from "../Buttons/DeleteButton";
import { ItemCase } from "../Item/ItemCase";
import { Link } from "react-router-dom";
import { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import {
    adventurerImages,
    adventurerTypeLabels,
    statusColors,
    statusLabels,
} from "../../utils/adventurerImages";
import { useQuests } from "../../api/quest.api";

interface AdventurerCardProps {
    adventurer: Adventurer;
    onEdit: (adventurer: Adventurer) => void;
    onDelete: (adventurerId: string) => void;
}

export function AdventurerCard({ adventurer, onEdit, onDelete }: AdventurerCardProps) {
    const quests = useQuests();

    const activeQuest = quests.data?.find(
        (quest) =>
            quest.status === QuestStatus.IN_PROGRESS &&
            quest.options?.assignments?.some((a) => a?.adventurer?.id === adventurer.id),
    );

    const usedItems: Item[] =
        activeQuest?.options?.assignments?.find((a) => a?.adventurer?.id === adventurer.id)
            ?.items ?? [];

    const isAvailable = adventurer.status === "AVAILABLE";

    const handleDelete = () => {
        if (!isAvailable) return;

        if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${adventurer.user.name} ?`)) {
            onDelete(adventurer.id);
        }
    };

    return (
        <div className="p-4 border border-slate-700 rounded bg-slate-900 flex flex-col gap-3 hover:bg-slate-800 transition">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="relative">
                            <img
                                src={adventurerImages[adventurer.type]}
                                alt={adventurerTypeLabels[adventurer.type]}
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
                                {adventurerTypeLabels[adventurer.type]}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>XP: {adventurer.xp.toLocaleString("fr-FR")}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>Statut: {statusLabels[adventurer.status]}</span>
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
                                <p className="text-xs text-slate-500 mb-2">Items assignés:</p>
                                <div className="flex gap-1.5 flex-wrap">
                                    {usedItems.map((item: Item, index: number) => (
                                        <div
                                            key={`${adventurer.id}-${item.id}-${index}`}
                                            className="relative"
                                        >
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
                                </div>
                            </div>
                        )}

                        <p className="text-xs text-slate-500">
                            Créé le {new Date(adventurer.user.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <UpdateButton
                        onClick={() => onEdit(adventurer)}
                        disabled={adventurer.status === "ON_QUEST"}
                        title={
                            adventurer.status === "ON_QUEST"
                                ? "Les aventuriers en quête ne peuvent pas être modifiés"
                                : "Modifier l'aventurier"
                        }
                    />
                    <DeleteButton
                        onClick={handleDelete}
                        disabled={!isAvailable}
                        title={
                            isAvailable
                                ? "Supprimer l'aventurier"
                                : "Seuls les aventuriers disponibles peuvent être supprimés"
                        }
                    />
                </div>
            </div>
        </div>
    );
}
