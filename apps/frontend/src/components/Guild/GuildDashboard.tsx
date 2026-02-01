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
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        ⚔️ Guilde des Aventuriers
                    </h1>
                    <p className="text-slate-400">Gestion des ressources et de l'inventaire</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <Bank bank={getGuild.data.bank} />
                    </div>
                    <div className="lg:col-span-2">
                        <GuildInventory inventory={getGuild.data.inventory ?? []} />
                    </div>
                </div>
            </div>
        </div>
    );
}
