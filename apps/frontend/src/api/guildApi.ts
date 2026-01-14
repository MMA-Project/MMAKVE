import { useQuery } from "@tanstack/react-query";
import type { Guild } from "../../../../packages/shared/src/types/guild.type";

const mockGuildApi: Guild = {
    id: "guild-1",
    name: "La Guilde des Héros",
    bank: {
        balance: 10000,
        transactions: [],
    },
    adventurers: [],
    inventory: [],
};

export function useGuild() {
    const fetchGuild = async (): Promise<Guild> => {
        return mockGuildApi;
    };
    const getGuild = useQuery({
        queryKey: ["guild"],
        queryFn: fetchGuild,
    });
    return getGuild;
}
