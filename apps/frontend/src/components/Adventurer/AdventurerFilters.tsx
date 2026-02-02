import {
    AdventurerStatus,
    AdventurerType,
} from "../../../../../packages/shared/src/types/adventurer.type";
import { useState, useRef, useEffect } from "react";
import { useAdventurerFilterStore } from "../../store/useAdventurerFilterStore";

export function AdventurerFilters() {
    const {
        minXp,
        setMinXp,
        maxXp,
        setMaxXp,
        nameSearch,
        setNameSearch,
        selectedStatus,
        setSelectedStatus,
        selectedTypes,
        setSelectedTypes,
        resetAllFilters,
    } = useAdventurerFilterStore();
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const typeDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                typeDropdownRef.current &&
                !typeDropdownRef.current.contains(event.target as Node)
            ) {
                setIsTypeDropdownOpen(false);
            }
        };

        if (isTypeDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isTypeDropdownOpen]);

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

    const statusLabels: Record<AdventurerStatus, string> = {
        [AdventurerStatus.AVAILABLE]: "Disponible",
        [AdventurerStatus.ON_QUEST]: "En quête",
        [AdventurerStatus.INJURED]: "Blessé",
        [AdventurerStatus.DEAD]: "Décédé",
        [AdventurerStatus.RESTING]: "Au repos",
        [AdventurerStatus.LEAVED]: "Parti",
    };

    const toggleType = (typeValue: AdventurerType) => {
        if (selectedTypes.includes(typeValue)) {
            setSelectedTypes(selectedTypes.filter((t) => t !== typeValue));
        } else {
            setSelectedTypes([...selectedTypes, typeValue]);
        }
    };

    const hasActiveFilters =
        minXp || maxXp || nameSearch || selectedStatus || selectedTypes.length > 0;

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
                    {/* Filtre par nom */}
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium w-32">Nom :</label>
                        <input
                            type="text"
                            placeholder="Rechercher par nom..."
                            value={nameSearch}
                            onChange={(e) => setNameSearch(e.target.value)}
                            className="flex-1 p-2 rounded bg-slate-800 text-slate-100 placeholder-slate-500"
                        />
                    </div>

                    {/* Filtre par XP */}
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium w-32">XP :</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                placeholder="Min"
                                value={minXp}
                                onChange={(e) => setMinXp(e.target.value)}
                                className="flex-1 p-2 rounded bg-slate-800 text-slate-100 placeholder-slate-500"
                            />
                            <span>-</span>
                            <input
                                type="number"
                                placeholder="Max"
                                value={maxXp}
                                onChange={(e) => setMaxXp(e.target.value)}
                                className="flex-1 p-2 rounded bg-slate-800 text-slate-100 placeholder-slate-500"
                            />
                        </div>
                    </div>

                    {/* Filtre par statut */}
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium w-32">Statut :</label>
                        <select
                            value={selectedStatus}
                            onChange={(e) =>
                                setSelectedStatus((e.target.value as AdventurerStatus) || "")
                            }
                            className="flex-1 p-2 rounded bg-slate-800 text-slate-100"
                        >
                            <option value="">Tous les statuts</option>
                            {Object.entries(statusLabels).map(([key, label]) => (
                                <option key={key} value={key}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Filtre par type */}
                    <div className="flex items-start gap-4">
                        <label className="text-sm font-medium w-32 pt-2">Types :</label>
                        <div className="relative flex-1" ref={typeDropdownRef}>
                            <button
                                onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                                className="w-full p-2 rounded bg-slate-800 text-slate-100 text-left flex justify-between items-center hover:bg-slate-700 transition"
                            >
                                <span>
                                    {selectedTypes.length > 0
                                        ? `${selectedTypes.length} sélectionné(s)`
                                        : "Sélectionner des types..."}
                                </span>
                                <span>{isTypeDropdownOpen ? "▲" : "▼"}</span>
                            </button>
                            {isTypeDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded shadow-lg z-50">
                                    <div className="grid grid-cols-2 gap-2 p-2">
                                        {Object.entries(classLabels).map(([key, label]) => (
                                            <label
                                                key={key}
                                                className="flex items-center gap-2 p-2 hover:bg-slate-700 rounded cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedTypes.includes(
                                                        key as AdventurerType,
                                                    )}
                                                    onChange={() =>
                                                        toggleType(key as AdventurerType)
                                                    }
                                                    className="w-4 h-4"
                                                />
                                                <span className="text-sm text-slate-100">
                                                    {label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bouton de réinitialisation */}
                    {hasActiveFilters && (
                        <button
                            onClick={() => resetAllFilters()}
                            className="w-full p-2 mt-4 rounded bg-slate-800 hover:bg-slate-700 text-slate-100 transition"
                        >
                            Réinitialiser les filtres
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
