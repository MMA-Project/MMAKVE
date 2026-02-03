import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    type Adventurer,
    type AdventurerCreation,
} from "../../../../packages/shared/src/types/adventurer.type";

const API_BASE = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

// Fonction utilitaire pour convertir les dates d'un adventurer
const convertAdventurerDates = (adventurer: any): Adventurer => {
    if (adventurer?.user?.createdAt && typeof adventurer.user.createdAt === "string") {
        adventurer.user.createdAt = new Date(adventurer.user.createdAt);
    }
    return adventurer;
};

export const useAdventurers = () => {
    const fetchAdventurers = async (): Promise<Adventurer[]> => {
        const response = await fetch(`${API_BASE}/adventurers`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des aventuriers");
        }

        const data = await response.json();
        return data.map(convertAdventurerDates);
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
            const response = await fetch(`${API_BASE}/adventurers`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newAdventurer),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de la création de l'aventurier");
            }

            const data = await response.json();
            return convertAdventurerDates(data);
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
            const response = await fetch(`${API_BASE}/adventurers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updates),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de la mise à jour de l'aventurier");
            }

            const data = await response.json();
            return convertAdventurerDates(data);
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
            const response = await fetch(`${API_BASE}/adventurers/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de la suppression de l'aventurier");
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adventurers"] });
        },
    });
    return deleteAdventurerMutation;
};
