import { Adventurer, AdventurerStatus, AdventurerType } from "@mmakve/shared";

export const mockAdventurers: Adventurer[] = [
    {
        id: "501",
        user: {
            id: "501",
            name: "Borin Ironfist",
            role: "ADVENTURER",
            createdAt: new Date("2024-01-02T10:00:00Z"),
        },
        type: AdventurerType.ENCHANTER,
        status: AdventurerStatus.AVAILABLE,
        xp: 1800,
    },
    {
        id: "502",
        user: {
            id: "502",
            name: "Kaela Stormshield",
            role: "ADVENTURER",
            createdAt: new Date("2024-01-12T09:15:00Z"),
        },
        type: AdventurerType.PRIEST,
        status: AdventurerStatus.AVAILABLE,
        xp: 2400,
    },
    {
        id: "503",
        user: {
            id: "503",
            name: "Gorak Stonefist",
            role: "ADVENTURER",
            createdAt: new Date("2024-01-15T14:45:00Z"),
        },
        type: AdventurerType.ENCHANTER,
        status: AdventurerStatus.AVAILABLE,
        xp: 2800,
    },

    {
        id: "504",
        user: {
            id: "504",
            name: "Thalion the Swift",
            role: "ADVENTURER",
            createdAt: new Date("2024-01-12T11:15:00Z"),
        },
        type: AdventurerType.ENCHANTER,
        status: AdventurerStatus.AVAILABLE,
        xp: 1000,
    },
    {
        id: "505",
        user: {
            id: "505",
            name: "Ryn Featherstep",
            role: "ADVENTURER",
            createdAt: new Date("2024-02-10T10:00:00Z"),
        },
        type: AdventurerType.ARCHER,
        status: AdventurerStatus.AVAILABLE,
        xp: 1600,
    },

    {
        id: "506",
        user: {
            id: "506",
            name: "Elandra Whisperwind",
            role: "ADVENTURER",
            createdAt: new Date("2024-01-10T10:30:00Z"),
        },
        type: AdventurerType.ENCHANTER,
        status: AdventurerStatus.AVAILABLE,
        xp: 1050,
    },
    {
        id: "507",
        user: {
            id: "507",
            name: "Liora Dawnspark",
            role: "ADVENTURER",
            createdAt: new Date("2024-02-20T08:45:00Z"),
        },
        type: AdventurerType.ARCANE_MAGE,
        status: AdventurerStatus.AVAILABLE,
        xp: 2200,
    },

    {
        id: "508",
        user: {
            id: "508",
            name: "Mira Lightveil",
            role: "ADVENTURER",
            createdAt: new Date("2024-03-10T09:00:00Z"),
        },
        type: AdventurerType.PRIEST,
        status: AdventurerStatus.AVAILABLE,
        xp: 1300,
    },
    {
        id: "509",
        user: {
            id: "509",
            name: "Seren Willowglade",
            role: "ADVENTURER",
            createdAt: new Date("2024-03-12T11:00:00Z"),
        },
        type: AdventurerType.PRIEST,
        status: AdventurerStatus.SLEEPING,
        xp: 1500,
    },

    // === Métiers de soutien ===
    {
        id: "510",
        user: {
            id: "510",
            name: "Tarin Emberforge",
            role: "ADVENTURER",
            createdAt: new Date("2024-03-14T15:00:00Z"),
        },
        type: AdventurerType.ENCHANTER,
        status: AdventurerStatus.AVAILABLE,
        xp: 900,
    },
    {
        id: "511",
        user: {
            id: "511",
            name: "Selene Frostweaver",
            role: "ADVENTURER",
            createdAt: new Date("2024-03-18T13:00:00Z"),
        },
        type: AdventurerType.GEOMANCER,
        status: AdventurerStatus.AVAILABLE,
        xp: 2500,
    },

    // === Aventuriers non dispo (pour tester les filtres) ===
    {
        id: "512",
        user: {
            id: "512",
            name: "Doran Quickblade",
            role: "ADVENTURER",
            createdAt: new Date("2024-02-02T09:00:00Z"),
        },
        type: AdventurerType.ROGUE,
        status: AdventurerStatus.ON_QUEST,
        xp: 1900,
    },
    {
        id: "513",
        user: {
            id: "513",
            name: "Kara Windrunner",
            role: "ADVENTURER",
            createdAt: new Date("2024-03-03T12:00:00Z"),
        },
        type: AdventurerType.ENCHANTER,
        status: AdventurerStatus.SLEEPING,
        xp: 2300,
    },
];
