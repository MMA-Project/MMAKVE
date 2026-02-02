import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    type Adventurer,
    type AdventurerCreation,
} from "../../../../packages/shared/src/types/adventurer.type";

const API_BASE = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

const getAuthToken = () => localStorage.getItem("auth_token");

export const useAdventurers = () => {
    const fetchAdventurers = async (): Promise<Adventurer[]> => {
        const response = await fetch(`${API_BASE}/adventurers`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des aventuriers");
        }

        return response.json();
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
                    Authorization: `Bearer ${getAuthToken()}`,
                },
                body: JSON.stringify(newAdventurer),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de la création de l'aventurier");
            }

            return response.json();
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
                    Authorization: `Bearer ${getAuthToken()}`,
                },
                body: JSON.stringify(updates),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de la mise à jour de l'aventurier");
            }

            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["adventurers"] });
        },
    });
    return updateAdventurerMutation;
};
