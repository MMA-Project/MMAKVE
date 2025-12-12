import { useNavigate } from "react-router-dom";
import { type Quest, QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import { QuestProgressBar } from "./QuestProgressBar";
import QuestStatusBanner from "./QuestStatusBanner";
import { computeProgress } from "../../utils/progressBar";
import { DeleteButton } from "../Buttons/DeleteButton";
import { UpdateButton } from "../Buttons/UpdateButton";
import { ValidateButton } from "../Buttons/ValidateButton";

interface QuestListProps {
    quests: Quest[] | undefined;
    sortBy: "date_limit" | "prime" | "status" | "xp" | "client";
    sortOrder: "asc" | "desc";
    userRole: string;
}

export function QuestList({ quests, sortBy, sortOrder, userRole }: QuestListProps) {
    const navigate = useNavigate();

    if (!quests || quests.length === 0) {
        return (
            <div className="p-8 border border-slate-700 rounded bg-slate-900/50 flex flex-col items-center justify-center gap-3 text-slate-400">
                <span className="text-4xl">🔍</span>
                <p className="text-lg font-medium">Aucune quête trouvée</p>
                <p className="text-sm">Essayez de modifier vos critères de recherche</p>
            </div>
        );
    }

    const sortedQuests = quests.slice().sort((a, b) => {
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
                return compare(a.options?.xp_required ?? 0, b.options?.xp_required ?? 0);
            case "client":
                return compare(a.requester.name, b.requester.name);
        }
    });

    return (
        <>
            {sortedQuests.map((quest) => (
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
                            <p className="text-sm text-slate-300 mt-1">{quest.description}</p>
                            <div className="mt-2 text-xs text-slate-400">
                                <p>Client : {quest.requester.name}</p>
                                <p>Date limite : {quest.deadline.toLocaleDateString()}</p>
                                <p>Prime : {quest.reward} 💰</p>
                                {quest.options && (
                                    <p>{quest.options?.xp_required ?? 0} XP requis</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            {quest.status === QuestStatus.PENDING && userRole === "ASSISTANT" && (
                                <ValidateButton onClick={() => console.log("validate", quest.id)} />
                            )}
                            {((userRole === "CLIENT" && quest.status === QuestStatus.PENDING) ||
                                userRole === "ASSISTANT") && (
                                <UpdateButton onClick={() => console.log("update", quest.id)} />
                            )}
                            {((userRole === "CLIENT" && quest.status === QuestStatus.PENDING) ||
                                userRole === "ASSISTANT") && (
                                <DeleteButton onClick={() => console.log("delete", quest.id)} />
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
            ))}
        </>
    );
}
