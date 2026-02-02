import { AdventurerStatus, AdventurerType, Quest, QuestStatus } from "@mmakve/shared";

export const mockQuests: Quest[] = [
    {
        id: "1",
        requester: {
            id: "1004",
            name: "Lyria Moonshadow",
            role: "CLIENT",
            createdAt: new Date("2024-02-20T12:00:00Z"),
        },
        title: "Récupérer le joyau azur",
        description:
            "Une gemme précieuse a été volée par une bande de pillards des rivières. Récupérez-la et ramenez-la en sécurité.",
        deadline: new Date("2025-10-15T23:59:59Z"),
        reward: 150,
        status: QuestStatus.PENDING,
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
        title: "Nettoyer les Mines Oubliées",
        description:
            "Les anciens tunnels de la mine ont été infestés par des élémentaires de terre. Nettoyez-les pour que les mineurs puissent revenir.",
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
                        status: AdventurerStatus.AVAILABLE,
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
