import type { Adventurer } from "../../../../../packages/shared/src/types/adventurer.type";
import { AdventurerCard } from "./AdventurerCard";
import { adventurerTypeLabels } from "../../utils/adventurerImages";

interface AdventurerListProps {
    adventurers: Adventurer[] | undefined;
    sortBy: "name" | "xp" | "type" | "status" | "createdAt";
    sortOrder: "asc" | "desc";
    onEdit: (adventurer: Adventurer) => void;
    onDelete: (adventurerId: string) => void;
}

export function AdventurerList({
    adventurers,
    sortBy,
    sortOrder,
    onEdit,
    onDelete,
}: AdventurerListProps) {
    if (!adventurers || adventurers.length === 0) {
        return (
            <div className="p-8 border border-slate-700 rounded bg-slate-900/50 flex flex-col items-center justify-center gap-3 text-slate-400">
                <span className="text-4xl">🔍</span>
                <p className="text-lg font-medium">Aucun aventurier trouvé</p>
                <p className="text-sm">Essayez de modifier vos critères de recherche</p>
            </div>
        );
    }

    const sortedAdventurers = adventurers.slice().sort((a, b) => {
        let aValue: string | number = "";
        let bValue: string | number = "";

        switch (sortBy) {
            case "name":
                aValue = a.user.name;
                bValue = b.user.name;
                break;
            case "xp":
                aValue = a.xp;
                bValue = b.xp;
                break;
            case "type":
                aValue = adventurerTypeLabels[a.type];
                bValue = adventurerTypeLabels[b.type];
                break;
            case "status":
                aValue = a.status;
                bValue = b.status;
                break;
            case "createdAt":
                aValue = new Date(a.user.createdAt).getTime();
                bValue = new Date(b.user.createdAt).getTime();
                break;
        }

        const comparison =
            typeof aValue === "string"
                ? aValue.localeCompare(bValue.toString())
                : aValue - (bValue as number);

        return sortOrder === "asc" ? comparison : -comparison;
    });

    return (
        <>
            {sortedAdventurers.map((adventurer) => (
                <AdventurerCard
                    key={adventurer.id}
                    adventurer={adventurer}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
}
