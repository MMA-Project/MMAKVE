import { useState, type FormEvent } from "react";
import { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import type { QuestProcessingData } from "../../../../../packages/shared/src/types/quest.type";

interface AssistantQuestProcessingFormProps {
    questId: string;
    suggestedAdventurers?: any[];
    initialData?: Partial<QuestProcessingData>;
    onSubmit: (data: QuestProcessingData) => void;
    onCancel: () => void;
}

interface FieldErrors {
    profils?: string;
    xpRequired?: string;
    xpGained?: string;
    adventurers?: string;
}

export default function AssistantQuestProcessingForm({
    questId,
    suggestedAdventurers = [],
    initialData,
    onSubmit,
    onCancel,
}: AssistantQuestProcessingFormProps) {
    const [profils, setProfils] = useState<AdventurerType[]>(initialData?.profils || []);
    const [xpRequired, setXpRequired] = useState<number>(initialData?.xpRequired || 0);
    const [xpGained, setXpGained] = useState<number>(initialData?.xpGained || 0);
    const [selectedAdventurers, setSelectedAdventurers] = useState<string[]>(
        initialData?.adventurers || [],
    );
    const [errors, setErrors] = useState<FieldErrors>({});

    const allProfiles: AdventurerType[] = [
        AdventurerType.ARCHER,
        AdventurerType.BARBARIAN,
        AdventurerType.PALADIN,
        AdventurerType.ARCANE_MAGE,
        AdventurerType.PRIEST,
        AdventurerType.GEOMANCER,
        AdventurerType.ALCHEMIST,
        AdventurerType.BLACKSMITH,
        AdventurerType.ENCHANTER,
        AdventurerType.MESSENGER,
        AdventurerType.ROGUE,
        AdventurerType.WARRIOR,
    ];

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

    function validate(): FieldErrors {
        const e: FieldErrors = {};

        if (profils.length === 0) {
            e.profils = "Au moins un profil est requis";
        }

        if (xpRequired <= 0) {
            e.xpRequired = "L'XP requis doit être supérieur à 0";
        }

        if (xpGained < 0) {
            e.xpGained = "L'XP gagné ne peut pas être négatif";
        }

        if (selectedAdventurers.length === 0) {
            e.adventurers = "Au moins un aventurier doit être sélectionné";
        }

        return e;
    }

    function handleProfilToggle(profil: AdventurerType) {
        setProfils((prev) =>
            prev.includes(profil) ? prev.filter((p) => p !== profil) : [...prev, profil],
        );
    }

    function handleAdventurerToggle(adventurerId: string) {
        setSelectedAdventurers((prev) =>
            prev.includes(adventurerId)
                ? prev.filter((id) => id !== adventurerId)
                : [...prev, adventurerId],
        );
    }

    function handleApprove(e: FormEvent) {
        e.preventDefault();
        const validation = validate();
        setErrors(validation);

        if (Object.keys(validation).length === 0) {
            onSubmit({
                profils,
                xpRequired,
                xpGained,
                adventurers: selectedAdventurers,
                approved: true,
            });
        }
    }

    function handleReject(e: FormEvent) {
        e.preventDefault();
        onSubmit({
            profils: [],
            xpRequired: 0,
            xpGained: 0,
            adventurers: [],
            approved: false,
        });
    }

    return (
        <div className="bg-slate-800 rounded-lg p-6 shadow-xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-slate-100">Traiter la requête</h2>

            <form className="space-y-6">
                {/* Profils requis */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Profils requis
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {allProfiles.map((profil) => (
                            <button
                                key={profil}
                                type="button"
                                onClick={() => handleProfilToggle(profil)}
                                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                                    profils.includes(profil)
                                        ? "bg-blue-600 text-white border-blue-500"
                                        : "bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600"
                                } border`}
                            >
                                {classLabels[profil]}
                            </button>
                        ))}
                    </div>
                    {errors.profils && (
                        <p className="text-red-400 text-sm mt-1">{errors.profils}</p>
                    )}
                </div>

                {/* XP Requis */}
                <div>
                    <label
                        htmlFor="xpRequired"
                        className="block text-sm font-medium text-slate-300 mb-2"
                    >
                        XP requis
                    </label>
                    <input
                        id="xpRequired"
                        type="number"
                        min="0"
                        value={xpRequired}
                        onChange={(e) => setXpRequired(Number(e.target.value))}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.xpRequired && (
                        <p className="text-red-400 text-sm mt-1">{errors.xpRequired}</p>
                    )}
                </div>

                {/* XP Gagné */}
                <div>
                    <label
                        htmlFor="xpGained"
                        className="block text-sm font-medium text-slate-300 mb-2"
                    >
                        XP gagné
                    </label>
                    <input
                        id="xpGained"
                        type="number"
                        min="0"
                        value={xpGained}
                        onChange={(e) => setXpGained(Number(e.target.value))}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.xpGained && (
                        <p className="text-red-400 text-sm mt-1">{errors.xpGained}</p>
                    )}
                </div>

                {/* Aventuriers suggérés */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Aventuriers suggérés
                    </label>
                    {suggestedAdventurers.length > 0 ? (
                        <div className="space-y-2">
                            {suggestedAdventurers.map((adventurer) => (
                                <div
                                    key={adventurer.id}
                                    className="flex items-center justify-between p-3 bg-slate-700 rounded border border-slate-600"
                                >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedAdventurers.includes(adventurer.id)}
                                            onChange={() => handleAdventurerToggle(adventurer.id)}
                                            className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500"
                                        />
                                        <div>
                                            <p className="font-medium text-slate-100">
                                                {adventurer.user?.name || "Sans nom"}
                                            </p>
                                            <p className="text-sm text-slate-400">
                                                {adventurer.type} • {adventurer.xp} XP
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-slate-400">
                                        {adventurer.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-6 border border-slate-700 rounded bg-slate-700/50 text-center text-slate-400">
                            <p>Aucune suggestion d'aventurier disponible</p>
                            <p className="text-sm mt-1">
                                Cliquez sur "Suggérer des aventuriers" pour obtenir des
                                recommandations
                            </p>
                        </div>
                    )}
                    {errors.adventurers && (
                        <p className="text-red-400 text-sm mt-1">{errors.adventurers}</p>
                    )}
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                    <button
                        type="button"
                        onClick={handleApprove}
                        className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        ✓ Approuver
                    </button>
                    <button
                        type="button"
                        onClick={handleReject}
                        className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        ✗ Rejeter
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
}
