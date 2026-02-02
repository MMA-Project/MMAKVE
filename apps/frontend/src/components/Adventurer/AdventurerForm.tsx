import { useState, useEffect } from "react";
import {
    AdventurerType,
    AdventurerStatus,
} from "../../../../../packages/shared/src/types/adventurer.type";
import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";

interface AdventurerFormProps {
    adventurer?: Adventurer;
    onSubmit: (data: any) => Promise<void>;
    onCancel: () => void;
    isLoading?: boolean;
}

export function AdventurerForm({
    adventurer,
    onSubmit,
    onCancel,
    isLoading = false,
}: AdventurerFormProps) {
    const [formData, setFormData] = useState({
        user: {
            name: "",
        },
        type: AdventurerType.WARRIOR as AdventurerType,
        status: AdventurerStatus.AVAILABLE as AdventurerStatus,
        xp: 0,
    });

    useEffect(() => {
        if (adventurer) {
            setFormData({
                user: { name: adventurer.user.name },
                type: adventurer.type,
                status: adventurer.status,
                xp: adventurer.xp,
            });
        }
    }, [adventurer]);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (adventurer) {
                await onSubmit({
                    user: { ...adventurer.user, ...formData.user },
                    type: formData.type,
                    status: formData.status,
                    xp: formData.xp,
                });
            } else {
                await onSubmit({
                    user: {
                        name: formData.user.name,
                        id: "",
                        role: "ADVENTURER",
                        createdAt: new Date(),
                    },
                    type: formData.type,
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-100 mb-1">
                    Nom de l'aventurier *
                </label>
                <input
                    type="text"
                    required
                    value={formData.user.name}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            user: { ...formData.user, name: e.target.value },
                        })
                    }
                    className="w-full p-2 rounded bg-slate-800 text-slate-100 border border-slate-700 focus:border-blue-500 focus:outline-none"
                    placeholder="Entrez le nom de l'aventurier"
                    disabled={isLoading}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-100 mb-1">
                    Type de classe *
                </label>
                <select
                    required
                    value={formData.type}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            type: e.target.value as AdventurerType,
                        })
                    }
                    className="w-full p-2 rounded bg-slate-800 text-slate-100 border border-slate-700 focus:border-blue-500 focus:outline-none"
                    disabled={isLoading}
                >
                    {Object.entries(classLabels).map(([key, label]) => (
                        <option key={key} value={key}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            {adventurer && (
                <div>
                    <label className="block text-sm font-medium text-slate-100 mb-1">Statut</label>
                    <select
                        value={formData.status}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                status: e.target.value as AdventurerStatus,
                            })
                        }
                        className="w-full p-2 rounded bg-slate-800 text-slate-100 border border-slate-700 focus:border-blue-500 focus:outline-none"
                        disabled={isLoading}
                    >
                        {Object.entries(statusLabels).map(([key, label]) => (
                            <option key={key} value={key}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {adventurer && (
                <div>
                    <label className="block text-sm font-medium text-slate-100 mb-1">XP</label>
                    <input
                        type="number"
                        min="0"
                        value={formData.xp}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                xp: parseInt(e.target.value) || 0,
                            })
                        }
                        className="w-full p-2 rounded bg-slate-800 text-slate-100 border border-slate-700 focus:border-blue-500 focus:outline-none"
                        disabled={isLoading}
                    />
                </div>
            )}

            <div className="flex gap-2 pt-4">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-slate-100 rounded transition"
                >
                    {isLoading ? "Traitement..." : adventurer ? "Modifier" : "Créer"}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={isLoading}
                    className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-600 text-slate-100 rounded transition"
                >
                    Annuler
                </button>
            </div>
        </form>
    );
}
