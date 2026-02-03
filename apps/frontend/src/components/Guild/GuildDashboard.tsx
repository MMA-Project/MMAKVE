import { useAllGuilds, useGuildBank, useGuildItems } from "../../api/guildApi";
import { Bank } from "./Bank";
import { GuildInventory } from "./GuildInventory";
import { LoadingState, ErrorState, EmptyState } from "../common";

export function GuildDashboard() {
    const { data: guilds, isLoading, isError, error } = useAllGuilds();
    const getGuildBank = useGuildBank(guilds?.[0]?.id || "");
    const getGuildItems = useGuildItems(guilds?.[0]?.id || "");

    if (isLoading || getGuildBank.isLoading || getGuildItems.isLoading) {
        return <LoadingState message="Chargement des données de la guilde..." />;
    }

    if (isError || getGuildBank.isError || getGuildItems.isError) {
        const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue.";
        return <ErrorState title="Impossible de charger la guilde" message={errorMessage} />;
    }

    if (!guilds || guilds.length === 0) {
        return (
            <EmptyState
                title="Aucune donnée disponible"
                message="Les données de la guilde ne sont pas disponibles."
            />
        );
    }

    const guild = guilds[0];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        ⚔️ {guild.name}
                    </h1>
                    <p className="text-slate-400">Gestion des ressources et de l'inventaire</p>
                </div>
                <div className="flex flex-row gap-6">
                    <div className="w-full">
                        <Bank bank={getGuildBank.data} />
                    </div>
                    <div className="w-full">
                        <GuildInventory inventory={getGuildItems.data ?? []} />
                    </div>
                </div>
            </div>
        </div>
    );
}
