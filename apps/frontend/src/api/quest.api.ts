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
        title: "Retrieve the Azure Gem",
        description:
            "A precious gem was stolen by a band of river raiders. Retrieve it and return it safely.",
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
                            description: "An enchanted staff infused with arcane energy.",
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
                            description: "Epic protective robes woven with magic resistance.",
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
                            description: "A potent healing elixir.",
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
                            description: "A legendary ring that amplifies magical abilities.",
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
                            description: "A mystical helmet with protective enchantments.",
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
                            description: "A poisoned dagger perfect for stealth attacks.",
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
                            description: "A silent crossbow for ranged precision.",
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
                            description: "Emergency healing potion.",
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
        title: "Clear the Forgotten Mines",
        description:
            "The old mine tunnels have been infested by earth elementals. Clear them so miners can return.",
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
                            description: "A massive battle axe forged for destruction.",
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
                            description: "A reinforced shield for heavy combat.",
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
                            description: "A restorative potion for battle wounds.",
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
                            description: "A sturdy iron helmet for protection.",
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
        title: "Escort the Merchant Caravan",
        description:
            "A caravan needs protection through bandit-prone passes. Ensure all wagons reach the next town.",
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
        title: "Seal the Rift at Blackfen",
        description:
            "A magical rift is leaking corrupting energies. Seal it before the swamp spreads further.",
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
        title: "Rescue the Lost Scouts",
        description:
            "A group of scouts went missing in the Darkwood Forest. Find and rescue them safely.",
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
        title: "Investigate the Haunted Ruins",
        description:
            "Strange noises and lights have been reported in the old ruins. Investigate the source.",
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
            // Invalider et refetch les quêtes
            queryClient.invalidateQueries({ queryKey: ["quests"] });
        },
    });

    return mutation;
};
