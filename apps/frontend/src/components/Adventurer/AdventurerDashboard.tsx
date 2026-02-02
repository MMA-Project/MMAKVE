import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import { useAdventurers } from "../../api/adventurerApi";
import { useAdventurerFilterStore } from "../../store/useAdventurerFilterStore";
import { AdventurerFilters } from "./AdventurerFilters";
import { AdventurerList } from "./AdventurerList";
import { CreateAdventurerModal } from "./CreateAdventurerModal";
import { EditAdventurerModal } from "./EditAdventurerModal";
import { useState } from "react";

type SortBy = "name" | "xp" | "type" | "status" | "createdAt";
type SortOrder = "asc" | "desc";

export function AdventurerDashboard() {
    const getAdventurers = useAdventurers();
    const [sortBy, setSortBy] = useState<SortBy>("name");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [selectedAdventurerForEdit, setSelectedAdventurerForEdit] = useState<Adventurer | null>(
        null,
    );

    const { minXp, maxXp, nameSearch, selectedStatus, selectedTypes } = useAdventurerFilterStore();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        🧝 Tableau de bord des aventuriers
                    </h1>
                    <p className="text-slate-400">Gestion de votre équipe d'aventuriers</p>
                </div>

                {/* Section de tri et filtrage */}
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
                                    setSortBy(e.target.value as SortBy);
                                }}
                            >
                                <option value="name">Nom</option>
                                <option value="xp">XP</option>
                                <option value="type">Classe</option>
                                <option value="status">Statut</option>
                                <option value="createdAt">Date de création</option>
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
                        <AdventurerFilters />
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Bouton de création */}
                    <div
                        className="p-6 border-2 border-dashed border-slate-600 rounded-lg bg-slate-900/50 flex flex-col gap-3 hover:cursor-pointer hover:border-purple-500 hover:bg-slate-800/50 transition-all group"
                        onClick={() => setIsCreateModalOpen(true)}
                    >
                        <div className="flex items-center justify-center gap-2 text-slate-400 group-hover:text-purple-400 transition-colors">
                            <span className="text-2xl">+</span>
                            <span className="font-medium">Créer un nouvel aventurier</span>
                        </div>
                    </div>

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
