import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    AdventurerStatus,
    AdventurerType,
} from "../../../../packages/shared/src/types/adventurer.type";
import {
    ItemName,
    ItemType,
    ItemRarity,
    ItemStatus,
} from "../../../../packages/shared/src/types/item.type";
import {
    type Quest,
    type QuestCreation,
    QuestStatus,
    type QuestProcessingData,
} from "../../../../packages/shared/src/types/quest.type";
import { type Role } from "../../../../packages/shared/src/types/user.type";

export const mockQuests: Quest[] = [
    {
        id: "1",
        requester: {
            id: "1004",
            name: "Lyria Moonshadow",
            role: "CLIENT" as Role,
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
        title: "Récupérer le joyau azur",
        description:
            "Une gemme précieuse a été volée par une bande de pillards des rivières. Récupérez-la et ramenez-la en sécurité.",
        deadline: new Date("2026-01-15T23:59:59Z"),
        reward: 150,
        status: QuestStatus.COMPLETED,
        options: {
            profils: [AdventurerType.ENCHANTER, AdventurerType.PRIEST],
            start_date: new Date("2026-01-01T10:00:00Z"),
            end_date: new Date("2026-01-15T23:59:59Z"),
            xp_required: 1200,
            assignments: [
                {
                    id: "1",
                    items: [
                        {
                            id: "301",
                            name: ItemName.STAFF,
                            description: "Un bâton enchanté imprégné d'énergie arcanique.",
                            durability: 95,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 450,
                            type: ItemType.WEAPON,
                            rarity: ItemRarity.RARE,
                            profiles: [AdventurerType.ENCHANTER, AdventurerType.ARCANE_MAGE],
                            status: ItemStatus.IN_USE,
                            questId: "1",
                        },
                        {
                            id: "302",
                            name: ItemName.ARMOR,
                            description:
                                "Des robes de protection épiques tissées pour résister à la magie.",
                            durability: 88,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 780,
                            type: ItemType.ARMOR,
                            rarity: ItemRarity.EPIC,
                            profiles: [AdventurerType.ENCHANTER],
                            status: ItemStatus.IN_USE,
                            questId: "1",
                        },
                        {
                            id: "304",
                            name: ItemName.HEALING_POTION,
                            description: "Un puissant élixir de soin.",
                            quantity: 3,
                            isConsumable: true,
                            price: 50,
                            type: ItemType.POTION,
                            rarity: ItemRarity.UNCOMMON,
                            profiles: [],
                            status: ItemStatus.IN_USE,
                            questId: "1",
                        },
                        {
                            id: "305",
                            name: ItemName.MAGIC_RING,
                            description:
                                "Un anneau légendaire qui amplifie les capacités magiques.",
                            durability: 100,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 1200,
                            type: ItemType.MISC,
                            rarity: ItemRarity.LEGENDARY,
                            profiles: [AdventurerType.ENCHANTER, AdventurerType.ARCANE_MAGE],
                            status: ItemStatus.IN_USE,
                            questId: "1",
                        },
                        {
                            id: "306",
                            name: ItemName.HELMET,
                            description: "Un casque mystique doté d'enchantements protecteurs.",
                            durability: 92,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 320,
                            type: ItemType.ARMOR,
                            rarity: ItemRarity.RARE,
                            profiles: [],
                            status: ItemStatus.IN_USE,
                            questId: "1",
                        },
                    ],
                    adventurer: {
                        id: "501",
                        user: {
                            id: "501",
                            name: "Elara Swiftwind",
                            role: "ADVENTURER",
                            createdAt: new Date("2025-01-10T09:30:00Z"),
                        },
                        type: AdventurerType.ENCHANTER,
                        status: AdventurerStatus.AVAILABLE,
                        xp: 112500,
                    },
                },
                {
                    id: "2",
                    items: [
                        {
                            id: "303",
                            name: ItemName.DAGGER,
                            description: "Une dague empoisonnée parfaite pour les attaques furtives.",
                            durability: 78,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 280,
                            type: ItemType.WEAPON,
                            rarity: ItemRarity.RARE,
                            profiles: [AdventurerType.ROGUE],
                            status: ItemStatus.IN_USE,
                            questId: "2",
                        },
                        {
                            id: "307",
                            name: ItemName.BOW,
                            description: "Une arbalète silencieuse pour la précision à distance.",
                            durability: 85,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 340,
                            type: ItemType.WEAPON,
                            rarity: ItemRarity.UNCOMMON,
                            profiles: [AdventurerType.ROGUE, AdventurerType.ARCHER],
                            status: ItemStatus.IN_USE,
                            questId: "2",
                        },
                        {
                            id: "308",
                            name: ItemName.HEALING_POTION,
                            description: "Potion de soin d'urgence.",
                            quantity: 2,
                            isConsumable: true,
                            price: 50,
                            type: ItemType.POTION,
                            rarity: ItemRarity.COMMON,
                            profiles: [],
                            status: ItemStatus.IN_USE,
                            questId: "2",
                        },
                    ],
                    adventurer: {
                        id: "502",
                        user: {
                            id: "502",
                            name: "Thalion the Swift",
                            role: "ADVENTURER",
                            createdAt: new Date("2025-03-12T11:15:00Z"),
                        },
                        type: AdventurerType.ROGUE,
                        status: AdventurerStatus.INJURED,
                        xp: 3000,
                    },
                },
            ],
        },
    },
    {
        id: "2",
        requester: {
            id: "1004",
            name: "Lyria Moonshadow",
            role: "CLIENT",
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
        title: "Nettoyer les Mines Oubliées",
        description:
            "Les anciens tunnels de la mine ont été infestés par des élémentaires de terre. Nettoyez-les pour que les mineurs puissent revenir.",
        deadline: new Date("2026-02-15T23:59:59Z"),
        reward: 300,
        status: QuestStatus.IN_PROGRESS,
        options: {
            profils: [AdventurerType.BARBARIAN, AdventurerType.PALADIN],
            start_date: new Date("2026-01-25T09:00:00Z"),
            end_date: new Date("2026-02-15T17:00:00Z"),
            xp_required: 2400,
            assignments: [
                {
                    id: "3",
                    items: [
                        {
                            id: "309",
                            name: ItemName.AXE,
                            description: "Une hache de bataille massive forgée pour la destruction.",
                            durability: 92,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 420,
                            type: ItemType.WEAPON,
                            rarity: ItemRarity.EPIC,
                            profiles: [AdventurerType.BARBARIAN, AdventurerType.WARRIOR],
                            status: ItemStatus.IN_USE,
                            questId: "2",
                        },
                        {
                            id: "310",
                            name: ItemName.SHIELD,
                            description: "Un bouclier renforcé pour les combats intenses.",
                            durability: 88,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 250,
                            type: ItemType.ARMOR,
                            rarity: ItemRarity.UNCOMMON,
                            profiles: [AdventurerType.BARBARIAN, AdventurerType.PALADIN],
                            status: ItemStatus.IN_USE,
                            questId: "2",
                        },
                        {
                            id: "311",
                            name: ItemName.HEALING_POTION,
                            description: "Une potion réparatrice pour les blessures de bataille.",
                            quantity: 5,
                            isConsumable: true,
                            price: 50,
                            type: ItemType.POTION,
                            rarity: ItemRarity.COMMON,
                            profiles: [],
                            status: ItemStatus.IN_USE,
                            questId: "2",
                        },
                        {
                            id: "312",
                            name: ItemName.HELMET,
                            description: "Un solide casque de fer pour la protection.",
                            durability: 95,
                            maxDurability: 100,
                            isConsumable: false,
                            price: 180,
                            type: ItemType.ARMOR,
                            rarity: ItemRarity.COMMON,
                            profiles: [],
                            status: ItemStatus.IN_USE,
                            questId: "2",
                        },
                    ],
                    adventurer: {
                        id: "503",
                        user: {
                            id: "503",
                            name: "Gorak Stonefist",
                            role: "ADVENTURER",
                            createdAt: new Date("2025-05-15T14:45:00Z"),
                        },
                        type: AdventurerType.BARBARIAN,
                        status: AdventurerStatus.ON_QUEST,
                        xp: 2800,
                    },
                },
            ],
        },
    },
    {
        id: "3",
        requester: {
            id: "1004",
            name: "Lyria Moonshadow",
            role: "CLIENT",
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
        title: "Escorter la caravane marchande",
        description:
            "Une caravane a besoin de protection à travers des cols infestés de bandits. Assurez-vous que tous les chariots atteignent la prochaine ville.",
        deadline: new Date("2026-03-15T23:59:59Z"),
        reward: 220,
        status: QuestStatus.APPROVED,
        options: {
            profils: [AdventurerType.ROGUE, AdventurerType.WARRIOR, AdventurerType.PRIEST],
            start_date: new Date("2026-03-10T08:00:00Z"),
            end_date: new Date("2026-03-15T20:00:00Z"),
            xp_required: 1800,
            assignments: [],
        },
    },
    {
        id: "4",
        requester: {
            id: "1004",
            name: "Lyria Moonshadow",
            role: "CLIENT",
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
        title: "Sceller la faille de Blackfen",
        description:
            "Une faille magique laisse s'échapper des énergies corruptrices. Scellez-la avant que le marais ne s'étende davantage.",
        deadline: new Date("2026-02-20T23:59:59Z"),
        reward: 500,
        status: QuestStatus.PENDING,
    },
    {
        id: "5",
        requester: {
            id: "1005",
            name: "Darian Stormrider",
            role: "CLIENT",
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
        title: "Sauver les éclaireurs perdus",
        description:
            "Un groupe d'éclaireurs a disparu dans la forêt de Darkwood. Retrouvez-les et ramenez-les sains et saufs.",
        deadline: new Date("2026-01-22T23:59:59Z"),
        reward: 350,
        status: QuestStatus.FAILED,
        options: {
            profils: [AdventurerType.ARCHER, AdventurerType.ROGUE],
            start_date: new Date("2026-01-15T10:00:00Z"),
            end_date: new Date("2026-01-22T23:59:59Z"),
            xp_required: 1500,
            assignments: [],
        },
    },
    {
        id: "6",
        requester: {
            id: "1005",
            name: "Darian Stormrider",
            role: "CLIENT",
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
        title: "Enquêter sur les ruines hantées",
        description:
            "Des bruits et des lumières étranges ont été signalés dans les anciennes ruines. Enquêtez sur leur origine.",
        deadline: new Date("2026-03-05T23:59:59Z"),
        reward: 400,
        status: QuestStatus.PENDING,
    },
];

export const useQuests = () => {
    const fetchQuests = async (): Promise<Quest[]> => {
        return mockQuests;
    };

    const getQuests = useQuery({
        queryKey: ["quests"],
        queryFn: fetchQuests,
        initialData: mockQuests,
    });

    return getQuests;
};

export const useQuestById = (id: string) => {
    const fetchQuestById = async (questId: string): Promise<Quest | undefined> => {
        return mockQuests.find((quest) => quest.id === questId);
    };
    const getQuestById = useQuery({
        queryKey: ["quest", id],
        queryFn: () => fetchQuestById(id),
        initialData: () => mockQuests.find((quest) => quest.id === id),
    });
    return { getQuestById };
};

export const useCreateQuest = () => {
    const createQuest = async (questData: QuestCreation): Promise<Quest> => {
        const newQuest: Quest = {
            id: (mockQuests.length + 1).toString(),
            status: QuestStatus.PENDING,
            ...questData,
        };
        mockQuests.push(newQuest);
        return newQuest;
    };

    return { createQuest };
};

export const useCancelQuest = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (questId: string): Promise<void> => {
            const quest = mockQuests.find((q) => q.id === questId);
            if (quest) {
                quest.status = QuestStatus.CANCELED;
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
