import { AdventurerType, Quest, QuestStatus } from "@mmakve/shared";

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
        status: QuestStatus.WAITING_APPROVAL,
        options: {
            profils: [AdventurerType.ENCHANTER, AdventurerType.PRIEST],
            start_date: new Date("2025-10-01T10:00:00Z"),
            end_date: new Date("2025-10-15T23:59:59Z"),
            xp_required: 1200,
            assignments: [],
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
];
