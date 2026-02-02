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
export const useProcessQuest = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({
            questId,
            data,
        }: {
            questId: string;
            data: QuestProcessingData;
        }): Promise<Quest> => {
            // TODO: Remplacer par un vrai appel API
            // const response = await fetch(`/api/quests/process/${questId}`, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data),
            // });
            // return response.json();

            const quest = mockQuests.find((q) => q.id === questId);
            if (!quest) {
                throw new Error("Quest not found");
            }

            if (!data.approved) {
                quest.status = QuestStatus.REJECTED;
            } else {
                quest.status = QuestStatus.APPROVED;

                // Créer ou mettre à jour les options
                if (!quest.options) {
                    quest.options = {
                        profils: data.profils,
                        start_date: new Date(),
                        end_date: new Date(),
                        xp_required: data.xpRequired,
                        assignments: [],
                    };
                } else {
                    quest.options.profils = data.profils;
                    quest.options.xp_required = data.xpRequired;
                }

                // Créer les assignments pour les aventuriers sélectionnés
                const mockSuggestedAdventurers = [
                    {
                        id: "504",
                        user: {
                            id: "504",
                            name: "Aria Flameheart",
                            role: "ADVENTURER" as const,
                            createdAt: new Date("2025-02-10T10:00:00Z"),
                        },
                        type: AdventurerType.ARCANE_MAGE,
                        status: AdventurerStatus.AVAILABLE,
                        xp: 5500,
                    },
                    {
                        id: "505",
                        user: {
                            id: "505",
                            name: "Brother Cedric",
                            role: "ADVENTURER" as const,
                            createdAt: new Date("2025-04-05T08:20:00Z"),
                        },
                        type: AdventurerType.PRIEST,
                        status: AdventurerStatus.AVAILABLE,
                        xp: 4200,
                    },
                    {
                        id: "506",
                        user: {
                            id: "506",
                            name: "Thrain Ironforge",
                            role: "ADVENTURER" as const,
                            createdAt: new Date("2025-06-12T14:30:00Z"),
                        },
                        type: AdventurerType.BLACKSMITH,
                        status: AdventurerStatus.AVAILABLE,
                        xp: 3800,
                    },
                    {
                        id: "507",
                        user: {
                            id: "507",
                            name: "Lyanna Swiftarrow",
                            role: "ADVENTURER" as const,
                            createdAt: new Date("2025-07-20T11:45:00Z"),
                        },
                        type: AdventurerType.ARCHER,
                        status: AdventurerStatus.AVAILABLE,
                        xp: 6100,
                    },
                    {
                        id: "508",
                        user: {
                            id: "508",
                            name: "Kael Shadowstep",
                            role: "ADVENTURER" as const,
                            createdAt: new Date("2025-08-15T16:10:00Z"),
                        },
                        type: AdventurerType.ROGUE,
                        status: AdventurerStatus.AVAILABLE,
                        xp: 4900,
                    },
                ];

                // Créer les assignments
                quest.options.assignments = data.adventurers.map((adventurerId) => {
                    const adventurer = mockSuggestedAdventurers.find((a) => a.id === adventurerId);
                    return {
                        id: `assignment-${questId}-${adventurerId}`,
                        items: [],
                        adventurer: adventurer || mockSuggestedAdventurers[0],
                    };
                });
            }

            return quest;
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["quests"] });
            queryClient.invalidateQueries({ queryKey: ["quest", variables.questId] });
        },
    });

    return mutation;
};

export const useSuggestAdventurers = (questId: string) => {
    const query = useQuery({
        queryKey: ["quests", "suggest", questId],
        queryFn: async () => {
            // TODO: Remplacer par un vrai appel API
            // const response = await fetch(`/api/quests/suggest/${questId}`);
            // return response.json();

            // Mock data avec des aventuriers suggérés
            const mockSuggestedAdventurers = [
                {
                    id: "504",
                    user: {
                        id: "504",
                        name: "Aria Flameheart",
                        role: "ADVENTURER" as const,
                        createdAt: new Date("2025-02-10T10:00:00Z"),
                    },
                    type: AdventurerType.ARCANE_MAGE,
                    status: AdventurerStatus.AVAILABLE,
                    xp: 5500,
                },
                {
                    id: "505",
                    user: {
                        id: "505",
                        name: "Brother Cedric",
                        role: "ADVENTURER" as const,
                        createdAt: new Date("2025-04-05T08:20:00Z"),
                    },
                    type: AdventurerType.PRIEST,
                    status: AdventurerStatus.AVAILABLE,
                    xp: 4200,
                },
                {
                    id: "506",
                    user: {
                        id: "506",
                        name: "Thrain Ironforge",
                        role: "ADVENTURER" as const,
                        createdAt: new Date("2025-06-12T14:30:00Z"),
                    },
                    type: AdventurerType.BLACKSMITH,
                    status: AdventurerStatus.AVAILABLE,
                    xp: 3800,
                },
                {
                    id: "507",
                    user: {
                        id: "507",
                        name: "Lyanna Swiftarrow",
                        role: "ADVENTURER" as const,
                        createdAt: new Date("2025-07-20T11:45:00Z"),
                    },
                    type: AdventurerType.ARCHER,
                    status: AdventurerStatus.AVAILABLE,
                    xp: 6100,
                },
                {
                    id: "508",
                    user: {
                        id: "508",
                        name: "Kael Shadowstep",
                        role: "ADVENTURER" as const,
                        createdAt: new Date("2025-08-15T16:10:00Z"),
                    },
                    type: AdventurerType.ROGUE,
                    status: AdventurerStatus.AVAILABLE,
                    xp: 4900,
                },
            ];

            return {
                bestTeammates: mockSuggestedAdventurers,
                teamRates: [0.75, 0.68, 0.62, 0.82, 0.71],
                winRate: 0.72,
            };
        },
        enabled: !!questId,
    });

    return query;
};
