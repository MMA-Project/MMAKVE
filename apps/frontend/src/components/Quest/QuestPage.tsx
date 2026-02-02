import { useParams } from "react-router-dom";
import {
    useQuestById,
    useProcessQuest,
    useStartQuest,
    useCompleteQuestSuccess,
    useCompleteQuestFail,
} from "../../api/quest.api";
import { QuestProgressBar } from "./QuestProgressBar";
import { computeProgress } from "../../utils/progressBar";
import ReturnButton from "../Nav/ReturnButton";
import { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import { ValidateButton } from "../Buttons/ValidateButton";
import { UpdateButton } from "../Buttons/UpdateButton";
import { CancelButton } from "../Buttons/CancelButton";
import { StartButton } from "../Buttons/StartButton";
import { SuccessButton } from "../Buttons/SuccessButton";
import { FailButton } from "../Buttons/FailButton";
import { useAuth } from "../../context/AuthContext";
import { AdventurerQuestCard } from "../Adventurer/AdventurerQuestCard";
import AssistantQuestProcessingForm from "./AssistantQuestProcessingForm";
import { useState } from "react";
import { LoadingState, ErrorState, EmptyState } from "../common";
import QuestStatusBanner from "./QuestStatusBanner";
import { formatCurrency } from "../../utils/currency";

export default function QuestPage() {
    const { id } = useParams<{ id: string }>();
    const { user } = useAuth();
    const { getQuestById } = useQuestById(id!);
    const quest = getQuestById.data;
    const [showProcessingForm, setShowProcessingForm] = useState(false);
    const processQuestMutation = useProcessQuest();
    const startQuestMutation = useStartQuest();
    const completeSuccessMutation = useCompleteQuestSuccess();
    const completeFailMutation = useCompleteQuestFail();
    if (!user) return null;

    if (getQuestById.isLoading) {
        return <LoadingState message="Chargement de la quête..." />;
    }

    if (getQuestById.isError) {
        const errorMessage =
            getQuestById.error instanceof Error
                ? getQuestById.error.message
                : "Une erreur est survenue.";
        return <ErrorState title="Impossible de charger la quête" message={errorMessage} />;
    }

    if (!quest) {
        return (
            <EmptyState
                title="Quête introuvable"
                message="Cette quête n'existe pas ou n'est plus disponible."
            />
        );
    }

    if (showProcessingForm && quest) {
        const initialData = quest.options
            ? {
                  profils: quest.options.profils || [],
                  xpRequired: quest.options.xp_required || 0,
                  xpGained: 0,
                  adventurers: quest.options.assignments?.map((a) => a.adventurer.id) || [],
                  approved: true,
              }
            : undefined;

        return (
            <div className="min-h-screen flex flex-col items-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
                <div className="max-w-3xl w-full">
                    <ReturnButton />
                    <div className="mt-6">
                        <AssistantQuestProcessingForm
                            questId={quest.id}
                            quest={quest}
                            initialData={initialData}
                            onSubmit={(data) => {
                                processQuestMutation.mutate(
                                    { questId: quest.id, data },
                                    {
                                        onSuccess: () => {
                                            setShowProcessingForm(false);
                                        },
                                    },
                                );
                            }}
                            onCancel={() => setShowProcessingForm(false)}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            {quest && (
                <div className="max-w-3xl w-full">
                    <ReturnButton />
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-3xl font-bold">{quest.title}</h1>
                        <QuestStatusBanner status={quest.status} />
                        <div className="flex gap-2 ml-auto">
                            {quest.status === QuestStatus.PENDING && user.role === "ASSISTANT" && (
                                <ValidateButton onClick={() => setShowProcessingForm(true)} />
                            )}
                            {quest.status === QuestStatus.PENDING && user.role === "ASSISTANT" && (
                                <CancelButton
                                    onClick={() => {
                                        if (
                                            window.confirm(
                                                "Êtes-vous sûr de vouloir rejeter cette demande ?",
                                            )
                                        ) {
                                            processQuestMutation.mutate({
                                                questId: quest.id,
                                                data: {
                                                    profils: [],
                                                    xpRequired: 0,
                                                    xpGained: 0,
                                                    adventurers: [],
                                                    approved: false,
                                                },
                                            });
                                        }
                                    }}
                                />
                            )}
                            {user.role === "CLIENT" && quest.status === QuestStatus.PENDING && (
                                <UpdateButton onClick={() => setShowProcessingForm(true)} />
                            )}
                            {quest.status === QuestStatus.APPROVED && user.role === "ASSISTANT" && (
                                <StartButton
                                    onClick={() => {
                                        if (
                                            window.confirm(
                                                "Êtes-vous sûr de vouloir démarrer cette quête ?",
                                            )
                                        ) {
                                            startQuestMutation.mutate(quest.id);
                                        }
                                    }}
                                />
                            )}
                            {quest.status === QuestStatus.IN_PROGRESS &&
                                user.role === "ASSISTANT" && (
                                    <>
                                        <SuccessButton
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        "Marquer cette quête comme réussie ? Les aventuriers recevront leur paiement complet et l'XP.",
                                                    )
                                                ) {
                                                    completeSuccessMutation.mutate(quest.id);
                                                }
                                            }}
                                        />
                                        <FailButton
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        "Marquer cette quête comme échouée ? Les aventuriers recevront 60% de leur paiement et aucune XP.",
                                                    )
                                                ) {
                                                    completeFailMutation.mutate(quest.id);
                                                }
                                            }}
                                        />
                                    </>
                                )}
                        </div>
                    </div>
                    <p className="text-lg text-slate-300 mt-4">{quest.description}</p>

                    {/* Section mise en avant: XP Requis, XP Reward et Prime */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                        {/* XP Requis */}
                        <div className="p-4 bg-purple-900/40 rounded-lg border-2 border-purple-500 shadow-lg shadow-purple-500/20">
                            <p className="text-sm text-purple-300 uppercase tracking-wider font-semibold">
                                XP Requis
                            </p>
                            <p className="text-3xl font-bold text-purple-200 mt-2">
                                {quest.options?.xp_required
                                    ? quest.options.xp_required.toLocaleString()
                                    : "—"}
                            </p>
                            <p className="text-xs text-purple-400 mt-1">⭐ Difficulté minimale</p>
                        </div>

                        {/* XP Reward */}
                        <div className="p-4 bg-green-900/40 rounded-lg border-2 border-green-500 shadow-lg shadow-green-500/20">
                            <p className="text-sm text-green-300 uppercase tracking-wider font-semibold">
                                XP Récompense
                            </p>
                            <p className="text-3xl font-bold text-green-200 mt-2">
                                {quest.options?.xp_reward && quest.options.xp_reward > 0
                                    ? quest.options.xp_reward.toLocaleString()
                                    : "—"}
                            </p>
                            <p className="text-xs text-green-400 mt-1">🎖️ Expérience gagnée</p>
                        </div>

                        {/* Prime (conditionnelle) */}
                        {quest.reward > 0 && (
                            <div className="p-4 bg-yellow-900/40 rounded-lg border-2 border-yellow-500 shadow-lg shadow-yellow-500/20">
                                <p className="text-sm text-yellow-300 uppercase tracking-wider font-semibold">
                                    Prime
                                </p>
                                <p className="text-3xl font-bold text-yellow-200 mt-2">
                                    {formatCurrency(quest.reward)}
                                </p>
                                <p className="text-xs text-yellow-400 mt-1">💰 Paiement</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-6 text-sm text-slate-400 space-y-2">
                        <p>Date limite: {quest.deadline?.toLocaleDateString() || "—"}</p>
                        <p>Demandé par: {quest.requester?.name}</p>
                        {quest.options &&
                            (() => {
                                const { start, end, percent } = computeProgress(
                                    quest.options.start_date,
                                    quest.options.end_date,
                                );

                                return (
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-xs text-slate-400">
                                            <span>Progression</span>
                                            <span className="font-medium text-slate-100">
                                                {percent}%
                                            </span>
                                        </div>
                                        <QuestProgressBar percent={percent} quest={quest} />
                                        <div className="flex items-center justify-between text-xs text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-0.5 bg-slate-800 rounded">
                                                    {start ? start.toLocaleDateString() : "—"}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <span className="px-2 py-0.5 bg-slate-800 rounded">
                                                    {end ? end.toLocaleDateString() : "—"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
                    </div>

                    {/* Statistiques de l'équipe */}
                    {quest.options?.assignments && quest.options.assignments.length > 0 && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/50">
                            <h3 className="text-lg font-semibold text-slate-100 mb-3">
                                📊 Statistiques de l'équipe
                            </h3>
                            {(() => {
                                const JBASE = 3;
                                const startDate = quest.options?.start_date;
                                const endDate = quest.options?.end_date;

                                // Calcul de la durée en jours
                                const getMissionDuration = (): number => {
                                    if (!startDate || !endDate) return 0;
                                    const start = new Date(startDate);
                                    const end = new Date(endDate);
                                    const diffTime = Math.abs(end.getTime() - start.getTime());
                                    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                                };

                                // Calcul du taux journalier
                                const calculateDailyRate = (adventurerXp: number): number => {
                                    if (adventurerXp <= 0) return JBASE;
                                    return JBASE * (1 + 0.5 * Math.log10(adventurerXp));
                                };

                                // Calcul du salaire
                                const calculateSalary = (adventurerXp: number): number => {
                                    const duration = getMissionDuration();
                                    const dailyRate = calculateDailyRate(adventurerXp);
                                    return Math.round(dailyRate * duration * 100) / 100;
                                };

                                // Calcul du taux de réussite individuel
                                const calculateIndividualSuccessRate = (
                                    adventurerXp: number,
                                ): number => {
                                    const xpRequired = quest.options?.xp_required || 0;
                                    if (xpRequired <= 0) return 0;
                                    return Math.min(adventurerXp, xpRequired) / xpRequired;
                                };

                                // Calcul du taux de réussite global
                                const calculateTeamSuccessRate = (): number => {
                                    const assignments = quest.options?.assignments || [];
                                    if (assignments.length === 0) return 0;

                                    const sumIndividualRates = assignments.reduce(
                                        (sum, assignment) => {
                                            return (
                                                sum +
                                                calculateIndividualSuccessRate(
                                                    assignment.adventurer.xp,
                                                )
                                            );
                                        },
                                        0,
                                    );

                                    return Math.min(100, 0.8 * sumIndividualRates * 100);
                                };

                                // Calcul du salaire total
                                const teamSalary = quest.options.assignments.reduce(
                                    (sum, assignment) => {
                                        return sum + calculateSalary(assignment.adventurer.xp);
                                    },
                                    0,
                                );

                                const costRatio =
                                    quest.reward > 0 ? (teamSalary / quest.reward) * 100 : 0;
                                const duration = getMissionDuration();

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
                                                {quest.options.assignments.length}
                                            </p>
                                        </div>
                                        <div className="p-3 bg-slate-800/50 rounded">
                                            <p className="text-sm text-slate-400 mb-1">
                                                Durée de la mission
                                            </p>
                                            <p className="text-2xl font-bold text-purple-400">
                                                {duration} jour(s)
                                            </p>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    )}

                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-4">Aventuriers assignés</h2>
                        {quest.options?.assignments.length ? (
                            <ul className="space-y-3">
                                {quest.options.assignments.map((assignment) => (
                                    <AdventurerQuestCard
                                        key={assignment.id}
                                        adventurer={assignment.adventurer}
                                        items={assignment.items}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <div className="p-6 border border-slate-700 rounded-lg bg-slate-800/50 flex flex-col items-center justify-center gap-2 text-slate-400">
                                <span className="text-3xl">👥</span>
                                <p>Aucun aventurier assigné à cette quête</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
