import { useQuery } from "@tanstack/react-query";
import {
    AdventurerStatus,
    AdventurerType,
    type Adventurer,
    type AdventurerCreation,
} from "../../../../packages/shared/src/types/adventurer.type";

const mockAdventurers: Adventurer[] = [
    {
        id: "501",
        user: {
            id: "501",
            name: "Elara Swiftwind",
            role: "ADVENTURER",
            createdAt: new Date("2024-01-10T09:30:00Z"),
        },
        type: AdventurerType.ENCHANTER,
        status: AdventurerStatus.AVAILABLE,
        xp: 112500,
    },
    {
        id: "502",
        user: {
            id: "502",
            name: "Thalion the Swift",
            role: "ADVENTURER",
            createdAt: new Date("2024-01-12T11:15:00Z"),
        },
        type: AdventurerType.ROGUE,
        status: AdventurerStatus.AVAILABLE,
        xp: 3000,
    },
    {
        id: "503",
        user: {
            id: "503",
            name: "Gorak Stonefist",
            role: "ADVENTURER",
            createdAt: new Date("2024-01-15T14:45:00Z"),
        },
        type: AdventurerType.BARBARIAN,
        status: AdventurerStatus.ON_QUEST,
        xp: 2800,
    },
];

export const useAdventurers = () => {
    const fetchAdventurers = async (): Promise<Adventurer[]> => {
        return mockAdventurers;
    };
    const getAdventurers = useQuery({
        queryKey: ["adventurers"],
        queryFn: fetchAdventurers,
    });
    return getAdventurers;
};

export const useCreateAdventurer = () => {
    const createAdventurer = async (newAdventurer: AdventurerCreation): Promise<Adventurer> => {
        const createdAdventurer: Adventurer = {
            id: (Math.random() * 1000).toFixed(0),
            ...newAdventurer,
            status: AdventurerStatus.AVAILABLE,
            xp: 0,
        };
        mockAdventurers.push(createdAdventurer);
        return createdAdventurer;
    };
    return createAdventurer;
};
