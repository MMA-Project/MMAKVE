import { useParams } from "react-router-dom";
import { useQuestById } from "../../api/quest.api";
import { QuestProgressBar } from "./QuestProgressBar";
import { computeProgress } from "../../utils/progressBar";
import ReturnButton from "../Nav/ReturnButton";
import { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import { ValidateButton } from "../Buttons/ValidateButton";
import { UpdateButton } from "../Buttons/UpdateButton";
import { useAuth } from "../../context/AuthContext";
import { AdventurerQuestCard } from "../Adventurer/AdventurerQuestCard";

export default function QuestPage() {
    const { id } = useParams<{ id: string }>();
    const { user } = useAuth();
    const { getQuestById } = useQuestById(id!);
    const quest = getQuestById.data;
    if (!user) return null;
    return (
        <div className="min-h-screen flex flex-col items-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            {quest && (
                <div className="max-w-3xl w-full">
                    <ReturnButton />
                    <div className="absolute flex flex-col top-4 right-4 m-5">
                        {quest.status === QuestStatus.PENDING && user.role === "ASSISTANT" && (
                            <ValidateButton onClick={() => console.log("validate", quest.id)} />
                        )}
                        {((user.role === "CLIENT" && quest.status === QuestStatus.PENDING) ||
                            user.role === "ASSISTANT") && (
                            <UpdateButton onClick={() => console.log("update", quest.id)} />
                        )}
                    </div>
                    <h1 className="text-3xl font-bold">{quest.title}</h1>
                    <p className="text-lg text-slate-300 mt-4">{quest.description}</p>
                    <div className="mt-6 text-sm text-slate-400">
                        <p>Date limite: {quest.deadline?.toLocaleDateString() || "—"}</p>
                        <p>Demandé par: {quest.requester.name}</p>
                        <p>Prime: {quest.reward} 💰</p>
                        {quest.options && <p>XP requis: {quest.options.xp_required ?? 0}</p>}
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
