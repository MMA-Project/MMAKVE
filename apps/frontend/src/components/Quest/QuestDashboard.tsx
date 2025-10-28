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
                {user.role === "CLIENT" && (
                    <div
                        className="p-4 border border-slate-700 rounded bg-slate-900 flex flex-col gap-3 hover:cursor-pointer hover:bg-slate-800 transition"
                        onClick={() => navigate("/create-quest")}
                    >
                        <div className="flex items-center justify-center gap-2 text-slate-400">
                            <span>+</span>
                            <span>Créer une nouvelle quête</span>
                        </div>
                    </div>
                )}
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
