import { useQuest } from "../../api/quest.api";
import { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import { ProgressBar } from "./ProgressBar";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

type SortBy = "date_limit" | "prime" | "status" | "xp" | "client";

type SortOrder = "asc" | "desc";

export function Dashboard() {
    const { getQuests } = useQuest();
    const { user } = useAuth();
    const [sortBy, setSortBy] = useState<SortBy>("date_limit");
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <h1 className="text-3xl font-bold">Tableau de bord des quêtes</h1>
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
            <div className="w-full max-w-4xl space-y-4">
                {getQuests.data
                    ?.slice()
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
                                return compare(a.date_limit.getTime(), b.date_limit.getTime());
                            case "prime":
                                return compare(a.prime, b.prime);
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
                                return compare(a.requester_id, b.requester_id);
                        }
                    })
                    .map((quest) => (
                        <div
                            key={quest.id}
                            className="p-4 border border-slate-700 rounded bg-slate-900 flex flex-col gap-3"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold">{quest.title}</h2>
                                    <p className="text-sm text-slate-300 mt-1">
                                        {quest.description}
                                    </p>
                                    <div className="mt-2 text-xs text-slate-400">
                                        <p>Date limite : {quest.date_limit.toLocaleDateString()}</p>
                                        <p>Prime : {quest.prime} 💰</p>
                                        <p>Status : {quest.status.replaceAll("_", " ")}</p>
                                        {quest.options && (
                                            <p>{quest.options?.xp_required ?? 0} XP requis</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    {((user.role === "CLIENT" &&
                                        quest.status === QuestStatus.WAITING_APPROVAL) ||
                                        user.role === "ASSISTANT") && (
                                        <button
                                            aria-label="Edit quest"
                                            title="Edit"
                                            className="p-2 rounded hover:bg-slate-800"
                                            onClick={() => console.log("edit", quest.id)}
                                        >
                                            <svg
                                                className="w-5 h-5 text-slate-200"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.232 5.232l3.536 3.536M4 20h4.586a1 1 0 00.707-.293L19.707 8.293a1 1 0 000-1.414L17.12 4.293a1 1 0 00-1.414 0L5.293 14.707A1 1 0 005 15.414V20z"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                    {((user.role === "CLIENT" &&
                                        quest.status === QuestStatus.WAITING_APPROVAL) ||
                                        user.role === "ASSISTANT") && (
                                        <button
                                            aria-label="Delete quest"
                                            title="Delete"
                                            className="p-2 rounded hover:bg-slate-800"
                                            onClick={() => console.log("delete", quest.id)}
                                        >
                                            <svg
                                                className="w-5 h-5 text-rose-400"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 7L5 7M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12"
                                                />
                                            </svg>
                                        </button>
                                    )}
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
                                            <ProgressBar percent={percent} />
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

const computeProgress = (startDate?: Date, endDate?: Date, nowDate = new Date()) => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    let percent = 0;
    let totalDays: number | null = null;
    let daysLeft: number | null = null;

    if (start && end && !isNaN(start.getTime()) && !isNaN(end.getTime()) && end > start) {
        const totalMs = end.getTime() - start.getTime();
        const elapsedMs = Math.min(Math.max(nowDate.getTime() - start.getTime(), 0), totalMs);
        percent = Math.round((elapsedMs / totalMs) * 100);
        totalDays = Math.max(1, Math.ceil(totalMs / (1000 * 60 * 60 * 24)));
        daysLeft = Math.ceil((end.getTime() - nowDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    return { start, end, percent, totalDays, daysLeft };
};
