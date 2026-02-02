import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { type Quest, type QuestCreation } from "../../../../packages/shared/src/types/quest.type";

const API_BASE = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

const getAuthToken = () => localStorage.getItem("auth_token");

export const useQuests = () => {
    const fetchQuests = async (): Promise<Quest[]> => {
        const response = await fetch(`${API_BASE}/quests`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des quêtes");
        }

        return response.json();
    };

    const getQuests = useQuery({
        queryKey: ["quests"],
        queryFn: fetchQuests,
    });

    return getQuests;
};

export const useQuestById = (id: string) => {
    const fetchQuestById = async (questId: string): Promise<Quest | undefined> => {
        const response = await fetch(`${API_BASE}/quests/${questId}`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la quête");
        }

        return response.json();
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
                    Authorization: `Bearer ${getAuthToken()}`,
                },
                body: JSON.stringify(questData),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de la création de la quête");
            }

            return response.json();
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
                headers: {
                    Authorization: `Bearer ${getAuthToken()}`,
                },
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
