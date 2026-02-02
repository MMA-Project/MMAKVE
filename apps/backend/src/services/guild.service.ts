import { Guild, Bank, Item } from "@mmakve/shared";
import { mockGuilds } from "../mocks/guild.mock";

export async function getAll(
    params?: { id?: string; name?: string }
): Promise<Guild[]> {
    return mockGuilds;
}

export async function getGuildBank(guildId: string): Promise<Bank | null> {
    const guild = mockGuilds.find(g => g.id === guildId);
    return guild?.bank || null;
}

export async function getGuildInventory(guildId: string): Promise<Item[]> {
    const guild = mockGuilds.find(g => g.id === guildId);
    return guild?.inventory || [];
}