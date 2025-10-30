import { useQuery } from "@tanstack/react-query";
import { AdventurerType } from "../../../../packages/shared/src/types/adventurer.type";
import {
    type Quest,
    type QuestCreation,
    QuestStatus,
} from "../../../../packages/shared/src/types/quest.type";

export const mockQuests: Quest[] = [
    {
        id: "1",
        requester: {
            id: "1004",
            name: "Lyria Moonshadow",
            role: "CLIENT",
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
        title: "Retrieve the Azure Gem",
        description:
            "A precious gem was stolen by a band of river raiders. Retrieve it and return it safely.",
        deadline: new Date("2025-10-15T23:59:59Z"),
        reward: 150,
        status: QuestStatus.COMPLETED,
        options: {
            profils: [AdventurerType.ENCHANTER, AdventurerType.PRIEST],
            start_date: new Date("2025-10-01T10:00:00Z"),
            end_date: new Date("2025-10-15T23:59:59Z"),
            xp_required: 1200,
            assignments: [
                {
                    id: "1",
                    items: [],
                    adventurer: {
                        id: "501",
                        user: {
                            id: "501",
                            name: "Elara Swiftwind",
                            role: "ADVENTURER",
                            createdAt: new Date("2024-01-10T09:30:00Z"),
                        },
                        type: AdventurerType.ENCHANTER,
                        status: "available",
                        xp: 2500,
                    },
                },
                {
                    id: "2",
                    items: [],
                    adventurer: {
                        id: "502",
                        user: {
                            id: "502",
                            name: "Thalion the Swift",
                            role: "ADVENTURER",
                            createdAt: new Date("2024-01-12T11:15:00Z"),
                        },
                        type: AdventurerType.ROGUE,
                        status: "available",
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
        title: "Clear the Forgotten Mines",
        description:
            "The old mine tunnels have been infested by earth elementals. Clear them so miners can return.",
        deadline: new Date("2025-10-30T23:59:59Z"),
        reward: 300,
        status: QuestStatus.IN_PROGRESS,
        options: {
            profils: [AdventurerType.BARBARIAN, AdventurerType.PALADIN],
            start_date: new Date("2025-10-25T09:00:00Z"),
            end_date: new Date("2025-10-30T17:00:00Z"),
            xp_required: 2400,
            assignments: [
                {
                    id: "3",
                    items: [],
                    adventurer: {
                        id: "503",
                        user: {
                            id: "503",
                            name: "Gorak Stonefist",
                            role: "ADVENTURER",
                            createdAt: new Date("2024-01-15T14:45:00Z"),
                        },
                        type: AdventurerType.BARBARIAN,
                        status: "available",
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
        title: "Escort the Merchant Caravan",
        description:
            "A caravan needs protection through bandit-prone passes. Ensure all wagons reach the next town.",
        deadline: new Date("2025-12-01T23:59:59Z"),
        reward: 220,
        status: QuestStatus.APPROVED,
        options: {
            profils: [AdventurerType.ROGUE, AdventurerType.WARRIOR, AdventurerType.PRIEST],
            start_date: new Date("2025-11-28T08:00:00Z"),
            end_date: new Date("2025-12-12T20:00:00Z"),
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
        title: "Seal the Rift at Blackfen",
        description:
            "A magical rift is leaking corrupting energies. Seal it before the swamp spreads further.",
        deadline: new Date("2025-11-20T23:59:59Z"),
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
        title: "Rescue the Lost Scouts",
        description:
            "A group of scouts went missing in the Darkwood Forest. Find and rescue them safely.",
        deadline: new Date("2025-10-22T23:59:59Z"),
        reward: 350,
        status: QuestStatus.FAILED,
        options: {
            profils: [AdventurerType.ARCHER, AdventurerType.ROGUE],
            start_date: new Date("2025-10-15T10:00:00Z"),
            end_date: new Date("2025-10-22T23:59:59Z"),
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
        title: "Investigate the Haunted Ruins",
        description:
            "Strange noises and lights have been reported in the old ruins. Investigate the source.",
        deadline: new Date("2025-11-05T23:59:59Z"),
        reward: 400,
        status: QuestStatus.PENDING,
    },
];

export const useQuest = () => {
    const fetchQuests = async (): Promise<Quest[]> => {
        return mockQuests;
    };

    const getQuests = useQuery({
        queryKey: ["quests"],
        queryFn: fetchQuests,
        initialData: mockQuests,
    });

    return { getQuests };
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
