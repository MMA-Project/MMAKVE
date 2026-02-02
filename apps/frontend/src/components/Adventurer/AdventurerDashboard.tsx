import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import { useAdventurers } from "../../api/adventurerApi";
import { useAdventurerFilterStore } from "../../store/useAdventurerFilterStore";
import { AdventurerFilters } from "./AdventurerFilters";
import { AdventurerList } from "./AdventurerList";
import { CreateAdventurerModal } from "./CreateAdventurerModal";
import { EditAdventurerModal } from "./EditAdventurerModal";
import { useState } from "react";
import { SortControls } from "../common/SortControls";
import type { SortOrder } from "../common/SortControls";
import { CreateButton } from "../common/CreateButton";

type SortBy = "name" | "xp" | "type" | "status" | "createdAt";

export function AdventurerDashboard() {
    const getAdventurers = useAdventurers();
    const [sortBy, setSortBy] = useState<SortBy>("name");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedAdventurerForEdit, setSelectedAdventurerForEdit] = useState<Adventurer | null>(
        null,
    );

    const { minXp, maxXp, nameSearch, selectedStatus, selectedTypes } = useAdventurerFilterStore();

    const sortOptions = [
        { value: "name" as const, label: "Nom" },
        { value: "xp" as const, label: "XP" },
        { value: "type" as const, label: "Classe" },
        { value: "status" as const, label: "Statut" },
        { value: "createdAt" as const, label: "Date de création" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        🧝 Tableau de bord des aventuriers
                    </h1>
                    <p className="text-slate-400">Gestion de votre équipe d'aventuriers</p>
                </div>

                <SortControls
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    onSortByChange={setSortBy}
                    onSortOrderChange={setSortOrder}
                    sortOptions={sortOptions}
                    additionalControls={<AdventurerFilters />}
                />

                <div className="space-y-4">
                    <CreateButton
                        onClick={() => setIsCreateModalOpen(true)}
                        title="Créer un nouvel aventurier"
                        hoverColor="purple"
                    />

                    <AdventurerList
                        adventurers={getAdventurers.data?.filter((adventurer) => {
                            if (
                                nameSearch &&
                                !adventurer.user.name
                                    .toLowerCase()
                                    .includes(nameSearch.toLowerCase())
                            ) {
                                return false;
                            }

                            const minXpValue = minXp ? parseFloat(minXp) : null;
                            const maxXpValue = maxXp ? parseFloat(maxXp) : null;
                            if (minXpValue !== null && adventurer.xp < minXpValue) return false;
                            if (maxXpValue !== null && adventurer.xp > maxXpValue) return false;

                            if (selectedStatus && adventurer.status !== selectedStatus)
                                return false;

                            if (
                                selectedTypes.length > 0 &&
                                !selectedTypes.includes(adventurer.type)
                            ) {
                                return false;
                            }

                            return true;
                        })}
                        sortBy={sortBy}
                        sortOrder={sortOrder}
                        onEdit={setSelectedAdventurerForEdit}
                    />
                </div>

                <CreateAdventurerModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
                <EditAdventurerModal
                    isOpen={selectedAdventurerForEdit !== null}
                    adventurer={selectedAdventurerForEdit}
                    onClose={() => setSelectedAdventurerForEdit(null)}
                />
            </div>
        </div>
    );
}
