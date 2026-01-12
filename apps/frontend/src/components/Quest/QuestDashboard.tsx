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
        <div className="min-h-screen flex flex-col items-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <h1 className="text-3xl font-bold">Tableau de bord des quêtes</h1>

            {/* Section de filtrage */}
            <div className="w-full max-w-4xl">
                <div className="flex justify-between items-end gap-4">
                    <div className="flex items-center gap-4">
                        <label htmlFor="sort" className="text-sm font-medium">
                            Trier par :
                        </label>
                        <select
                            id="sort"
                            className="p-2 rounded bg-slate-800 text-slate-100"
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
                            className="p-2 rounded bg-slate-800 text-slate-100"
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

            <div className="w-full max-w-4xl space-y-4">
                {user.role === "CLIENT" && (
                    <div
                        className="p-4 border border-slate-700 rounded bg-slate-900 flex flex-col gap-3 hover:cursor-pointer hover:bg-slate-800 transition"
                        onClick={() => setIsCreateModalOpen(true)}
                    >
                        <div className="flex items-center justify-center gap-2 text-slate-400">
                            <span>+</span>
                            <span>Créer une nouvelle quête</span>
                        </div>
                    </div>
                )}
                {(() => {
                    const filteredQuests = getQuests.data?.slice().filter((quest) => {
                        // Filtrage par prime
                        const min = minReward ? parseFloat(minReward) : null;
                        const max = maxReward ? parseFloat(maxReward) : null;
                        if (min !== null && quest.reward < min) return false;
                        if (max !== null && quest.reward > max) return false;

                        // Filtrage par XP requis
                        const minXpValue = minXp ? parseFloat(minXp) : null;
                        const maxXpValue = maxXp ? parseFloat(maxXp) : null;
                        const questXp = quest.options?.xp_required ?? 0;
                        if (minXpValue !== null && questXp < minXpValue) return false;
                        if (maxXpValue !== null && questXp > maxXpValue) return false;

                        // Filtrage par date limite
                        if (startDate) {
                            const start = new Date(startDate);
                            if (quest.deadline < start) return false;
                        }
                        if (endDate) {
                            const end = new Date(endDate);
                            end.setHours(23, 59, 59, 999); // Fin de journée
                            if (quest.deadline > end) return false;
                        }

                        // Filtrage par status
                        if (selectedStatus && quest.status !== selectedStatus) return false;

                        // Filtrage par client
                        if (
                            clientSearch &&
                            !quest.requester.name.toLowerCase().includes(clientSearch.toLowerCase())
                        ) {
                            return false;
                        }

                        // Filtrage par classes d'aventurier
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
    );
}
