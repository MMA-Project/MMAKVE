import { useQuests } from "../../api/quest.api";
import { formatCurrency } from "../../utils/currency";
import { QuestStatus, type Quest } from "../../../../../packages/shared/src/types/quest.type";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

interface PredictionPoint {
    date: string;
    dateObj: Date;
    optimistic: number;
    pessimistic: number;
    realistic: number;
}

export function BankPrediction({ currentBalance }: { currentBalance: number }) {
    const { data: allQuests = [] } = useQuests();

    // Filtrer les quêtes approuvées et en cours
    const activeQuests = allQuests.filter(
        (quest) =>
            quest.status === QuestStatus.APPROVED || quest.status === QuestStatus.IN_PROGRESS,
    );

    if (activeQuests.length === 0) {
        return (
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="text-2xl">📈</span> Prédictions de solde
                </h2>
                <div className="text-center py-8">
                    <p className="text-slate-400">
                        Aucune quête active. Les prédictions apparaîtront quand des quêtes seront en
                        cours.
                    </p>
                </div>
            </div>
        );
    }

    // Calculer les prédictions
    const predictions = generatePredictions(currentBalance, activeQuests);

    // Calculer les min/max pour rescaler dynamiquement
    const allValues = predictions.flatMap((p) => [p.optimistic, p.pessimistic, p.realistic]);
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const padding = (maxValue - minValue) * 0.1; // 10% de padding

    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-2xl">📈</span> Prédictions de solde
            </h2>

            {/* Graphique */}
            <div className="mb-8 bg-slate-900/50 p-4 rounded border border-slate-700">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={predictions}>
                        <defs>
                            <linearGradient id="colorOptimistic" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorRealistic" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#eab308" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPessimistic" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                        <XAxis dataKey="date" stroke="#94a3b8" style={{ fontSize: "12px" }} />
                        <YAxis
                            stroke="#94a3b8"
                            style={{ fontSize: "12px" }}
                            domain={[minValue - padding, maxValue + padding]}
                            tickFormatter={(value) => {
                                if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                                if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
                                return value.toFixed(0);
                            }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1e293b",
                                border: "1px solid #475569",
                                borderRadius: "8px",
                            }}
                            labelStyle={{ color: "#e2e8f0" }}
                            formatter={(value: number) => formatCurrency(value)}
                            labelFormatter={(label) => `Date: ${label}`}
                        />
                        <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
                        <Line
                            type="monotone"
                            dataKey="pessimistic"
                            stroke="#ef4444"
                            strokeWidth={3}
                            dot={{ fill: "#ef4444", r: 4 }}
                            activeDot={{ r: 6 }}
                            name="Pessimiste (0% réussite)"
                            isAnimationActive={true}
                        />
                        <Line
                            type="monotone"
                            dataKey="realistic"
                            stroke="#eab308"
                            strokeWidth={3}
                            dot={{ fill: "#eab308", r: 4 }}
                            activeDot={{ r: 6 }}
                            name="Réaliste (80% réussite)"
                            isAnimationActive={true}
                        />
                        <Line
                            type="monotone"
                            dataKey="optimistic"
                            stroke="#22c55e"
                            strokeWidth={3}
                            dot={{ fill: "#22c55e", r: 4 }}
                            activeDot={{ r: 6 }}
                            name="Optimiste (100% réussite)"
                            isAnimationActive={true}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Résumé */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-900/20 p-4 rounded border border-red-700/30">
                    <p className="text-xs text-red-400 uppercase font-semibold mb-2">Pessimiste</p>
                    <p className="text-2xl font-bold text-red-400">
                        {formatCurrency(predictions[predictions.length - 1]?.pessimistic || 0)}
                    </p>
                    <p className="text-xs text-red-500/70 mt-1">
                        {formatCurrency(
                            (predictions[predictions.length - 1]?.pessimistic || 0) -
                                currentBalance,
                        )}{" "}
                        vs actuel
                    </p>
                </div>
                <div className="bg-yellow-900/20 p-4 rounded border border-yellow-700/30">
                    <p className="text-xs text-yellow-400 uppercase font-semibold mb-2">Réaliste</p>
                    <p className="text-2xl font-bold text-yellow-400">
                        {formatCurrency(predictions[predictions.length - 1]?.realistic || 0)}
                    </p>
                    <p className="text-xs text-yellow-500/70 mt-1">
                        {formatCurrency(
                            (predictions[predictions.length - 1]?.realistic || 0) - currentBalance,
                        )}{" "}
                        vs actuel
                    </p>
                </div>
                <div className="bg-green-900/20 p-4 rounded border border-green-700/30">
                    <p className="text-xs text-green-400 uppercase font-semibold mb-2">Optimiste</p>
                    <p className="text-2xl font-bold text-green-400">
                        {formatCurrency(predictions[predictions.length - 1]?.optimistic || 0)}
                    </p>
                    <p className="text-xs text-green-500/70 mt-1">
                        {formatCurrency(
                            (predictions[predictions.length - 1]?.optimistic || 0) - currentBalance,
                        )}{" "}
                        vs actuel
                    </p>
                </div>
            </div>
        </div>
    );
}

function generatePredictions(currentBalance: number, quests: Quest[]): PredictionPoint[] {
    const predictions: PredictionPoint[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Générer des points de prédiction pour chaque jour sur 30 jours
    for (let dayOffset = 0; dayOffset <= 30; dayOffset++) {
        const predictionDate = new Date(today);
        predictionDate.setDate(predictionDate.getDate() + dayOffset);
        predictionDate.setHours(0, 0, 0, 0);

        // Partir du solde actuel
        let optimisticTotal = currentBalance;
        let pessimisticTotal = currentBalance;
        let realisticTotal = currentBalance;

        // Pour chaque quête, calculer l'impact sur le solde
        quests.forEach((quest: Quest) => {
            const acompte = quest.reward * 0.2; // 20% acompte
            const rewardFinal = quest.reward * 0.8; // 80% récompense finale
            const adventurerPayment = calculateAventurerPayment(quest, 1);

            const isApproved = quest.status === "APPROVED";
            const isInProgress = quest.status === "IN_PROGRESS";

            // Récupérer les dates de la quête
            let startDate = quest.options?.start_date ? new Date(quest.options.start_date) : null;
            let endDate = quest.options?.end_date ? new Date(quest.options.end_date) : null;

            // Estimation des dates si null
            if (!startDate && isApproved) {
                startDate = new Date(today);
                startDate.setDate(startDate.getDate() + 2);
            }

            if (startDate && !endDate) {
                endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + 10);
            }

            if (startDate) startDate.setHours(0, 0, 0, 0);
            if (endDate) endDate.setHours(0, 0, 0, 0);

            // === ACCOMPTE (20%) à la START_DATE ===
            // Seulement pour APPROVED (car IN_PROGRESS a déjà reçu l'acompte)
            if (isApproved && startDate && startDate <= predictionDate) {
                optimisticTotal += acompte;
                pessimisticTotal += acompte;
                realisticTotal += acompte;
            }

            // === RÉCOMPENSE FINALE (80%) ou SALAIRE à la END_DATE ===
            if (endDate && endDate <= predictionDate) {
                // OPTIMISTE : 100% de réussite → on reçoit la récompense finale
                optimisticTotal += rewardFinal;

                // PESSIMISTE : 100% d'échec → on paye le salaire des aventuriers (pénalité)
                pessimisticTotal -= adventurerPayment;

                // RÉALISTE : 80% de réussite, 20% d'échec
                realisticTotal += rewardFinal * 0.8; // 80% de chance de recevoir la récompense
                realisticTotal -= adventurerPayment * 0.2; // 20% de chance de payer le salaire
            }
        });

        const dateStr = predictionDate.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
        });

        predictions.push({
            date: dateStr,
            dateObj: predictionDate,
            optimistic: Math.round(optimisticTotal * 100) / 100,
            pessimistic: Math.round(pessimisticTotal * 100) / 100,
            realistic: Math.round(realisticTotal * 100) / 100,
        });
    }

    return predictions;
}

function calculateAventurerPayment(quest: Quest, durationDays: number): number {
    const JBASE = 3; // Taux de base journalier

    // Calculer le taux journalier d'un aventurier en fonction de son XP
    const calculateDailyRate = (adventurerXp: number): number => {
        if (adventurerXp <= 0) return JBASE;
        return JBASE * (1 + 0.5 * Math.log10(adventurerXp));
    };

    // Calculer la durée de la mission
    let duration = durationDays;
    if (quest.options?.start_date && quest.options?.end_date) {
        const start = new Date(quest.options.start_date);
        const end = new Date(quest.options.end_date);
        duration = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    }

    // Calculer le salaire total de tous les aventuriers assignés
    let totalSalary = 0;
    if (quest.options?.assignments && quest.options.assignments.length > 0) {
        quest.options.assignments.forEach((assignment) => {
            if (assignment.adventurer) {
                const dailyRate = calculateDailyRate(assignment.adventurer.xp);
                const adventurerSalary = Math.round(dailyRate * duration * 100) / 100;
                totalSalary += adventurerSalary;
            }
        });
    } else {
        // Si aucun aventurier assigné, estimer avec un aventurier moyen
        const avgDailyRate = JBASE * (1 + 0.5 * Math.log10(1000)); // ~1000 XP moyen
        totalSalary = Math.round(avgDailyRate * duration * 100) / 100;
    }

    return totalSalary;
}
