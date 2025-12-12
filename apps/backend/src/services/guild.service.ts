import { Guild } from "@mmakve/shared";
import { mockGuilds } from "../mocks/guild.mock";

export async function getAll(
    params?: { id?: string; name?: string }
): Promise<Guild[]> {
    return mockGuilds;
}