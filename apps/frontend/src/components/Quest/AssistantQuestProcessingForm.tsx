import { useState, type FormEvent } from "react";
import { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import type { QuestProcessingData } from "../../../../../packages/shared/src/types/quest.type";
import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import type { Quest } from "../../../../../packages/shared/src/types/quest.type";
import { useAdventurers } from "../../api/adventurerApi";
import { useSuggestAdventurers } from "../../api/quest.api";
import { formatCurrency } from "../../utils/currency";
import { adventurerImages, adventurerTypeLabels } from "../../utils/adventurerImages";

interface AssistantQuestProcessingFormProps {
    questId: string;
    quest: Quest;
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
    startDate?: string;
    endDate?: string;
}

/**
 * JBASE : Taux journalier de base d'un aventurier
 * Avec les rewards de la seed (150-750) et des missions de 5-14 jours avec 2-3 aventuriers :
 * - Exemple : Quest 2 (300 reward, 5 jours) -> 2 aventuriers avec ~3000 XP chacun
 *   -> Taux journalier : 100 * (1 + 0.5 * log10(3000)) ≈ 100 * 2.74 = 274/jour
 *   -> Salaire total : 2 * 274 * 5 = 2740 (reste 300 - 2740 = déficitaire, donc augmentons)
 *
 * Ajusté à 50 pour que les salaires soient cohérents avec les primes de la seed.
 */
const JBASE = 3;

export default function AssistantQuestProcessingForm({
    questId: _questId,
    quest,
    suggestedAdventurers = [],
    initialData,
    onSubmit,
    onCancel,
}: AssistantQuestProcessingFormProps) {
    const [profils, setProfils] = useState<AdventurerType[]>(initialData?.profils || []);
    const [xpRequired, setXpRequired] = useState<number>(initialData?.xpRequired || 0);
    const [xpGained, setXpGained] = useState<number>(initialData?.xpGained || 0);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [selectedAdventurers, setSelectedAdventurers] = useState<string[]>(
        initialData?.adventurers || [],
    );
    const [manualMode, setManualMode] = useState<boolean>(false);
    const [errors, setErrors] = useState<FieldErrors>({});

    const { data: allAdventurers } = useAdventurers();

    // Calcul de la durée de la mission en jours
    const getMissionDuration = (): number => {
        if (!startDate || !endDate) return 0;
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    // Calcul du taux de réussite individuel
    const calculateIndividualSuccessRate = (adventurerXp: number): number => {
        if (xpRequired <= 0) return 0;
        return Math.min(adventurerXp, xpRequired) / xpRequired;
    };

    // Calcul du taux journalier
    const calculateDailyRate = (adventurerXp: number): number => {
        if (adventurerXp <= 0) return JBASE;
        return JBASE * (1 + 0.5 * Math.log10(adventurerXp));
    };

    // Calcul du salaire total
    const calculateSalary = (adventurerXp: number): number => {
        const duration = getMissionDuration();
        const dailyRate = calculateDailyRate(adventurerXp);
        return Math.round(dailyRate * duration * 100) / 100;
    };

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

    // Filtrer les aventuriers disponibles par profils sélectionnés pour le mode manuel
    const getFilteredAdventurers = (): Adventurer[] => {
        if (!allAdventurers || profils.length === 0) return [];
        return allAdventurers.filter(
            (adv: Adventurer) => adv.status === "AVAILABLE" && profils.includes(adv.type),
        );
    };

    // Vérifier que tous les champs obligatoires sont remplis
    const areRequiredFieldsFilled = (): boolean => {
        return (
            profils.length > 0 &&
            xpRequired > 0 &&
            xpGained >= 0 &&
            startDate !== "" &&
            endDate !== "" &&
            new Date(startDate) < new Date(endDate)
        );
    };

    const suggestQuery = useSuggestAdventurers(quest.id, {
        xpRequired,
        profils,
        enabled: areRequiredFieldsFilled() && !manualMode,
    });
    const effectiveSuggestedAdventurers =
        suggestQuery.data?.bestTeammates ?? suggestedAdventurers ?? [];

    // Obtenir les aventuriers sélectionnés avec leurs infos
    const getSelectedAdventurersData = (): Adventurer[] => {
        const source = manualMode ? allAdventurers : effectiveSuggestedAdventurers;
        return selectedAdventurers
            .map((id) => source?.find((a: Adventurer) => a.id === id))
            .filter((a): a is Adventurer => a !== undefined);
    };

    // Calcul du taux de réussite global de l'équipe
    const calculateTeamSuccessRate = (): number => {
        const selectedData = getSelectedAdventurersData();
        if (selectedData.length === 0 || xpRequired <= 0) return 0;

        const sumIndividualRates = selectedData.reduce((sum, adv) => {
            return sum + calculateIndividualSuccessRate(adv.xp);
        }, 0);

        return Math.min(100, 0.8 * sumIndividualRates * 100);
    };

    // Calcul du salaire total de l'équipe
    const calculateTeamSalary = (): number => {
        const selectedData = getSelectedAdventurersData();
        return selectedData.reduce((sum, adv) => {
            return sum + calculateSalary(adv.xp);
        }, 0);
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

        if (!startDate) {
            e.startDate = "La date de début est requise";
        }

        if (!endDate) {
            e.endDate = "La date de fin est requise";
        }

        if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
            e.endDate = "La date de fin doit être après la date de début";
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
                startDate: new Date(startDate),
                endDate: new Date(endDate),
            } as any);
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

            {/* Informations de la quête (non modifiables) */}
            <div className="mb-8 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <h3 className="text-lg font-semibold text-slate-100 mb-3">
                    📋 Informations de la quête
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-slate-400">Titre</p>
                        <p className="text-slate-100 font-medium">{quest.title}</p>
                    </div>
                    <div>
                        <p className="text-slate-400">Client</p>
                        <p className="text-slate-100 font-medium">{quest.requester.name}</p>
                    </div>
                    <div>
                        <p className="text-slate-400">Description</p>
                        <p className="text-slate-100 font-medium col-span-2">{quest.description}</p>
                    </div>
                    <div>
                        <p className="text-slate-400">Prime</p>
                        <p className="text-slate-100 font-medium">
                            {formatCurrency(quest.reward)} 💰
                        </p>
                    </div>
                    <div>
                        <p className="text-slate-400">Date limite</p>
                        <p className="text-slate-100 font-medium">
                            {new Date(quest.deadline).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

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

                {/* Date de début */}
                <div>
                    <label
                        htmlFor="startDate"
                        className="block text-sm font-medium text-slate-300 mb-2"
                    >
                        Date de début
                    </label>
                    <input
                        id="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.startDate && (
                        <p className="text-red-400 text-sm mt-1">{errors.startDate}</p>
                    )}
                </div>

                {/* Date de fin */}
                <div>
                    <label
                        htmlFor="endDate"
                        className="block text-sm font-medium text-slate-300 mb-2"
                    >
                        Date de fin
                    </label>
                    <input
                        id="endDate"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.endDate && (
                        <p className="text-red-400 text-sm mt-1">{errors.endDate}</p>
                    )}
                </div>

                {/* Durée de la mission */}
                {startDate && endDate && (
                    <div className="p-4 bg-slate-700/50 rounded border border-slate-600">
                        <p className="text-sm text-slate-300">
                            Durée de la mission:{" "}
                            <span className="font-semibold text-slate-100">
                                {getMissionDuration()} jour(s)
                            </span>
                        </p>
                    </div>
                )}

                {/* Mode de sélection */}
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        Mode de sélection des aventuriers
                    </label>
                    {!areRequiredFieldsFilled() && (
                        <p className="text-sm text-amber-400 mb-2">
                            ⚠️ Remplissez tous les champs obligatoires ci-dessus pour sélectionner
                            des aventuriers
                        </p>
                    )}
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => {
                                setManualMode(false);
                                setSelectedAdventurers([]);
                            }}
                            disabled={!areRequiredFieldsFilled()}
                            className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
                                !manualMode
                                    ? "bg-blue-600 text-white border-blue-500"
                                    : "bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600"
                            } border ${
                                !areRequiredFieldsFilled()
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-slate-600"
                            }`}
                        >
                            🎯 Suggestions automatiques
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setManualMode(true);
                                setSelectedAdventurers([]);
                            }}
                            disabled={!areRequiredFieldsFilled()}
                            className={`flex-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
                                manualMode
                                    ? "bg-blue-600 text-white border-blue-500"
                                    : "bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600"
                            } border ${
                                !areRequiredFieldsFilled()
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-slate-600"
                            }`}
                        >
                            ✋ Sélection manuelle
                        </button>
                    </div>
                </div>

                {/* Aventuriers suggérés ou sélection manuelle */}
                {areRequiredFieldsFilled() ? (
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            {manualMode
                                ? "Aventuriers disponibles (selon profils)"
                                : "Aventuriers suggérés"}
                        </label>
                        {!manualMode && effectiveSuggestedAdventurers.length > 0 ? (
                            <div className="space-y-2">
                                {effectiveSuggestedAdventurers
                                    .filter(
                                        (adventurer: Adventurer) =>
                                            adventurer.status === "AVAILABLE",
                                    )
                                    .map((adventurer: Adventurer) => {
                                        const isSelected = selectedAdventurers.includes(
                                            adventurer.id,
                                        );
                                        const successRate = calculateIndividualSuccessRate(
                                            adventurer.xp,
                                        );
                                        const salary = calculateSalary(adventurer.xp);

                                        return (
                                            <div
                                                key={adventurer.id}
                                                className={`p-3 rounded border transition-colors ${
                                                    isSelected
                                                        ? "bg-blue-900/30 border-blue-500"
                                                        : "bg-slate-700 border-slate-600 hover:border-slate-500"
                                                }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3 flex-1">
                                                        <input
                                                            type="checkbox"
                                                            checked={isSelected}
                                                            onChange={() =>
                                                                handleAdventurerToggle(
                                                                    adventurer.id,
                                                                )
                                                            }
                                                            className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500"
                                                        />
                                                        <img
                                                            src={adventurerImages[adventurer.type]}
                                                            alt={
                                                                adventurerTypeLabels[
                                                                    adventurer.type
                                                                ]
                                                            }
                                                            className="w-10 h-10 rounded-full border border-slate-600 object-cover bg-slate-800"
                                                        />
                                                        <div className="flex-1">
                                                            <p className="font-medium text-slate-100">
                                                                {adventurer.user?.name ||
                                                                    "Sans nom"}
                                                            </p>
                                                            <p className="text-sm text-slate-400">
                                                                {
                                                                    adventurerTypeLabels[
                                                                        adventurer.type
                                                                    ]
                                                                }{" "}
                                                                • {adventurer.xp.toLocaleString()}{" "}
                                                                XP
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-medium text-green-400">
                                                            Taux: {(successRate * 100).toFixed(1)}%
                                                        </p>
                                                        <p className="text-sm text-slate-400">
                                                            Salaire: {formatCurrency(salary)} 💰
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        ) : manualMode && profils.length > 0 ? (
                            <div className="space-y-2">
                                {getFilteredAdventurers().map((adventurer) => {
                                    const isSelected = selectedAdventurers.includes(adventurer.id);
                                    const successRate = calculateIndividualSuccessRate(
                                        adventurer.xp,
                                    );
                                    const salary = calculateSalary(adventurer.xp);

                                    return (
                                        <div
                                            key={adventurer.id}
                                            className={`p-3 rounded border transition-colors ${
                                                isSelected
                                                    ? "bg-blue-900/30 border-blue-500"
                                                    : "bg-slate-700 border-slate-600 hover:border-slate-500"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 flex-1">
                                                    <input
                                                        type="checkbox"
                                                        checked={isSelected}
                                                        onChange={() =>
                                                            handleAdventurerToggle(adventurer.id)
                                                        }
                                                        className="w-4 h-4 text-blue-600 bg-slate-600 border-slate-500 rounded focus:ring-blue-500"
                                                    />
                                                    <img
                                                        src={adventurerImages[adventurer.type]}
                                                        alt={adventurerTypeLabels[adventurer.type]}
                                                        className="w-10 h-10 rounded-full border border-slate-600 object-cover bg-slate-800"
                                                    />
                                                    <div className="flex-1">
                                                        <p className="font-medium text-slate-100">
                                                            {adventurer.user?.name || "Sans nom"}
                                                        </p>
                                                        <p className="text-sm text-slate-400">
                                                            {adventurerTypeLabels[adventurer.type]}{" "}
                                                            • {adventurer.xp.toLocaleString()} XP
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-medium text-green-400">
                                                        Taux: {(successRate * 100).toFixed(1)}%
                                                    </p>
                                                    <p className="text-sm text-slate-400">
                                                        Salaire: {formatCurrency(salary)} 💰
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="p-6 border border-slate-700 rounded bg-slate-700/50 text-center text-slate-400">
                                <p>
                                    {manualMode
                                        ? "Sélectionnez d'abord les profils requis pour voir les aventuriers disponibles"
                                        : "Aucune suggestion d'aventurier disponible"}
                                </p>
                                {!manualMode && (
                                    <p className="text-sm mt-1">
                                        Remplissez les profils, l'XP requis et les dates pour
                                        obtenir des suggestions
                                    </p>
                                )}
                            </div>
                        )}
                        {errors.adventurers && (
                            <p className="text-red-400 text-sm mt-1">{errors.adventurers}</p>
                        )}
                    </div>
                ) : (
                    <div className="p-6 border border-slate-700 rounded bg-slate-700/50 text-center text-slate-400">
                        <p className="text-lg font-medium">🔒 Sélection verrouillée</p>
                        <p className="text-sm mt-2">
                            Remplissez tous les champs obligatoires (Profils, XP requis, XP gagné,
                            Dates) pour déverrouiller la sélection des aventuriers
                        </p>
                    </div>
                )}

                {/* Statistiques de l'équipe */}
                {selectedAdventurers.length > 0 && xpRequired > 0 && startDate && endDate && (
                    <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/50">
                        <h3 className="text-lg font-semibold text-slate-100 mb-3">
                            📊 Statistiques de l'équipe
                        </h3>
                        {(() => {
                            const teamSalary = calculateTeamSalary();
                            const costRatio =
                                quest.reward > 0 ? (teamSalary / quest.reward) * 100 : 0;

                            return (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="p-3 bg-slate-800/50 rounded">
                                        <p className="text-sm text-slate-400 mb-1">
                                            Taux de réussite global
                                        </p>
                                        <p className="text-2xl font-bold text-green-400">
                                            {calculateTeamSuccessRate().toFixed(1)}%
                                        </p>
                                    </div>
                                    <div className="p-3 bg-slate-800/50 rounded">
                                        <p className="text-sm text-slate-400 mb-1">
                                            Salaire total de l'équipe
                                        </p>
                                        <p className="text-2xl font-bold text-yellow-400">
                                            {formatCurrency(teamSalary)} 💰
                                        </p>
                                    </div>
                                    <div className="p-3 bg-slate-800/50 rounded">
                                        <p className="text-sm text-slate-400 mb-1">
                                            Ratio coût / prime
                                        </p>
                                        <p className="text-2xl font-bold text-orange-400">
                                            {costRatio.toFixed(1)}%
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            {formatCurrency(teamSalary)} /{" "}
                                            {formatCurrency(quest.reward)} 💰
                                        </p>
                                    </div>
                                    <div className="p-3 bg-slate-800/50 rounded">
                                        <p className="text-sm text-slate-400 mb-1">
                                            Nombre d'aventuriers
                                        </p>
                                        <p className="text-2xl font-bold text-blue-400">
                                            {selectedAdventurers.length}
                                        </p>
                                    </div>
                                    <div className="p-3 bg-slate-800/50 rounded">
                                        <p className="text-sm text-slate-400 mb-1">
                                            Durée de la mission
                                        </p>
                                        <p className="text-2xl font-bold text-purple-400">
                                            {getMissionDuration()} jour(s)
                                        </p>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}

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
