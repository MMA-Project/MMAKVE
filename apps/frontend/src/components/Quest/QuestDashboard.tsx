import { useCancelQuest } from "../../api/quest.api";
import { useQuests } from "../../api/quest.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CancelButton } from "../Buttons/CancelButton";
import { useAuth } from "../../context/AuthContext";
import { QuestFilters } from "./QuestFilters";
import { QuestList } from "./QuestList";
import { useFilterStore } from "../../store/useFilterStore";
import type { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import { CreateQuestModal } from "./CreateQuestModal";

type SortBy = "date_limit" | "prime" | "status" | "xp" | "client";

type SortOrder = "asc" | "desc";

export function QuestDashboard() {
    const getQuests = useQuests();
    const cancelQuestMutation = useCancelQuest();
    const { user } = useAuth();
    const [sortBy, setSortBy] = useState<SortBy>("date_limit");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const {
        minReward,
        maxReward,
        minXp,
        maxXp,
        startDate,
        endDate,
        selectedStatus,
        clientSearch,
        selectedClasses,
    } = useFilterStore();

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                        📜 Tableau de bord des quêtes
                    </h1>
                    <p className="text-slate-400">Gestion et suivi des missions</p>
                </div>

                {/* Section de filtrage */}
                <div className="mb-6 bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <div className="flex justify-between items-end gap-4">
                        <div className="flex items-center gap-4">
                            <label htmlFor="sort" className="text-sm font-medium text-slate-300">
                                Trier par :
                            </label>
                            <select
                                id="sort"
                                className="px-3 py-2 rounded bg-slate-900 text-slate-100 border border-slate-600 hover:border-slate-500 transition-colors"
                                onChange={(e) => {
                                    const sortBy = e.target.value;
                                    setSortBy(sortBy as SortBy);
                                }}
                            >
                                <option value="date_limit">Date limite</option>
                                <option value="prime">Prime</option>
                                <option value="status">Status</option>
                                <option value="xp">XP requis</option>
                                <option value="client">Client</option>
                            </select>
                            <button
                                id="order"
                                className="px-3 py-2 rounded bg-slate-900 text-slate-100 border border-slate-600 hover:border-slate-500 transition-colors"
                                onClick={() =>
                                    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
                                }
                            >
                                {sortOrder === "asc" ? "⬆" : "⬇"}
                            </button>
                        </div>
                        <QuestFilters />
                    </div>
                </div>

                <div className="space-y-4">
                    {user.role === "CLIENT" && (
                        <div
                            className="p-6 border-2 border-dashed border-slate-600 rounded-lg bg-slate-900/50 flex flex-col gap-3 hover:cursor-pointer hover:border-emerald-500 hover:bg-slate-800/50 transition-all group"
                            onClick={() => setIsCreateModalOpen(true)}
                        >
                            <div className="flex items-center justify-center gap-2 text-slate-400 group-hover:text-emerald-400 transition-colors">
                                <span className="text-2xl">+</span>
                                <span className="font-medium">Créer une nouvelle quête</span>
                            </div>
                        </div>
                    )}
                    {(() => {
                        const filteredQuests = getQuests.data?.slice().filter((quest) => {
                            const min = minReward ? parseFloat(minReward) : null;
                            const max = maxReward ? parseFloat(maxReward) : null;
                            if (min !== null && quest.reward < min) return false;
                            if (max !== null && quest.reward > max) return false;

                            const minXpValue = minXp ? parseFloat(minXp) : null;
                            const maxXpValue = maxXp ? parseFloat(maxXp) : null;
                            const questXp = quest.options?.xp_required ?? 0;
                            if (minXpValue !== null && questXp < minXpValue) return false;
                            if (maxXpValue !== null && questXp > maxXpValue) return false;

                            if (startDate) {
                                const start = new Date(startDate);
                                if (quest.deadline < start) return false;
                            }
                            if (endDate) {
                                const end = new Date(endDate);
                                end.setHours(23, 59, 59, 999); // Fin de journée
                                if (quest.deadline > end) return false;
                            }

                            if (selectedStatus && quest.status !== selectedStatus) return false;

                            if (
                                clientSearch &&
                                !quest.requester.name
                                    .toLowerCase()
                                    .includes(clientSearch.toLowerCase())
                            ) {
                                return false;
                            }

                            if (selectedClasses.length > 0 && quest.options?.profils) {
                                const hasMatchingClass = selectedClasses.some(
                                    (selectedClass: AdventurerType) =>
                                        quest.options!.profils.includes(selectedClass),
                                );
                                if (!hasMatchingClass) return false;
                            }

                            return true;
                        });

                        return (
                            <QuestList
                                quests={filteredQuests}
                                sortBy={sortBy}
                                sortOrder={sortOrder}
                                userRole={user.role}
                                userId={user.id}
                                cancelQuestMutation={cancelQuestMutation}
                            />
                        );
                    })()}
                </div>

                <CreateQuestModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            </div>
        </div>
    );
}
