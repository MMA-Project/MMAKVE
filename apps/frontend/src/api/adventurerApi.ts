import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
            createdAt: new Date("2025-01-10T09:30:00Z"),
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
            createdAt: new Date("2025-03-12T11:15:00Z"),
        },
        type: AdventurerType.ROGUE,
        status: AdventurerStatus.INJURED,
        xp: 3000,
    },
    {
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
    const queryClient = useQueryClient();
    const createAdventurerMutation = useMutation({
        mutationFn: async (newAdventurer: AdventurerCreation): Promise<Adventurer> => {
            const createdAdventurer: Adventurer = {
                id: (Math.random() * 1000).toFixed(0),
                ...newAdventurer,
                status: AdventurerStatus.AVAILABLE,
                xp: 0,
            };
            mockAdventurers.push(createdAdventurer);
            return createdAdventurer;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adventurers"] });
        },
    });
    return createAdventurerMutation;
};

export const useUpdateAdventurer = () => {
    const queryClient = useQueryClient();
    const updateAdventurerMutation = useMutation({
        mutationFn: async ({
            id,
            updates,
        }: {
            id: string;
            updates: Partial<Adventurer>;
        }): Promise<Adventurer> => {
            const index = mockAdventurers.findIndex((a) => a.id === id);
            if (index === -1) throw new Error("Adventurer not found");

            const updatedAdventurer = {
                ...mockAdventurers[index],
                ...updates,
                id: mockAdventurers[index].id, // Ensure id doesn't change
            };
            mockAdventurers[index] = updatedAdventurer;
            return updatedAdventurer;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adventurers"] });
        },
    });
    return updateAdventurerMutation;
};

export const useDeleteAdventurer = () => {
    const queryClient = useQueryClient();
    const deleteAdventurerMutation = useMutation({
        mutationFn: async (id: string): Promise<void> => {
            const index = mockAdventurers.findIndex((a) => a.id === id);
            if (index === -1) throw new Error("Adventurer not found");
            mockAdventurers.splice(index, 1);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adventurers"] });
        },
    });
    return deleteAdventurerMutation;
};
