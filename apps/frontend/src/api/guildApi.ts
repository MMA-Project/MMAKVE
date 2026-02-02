import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Guild } from "../../../../packages/shared/src/types/guild.type";
import type { Item } from "../../../../packages/shared/src/types/item.type";

const API_BASE = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

export function useAllGuilds() {
    const fetchGuilds = async (): Promise<Guild[]> => {
        const response = await fetch(`${API_BASE}/guilds`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des guildes");
        }

        return response.json();
    };

    const getGuilds = useQuery({
        queryKey: ["guilds"],
        queryFn: fetchGuilds,
    });

    return getGuilds;
}

export function useGuildBank(guildId: string) {
    const fetchGuildBank = async () => {
        const response = await fetch(`${API_BASE}/guilds/${guildId}/bank`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération de la banque de guilde");
        }

        return response.json();
    };

    const getGuildBank = useQuery({
        queryKey: ["guild-bank", guildId],
        queryFn: fetchGuildBank,
        enabled: !!guildId,
    });

    return getGuildBank;
}

export function useGuildItems(guildId: string) {
    const fetchGuildItems = async () => {
        const response = await fetch(`${API_BASE}/guilds/${guildId}/inventory`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération de l'inventaire");
        }

        return response.json();
    };

    const getGuildItems = useQuery({
        queryKey: ["guild-items", guildId],
        queryFn: fetchGuildItems,
        enabled: !!guildId,
    });

    return getGuildItems;
}

export function useAddItem() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (newItem: Item) => {
            const response = await fetch(`${API_BASE}/guilds/inventory`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de l'ajout d'un item");
            }

            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["guild-items"] });
        },
    });
}

export function useUpdateItem() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (updatedItem: Item) => {
            const response = await fetch(`${API_BASE}/guilds/inventory/${updatedItem.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedItem),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || "Erreur lors de la mise à jour d'un item");
            }

            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["guild-items"] });
        },
    });
}
