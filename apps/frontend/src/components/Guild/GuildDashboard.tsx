import { useGuild } from "../../api/guildApi";
import { Bank } from "./Bank";
import { GuildInventory } from "./GuildInventory";

export function GuildDashboard() {
    const getGuild = useGuild();

    if (getGuild.isLoading) {
        return <div>Chargement des données de la guilde...</div>;
    }

    if (getGuild.isError) {
        return <div>Erreur lors du chargement des données de la guilde.</div>;
    }

    if (!getGuild.data) {
        return <div>Les données de la guilde ne sont pas disponibles.</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <h1 className="text-3xl font-bold mb-4">Tableau de bord de la guilde</h1>
            <div className="flex flex-row justify-between items-start gap-8">
                <Bank bank={getGuild.data.bank} />
                <GuildInventory inventory={getGuild.data.inventory ?? []} />
            </div>
        </div>
    );
}
