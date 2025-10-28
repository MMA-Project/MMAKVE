import { useQuest } from "../../api/quest.api";
import { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import { ProgressBar } from "./QuestProgressBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestStatusBanner from "./QuestStatusBanner";
import { computeProgress } from "../../utils/progressBar";
import { DeleteButton } from "../Buttons/DeleteButton";
import { UpdateButton } from "../Buttons/UpdateButton";
import { ValidateButton } from "../Buttons/ValidateButton";
import { useAuth } from "../../context/AuthContext";

type SortBy = "date_limit" | "prime" | "status" | "xp" | "client";

type SortOrder = "asc" | "desc";

export function QuestDashboard() {
    const { getQuests } = useQuest();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [sortBy, setSortBy] = useState<SortBy>("date_limit");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
    const [showFilters, setShowFilters] = useState<boolean>(false);

    // Filtres
    const [minReward, setMinReward] = useState<string>("");
    const [maxReward, setMaxReward] = useState<string>("");
    const [minXp, setMinXp] = useState<string>("");
    const [maxXp, setMaxXp] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [selectedStatus, setSelectedStatus] = useState<QuestStatus | "">("");
    const [clientSearch, setClientSearch] = useState<string>("");

    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <h1 className="text-3xl font-bold">Tableau de bord des quêtes</h1>

            {/* Section de tri */}
            <div className="flex items-center gap-4">
                <label htmlFor="sort" className="text-sm font-medium">
                    Trier par :
                </label>
                <select
                    id="sort"
                    className="p-2 rounded bg-slate-800 text-slate-100"
                    onChange={(e) => {
                        const sortBy = e.target.value;
                        setSortBy(sortBy as SortBy);
                    }}
                >
                    <option value="date_limit">Date limite</option>
                    <option value="prime">Prime</option>
                    <option value="status">Status</option>
                    <option value="xp">XP requis</option>
                    <option value="client">Client</option>
                </select>
                <button
                    id="order"
                    className="p-2 rounded bg-slate-800 text-slate-100"
                    onClick={() => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
                >
                    {sortOrder === "asc" ? "⬆" : "⬇"}
                </button>
            </div>

            {/* Section de filtrage */}
            <div className="w-full max-w-4xl">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-100 transition"
                >
                    <span>{showFilters ? "▼" : "▶"}</span>
                    <span>Filtres avancés</span>
                    {(minReward ||
                        maxReward ||
                        minXp ||
                        maxXp ||
                        startDate ||
                        endDate ||
                        selectedStatus ||
                        clientSearch) && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-blue-600 rounded">Actif</span>
                    )}
                </button>

                {showFilters && (
                    <div className="mt-2 space-y-4 p-4 border border-slate-700 rounded bg-slate-900/50">
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
                                onChange={(e) =>
                                    setSelectedStatus(e.target.value as QuestStatus | "")
                                }
                                className="flex-1 sm:flex-none p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none"
                            >
                                <option value="">Tous les status</option>
                                <option value={QuestStatus.WAITING_APPROVAL}>
                                    En attente d'approbation
                                </option>
                                <option value={QuestStatus.APPROVED}>Approuvé</option>
                                <option value={QuestStatus.IN_PROGRESS}>En cours</option>
                                <option value={QuestStatus.COMPLETED}>Complété</option>
                                <option value={QuestStatus.FAILED}>Échoué</option>
                                <option value={QuestStatus.CANCELED}>Annulé</option>
                            </select>
                        </div>

                        {/* Filtre par client */}
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
                            </div>
                            {/* Bouton de réinitialisation */}
                            {(minReward ||
                                maxReward ||
                                minXp ||
                                maxXp ||
                                startDate ||
                                endDate ||
                                selectedStatus ||
                                clientSearch) && (
                                <button
                                    onClick={() => {
                                        setMinReward("");
                                        setMaxReward("");
                                        setMinXp("");
                                        setMaxXp("");
                                        setStartDate("");
                                        setEndDate("");
                                        setSelectedStatus("");
                                        setClientSearch("");
                                    }}
                                    className="w-full sm:w-auto px-4 py-2 text-sm rounded bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-slate-100 transition whitespace-nowrap"
                                >
                                    Réinitialiser tous les filtres
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full max-w-4xl space-y-4">
                {user.role === "CLIENT" && (
                    <div
                        className="p-4 border border-slate-700 rounded bg-slate-900 flex flex-col gap-3 hover:cursor-pointer hover:bg-slate-800 transition"
                        onClick={() => navigate("/quest/new")}
                    >
                        <div className="flex items-center justify-center gap-2 text-slate-400">
                            <span>+</span>
                            <span>Créer une nouvelle quête</span>
                        </div>
                    </div>
                )}
                {getQuests.data
                    ?.slice()
                    .filter((quest) => {
                        // Filtrage par prime
                        const min = minReward ? parseFloat(minReward) : null;
                        const max = maxReward ? parseFloat(maxReward) : null;
                        if (min !== null && quest.reward < min) return false;
                        if (max !== null && quest.reward > max) return false;

                        // Filtrage par XP requis
                        const minXpValue = minXp ? parseFloat(minXp) : null;
                        const maxXpValue = maxXp ? parseFloat(maxXp) : null;
                        const questXp = quest.options?.xp_required ?? 0;
                        if (minXpValue !== null && questXp < minXpValue) return false;
                        if (maxXpValue !== null && questXp > maxXpValue) return false;

                        // Filtrage par date limite
                        if (startDate) {
                            const start = new Date(startDate);
                            if (quest.deadline < start) return false;
                        }
                        if (endDate) {
                            const end = new Date(endDate);
                            end.setHours(23, 59, 59, 999); // Fin de journée
                            if (quest.deadline > end) return false;
                        }

                        // Filtrage par status
                        if (selectedStatus && quest.status !== selectedStatus) return false;

                        // Filtrage par client
                        if (
                            clientSearch &&
                            !quest.requester.name.toLowerCase().includes(clientSearch.toLowerCase())
                        ) {
                            return false;
                        }

                        return true;
                    })
                    .sort((a, b) => {
                        const compare = (valueA: number | string, valueB: number | string) => {
                            if (sortOrder === "asc") {
                                return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
                            } else {
                                return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
                            }
                        };

                        switch (sortBy) {
                            case "date_limit":
                                return compare(a.deadline.getTime(), b.deadline.getTime());
                            case "prime":
                                return compare(a.reward, b.reward);
                            case "status":
                                return compare(
                                    Object.values(QuestStatus).indexOf(a.status),
                                    Object.values(QuestStatus).indexOf(b.status),
                                );
                            case "xp":
                                return compare(
                                    a.options?.xp_required ?? 0,
                                    b.options?.xp_required ?? 0,
                                );
                            case "client":
                                return compare(a.requester.name, b.requester.name);
                        }
                    })
                    .map((quest) => (
                        <div
                            key={quest.id}
                            className="p-4 border border-slate-700 rounded bg-slate-900 flex flex-col gap-3 hover:cursor-pointer hover:bg-slate-800 transition"
                            onClick={(e) => {
                                if ((e.target as HTMLElement).closest("button")) {
                                    e.stopPropagation();
                                    return;
                                }
                                navigate(`/quest/${quest.id}`);
                            }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold">{quest.title}</h2>
                                    <p className="text-sm text-slate-300 mt-1">
                                        {quest.description}
                                    </p>
                                    <div className="mt-2 text-xs text-slate-400">
                                        <p>Date limite : {quest.deadline.toLocaleDateString()}</p>
                                        <p>Prime : {quest.reward} 💰</p>
                                        {quest.options && (
                                            <p>{quest.options?.xp_required ?? 0} XP requis</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    {quest.status === QuestStatus.WAITING_APPROVAL &&
                                        user.role === "ASSISTANT" && (
                                            <ValidateButton
                                                onClick={() => console.log("validate", quest.id)}
                                            />
                                        )}
                                    {((user.role === "CLIENT" &&
                                        quest.status === QuestStatus.WAITING_APPROVAL) ||
                                        user.role === "ASSISTANT") && (
                                        <UpdateButton
                                            onClick={() => console.log("update", quest.id)}
                                        />
                                    )}
                                    {((user.role === "CLIENT" &&
                                        quest.status === QuestStatus.WAITING_APPROVAL) ||
                                        user.role === "ASSISTANT") && (
                                        <DeleteButton
                                            onClick={() => console.log("delete", quest.id)}
                                        />
                                    )}
                                    <QuestStatusBanner status={quest.status} />
                                </div>
                            </div>
                            {quest.options &&
                                (() => {
                                    const { start, end, percent } = computeProgress(
                                        quest.options.start_date,
                                        quest.options.end_date,
                                    );

                                    return (
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-xs text-slate-400">
                                                <span>Progress</span>
                                                <span className="font-medium text-slate-100">
                                                    {percent}%
                                                </span>
                                            </div>
                                            <ProgressBar percent={percent} quest={quest} />
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
                    ))}
            </div>
        </div>
    );
}
