import { useCancelQuest } from "../../api/quest.api";
import { useQuests } from "../../api/quest.api";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { QuestFilters } from "./QuestFilters";
import { QuestList } from "./QuestList";
import { useFilterStore } from "../../store/useQuestFilterStore";
import type { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import { CreateQuestModal } from "./CreateQuestModal";
import { SortControls, type SortOrder } from "../common/SortControls";
import { CreateButton } from "../common/CreateButton";
import { LoadingState, ErrorState, EmptyState } from "../common";

type SortBy = "date_limit" | "prime" | "status" | "xp" | "client" | "name";

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
        nameSearch,
        selectedClasses,
    } = useFilterStore();

    const sortOptions = [
        { value: "date_limit" as const, label: "Date limite" },
        { value: "prime" as const, label: "Prime" },
        { value: "status" as const, label: "Statut" },
        { value: "xp" as const, label: "XP requis" },
        { value: "client" as const, label: "Client" },
        { value: "name" as const, label: "Nom" },
    ];

    if (!user) return null;

    if (getQuests.isLoading) {
        return <LoadingState message="Chargement des quêtes..." />;
    }

    if (getQuests.isError) {
        const errorMessage =
            getQuests.error instanceof Error ? getQuests.error.message : "Une erreur est survenue.";
        return <ErrorState title="Impossible de charger les quêtes" message={errorMessage} />;
    }

    if (!getQuests.data) {
        return (
            <EmptyState
                title="Aucune donnée disponible"
                message="Les quêtes ne sont pas disponibles pour le moment."
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                        📜 Tableau de bord des quêtes
                    </h1>
                    <p className="text-slate-400">Gestion et suivi des missions</p>
                </div>

                <SortControls
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    onSortByChange={setSortBy}
                    onSortOrderChange={setSortOrder}
                    sortOptions={sortOptions}
                    additionalControls={<QuestFilters />}
                />

                <div className="space-y-4">
                    {user.role === "CLIENT" && (
                        <CreateButton
                            onClick={() => setIsCreateModalOpen(true)}
                            title="Créer une nouvelle quête"
                            hoverColor="emerald"
                        />
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

                            if (
                                nameSearch &&
                                !quest.title.toLowerCase().includes(nameSearch.toLowerCase())
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
                                onProcessingFormOpen={() => {
                                    // Le formulaire est géré directement par QuestList
                                }}
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
