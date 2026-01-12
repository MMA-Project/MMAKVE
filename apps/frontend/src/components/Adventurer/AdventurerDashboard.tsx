import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import { useAdventurers } from "../../api/adventurerApi";
import { AdventurerDetails } from "./AdventurerDetails";

export function AdventurerDashboard() {
    const getAdventurers = useAdventurers();
    return (
        <div className="min-h-screen flex flex-col items-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <h1 className="text-3xl font-bold">Tableau de bord des quêtes</h1>
            {getAdventurers.data?.length === 0 ? (
                <p>Aucun aventurier disponible.</p>
            ) : (
                <ul className="w-full max-w-4xl space-y-4">
                    {getAdventurers.data?.map((adventurer: Adventurer) => (
                        <AdventurerDetails key={adventurer.id} adventurer={adventurer} items={[]} />
                    ))}
                </ul>
            )}
        </div>
    );
}
