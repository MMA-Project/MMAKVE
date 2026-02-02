import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { type Quest, type QuestCreation } from "../../../../packages/shared/src/types/quest.type";

const API_BASE = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

export const useQuests = () => {
    const fetchQuests = async (): Promise<Quest[]> => {
        const response = await fetch(`${API_BASE}/quests`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des quêtes");
        }

        const data = await response.json();

        // Convertir les strings de dates en objets Date
        return data.map((quest: any) => {
            if (typeof quest.deadline === "string") {
                quest.deadline = new Date(quest.deadline);
            }
            if (quest.options) {
                if (typeof quest.options.start_date === "string") {
                    quest.options.start_date = new Date(quest.options.start_date);
                }
                if (typeof quest.options.end_date === "string") {
                    quest.options.end_date = new Date(quest.options.end_date);
                }
            }
            return quest;
        });
    };

    const getQuests = useQuery({
        queryKey: ["quests"],
        queryFn: fetchQuests,
    });

    return getQuests;
};

export const useQuestById = (id: string) => {
    const fetchQuestById = async (questId: string): Promise<Quest | undefined> => {
        const response = await fetch(`${API_BASE}/quests/${questId}`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la quête");
        }

        const data = await response.json();

        // Convertir les strings de dates en objets Date
        if (data) {
            if (typeof data.deadline === "string") {
                data.deadline = new Date(data.deadline);
            }
            if (data.options) {
                if (typeof data.options.start_date === "string") {
                    data.options.start_date = new Date(data.options.start_date);
                }
                if (typeof data.options.end_date === "string") {
                    data.options.end_date = new Date(data.options.end_date);
                }
            }
        }

        return data;
    };

    const getQuestById = useQuery({
        queryKey: ["quest", id],
        queryFn: () => fetchQuestById(id),
    });

    return { getQuestById };
};

export const useCreateQuest = () => {
    const queryClient = useQueryClient();

    const createQuest = useMutation({
        mutationFn: async (questData: QuestCreation): Promise<Quest> => {
            const response = await fetch(`${API_BASE}/quests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(questData),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de la création de la quête");
            }

            const data = await response.json();

            // Convertir les strings de dates en objets Date
            if (data) {
                if (typeof data.deadline === "string") {
                    data.deadline = new Date(data.deadline);
                }
                if (data.options) {
                    if (typeof data.options.start_date === "string") {
                        data.options.start_date = new Date(data.options.start_date);
                    }
                    if (typeof data.options.end_date === "string") {
                        data.options.end_date = new Date(data.options.end_date);
                    }
                }
            }

            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["quests"] });
        },
    });

    return createQuest;
};

export const useCancelQuest = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (questId: string): Promise<void> => {
            const response = await fetch(`${API_BASE}/quests/${questId}/cancel`, {
                method: "PUT",
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de l'annulation de la quête");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["quests"] });
        },
    });

    return mutation;
};
