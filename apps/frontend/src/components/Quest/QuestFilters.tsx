import { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import { useState, useRef, useEffect } from "react";
import { useFilterStore } from "../../store/useFilterStore";

export function QuestFilters() {
    const {
        minReward,
        setMinReward,
        maxReward,
        setMaxReward,
        minXp,
        setMinXp,
        maxXp,
        setMaxXp,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        selectedStatus,
        setSelectedStatus,
        clientSearch,
        setClientSearch,
        selectedClasses,
        setSelectedClasses,
        resetAllFilters,
    } = useFilterStore();
    const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
    const classDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                classDropdownRef.current &&
                !classDropdownRef.current.contains(event.target as Node)
            ) {
                setIsClassDropdownOpen(false);
            }
        };

        if (isClassDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isClassDropdownOpen]);

    const classLabels: Record<AdventurerType, string> = {
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

    const toggleClass = (classType: AdventurerType) => {
        if (selectedClasses.includes(classType)) {
            setSelectedClasses(selectedClasses.filter((c) => c !== classType));
        } else {
            setSelectedClasses([...selectedClasses, classType]);
        }
    };

    const hasActiveFilters =
        minReward ||
        maxReward ||
        minXp ||
        maxXp ||
        startDate ||
        endDate ||
        selectedStatus ||
        clientSearch ||
        selectedClasses.length > 0;

    return (
        <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-100 transition">
                <span>▼</span>
                <span>Filtres avancés</span>
                {hasActiveFilters && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-blue-600 rounded">Actif</span>
                )}
            </button>

            <div className="absolute right-0 top-full mt-2 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="space-y-4 p-4 border border-slate-700 rounded bg-slate-900 shadow-2xl">
                    {/* Filtre par prime */}
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium w-32">Prime :</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                placeholder="Min"
                                value={minReward}
                                onChange={(e) => setMinReward(e.target.value)}
                                className="w-24 p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                                min="0"
                            />
                            <span className="text-slate-400">—</span>
                            <input
                                type="number"
                                placeholder="Max"
                                value={maxReward}
                                onChange={(e) => setMaxReward(e.target.value)}
                                className="w-24 p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                                min="0"
                            />
                            <span>💰</span>
                        </div>
                    </div>

                    {/* Filtre par XP requis */}
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium w-32">XP requis :</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                placeholder="Min"
                                value={minXp}
                                onChange={(e) => setMinXp(e.target.value)}
                                className="w-24 p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                                min="0"
                            />
                            <span className="text-slate-400">—</span>
                            <input
                                type="number"
                                placeholder="Max"
                                value={maxXp}
                                onChange={(e) => setMaxXp(e.target.value)}
                                className="w-24 p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                                min="0"
                            />
                            <span>⭐</span>
                        </div>
                    </div>

                    {/* Filtre par date limite */}
                    <div className="flex flex-wrap items-center gap-4">
                        <label className="text-sm font-medium w-20 sm:w-32 flex-shrink-0">
                            Date limite :
                        </label>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1 sm:flex-none">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="w-full sm:w-auto p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                            />
                            <span className="hidden sm:inline text-slate-400">—</span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="w-full sm:w-auto p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                            />
                            <span className="hidden sm:inline">📅</span>
                        </div>
                    </div>

                    {/* Filtre par status */}
                    <div className="flex flex-wrap items-center gap-4">
                        <label className="text-sm font-medium w-20 sm:w-32 flex-shrink-0">
                            Status :
                        </label>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value as QuestStatus | "")}
                            className="flex-1 sm:flex-none p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                        >
                            <option value="">Tous les status</option>
                            <option value={QuestStatus.PENDING}>En attente d'approbation</option>
                            <option value={QuestStatus.APPROVED}>Approuvé</option>
                            <option value={QuestStatus.IN_PROGRESS}>En cours</option>
                            <option value={QuestStatus.COMPLETED}>Complété</option>
                            <option value={QuestStatus.FAILED}>Échoué</option>
                        </select>
                        <span>📊</span>
                    </div>

                    {/* Filtre par classes d'aventurier */}
                    <div className="flex flex-wrap items-center gap-4">
                        <label className="text-sm font-medium w-20 sm:w-32 flex-shrink-0">
                            Classes :
                        </label>
                        <div className="relative flex-1 sm:flex-none" ref={classDropdownRef}>
                            <div
                                onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
                                className="flex-1 sm:w-64 p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus-within:border-slate-500 cursor-pointer min-h-[42px] flex items-center justify-between"
                            >
                                <span className="text-sm">
                                    {selectedClasses.length > 0
                                        ? `${selectedClasses.length} classe${selectedClasses.length > 1 ? "s" : ""} sélectionnée${selectedClasses.length > 1 ? "s" : ""}`
                                        : "Sélectionner des classes..."}
                                </span>
                                <span className="text-slate-400">
                                    {isClassDropdownOpen ? "▲" : "▼"}
                                </span>
                            </div>

                            {isClassDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 max-h-64 overflow-y-auto bg-slate-800 border border-slate-600 rounded shadow-lg z-10">
                                    {Object.entries(classLabels).map(([key, label]) => {
                                        const classType = key as AdventurerType;
                                        const isSelected = selectedClasses.includes(classType);
                                        return (
                                            <label
                                                key={classType}
                                                className="flex items-center gap-2 px-3 py-2 hover:bg-slate-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => toggleClass(classType)}
                                                    className="w-4 h-4 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm text-slate-100">
                                                    {label}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                        <span>⚔️</span>
                    </div>

                    {/* Filtre par client */}
                    <div className="flex flex-wrap items-center gap-4 sm:justify-between">
                        <div className="flex items-center gap-4 flex-1 sm:flex-none">
                            <label className="text-sm font-medium w-20 sm:w-32 flex-shrink-0">
                                Client :
                            </label>
                            <input
                                type="text"
                                placeholder="Rechercher un client..."
                                value={clientSearch}
                                onChange={(e) => setClientSearch(e.target.value)}
                                className="flex-1 sm:w-96 sm:flex-none p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                            />
                            <span>👤</span>
                        </div>
                        {/* Bouton de réinitialisation */}
                        {hasActiveFilters && (
                            <button
                                onClick={resetAllFilters}
                                className="w-full sm:w-auto px-4 py-2 text-sm rounded bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-slate-100 transition whitespace-nowrap"
                            >
                                Réinitialiser tous les filtres
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
