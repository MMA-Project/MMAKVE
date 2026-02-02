import { AdventurerStatus } from "../../../../packages/shared/src/types/adventurer.type";
import { QuestStatus } from "../../../../packages/shared/src/types/quest.type";
import type { SelectOption } from "../components/common/SelectFilter";
import { adventurerTypeLabels } from "./adventurerImages";

export const adventurerStatusLabels: Record<AdventurerStatus, string> = {
    [AdventurerStatus.AVAILABLE]: "Disponible",
    [AdventurerStatus.ON_QUEST]: "En quête",
    [AdventurerStatus.INJURED]: "Blessé",
    [AdventurerStatus.DEAD]: "Décédé",
    [AdventurerStatus.RESTING]: "Au repos",
    [AdventurerStatus.LEAVED]: "Parti",
    [AdventurerStatus.DELETED]: "Supprimé",
};

export const questStatusLabels: Record<QuestStatus, string> = {
    [QuestStatus.PENDING]: "En attente d'approbation",
    [QuestStatus.APPROVED]: "Approuvé",
    [QuestStatus.IN_PROGRESS]: "En cours",
    [QuestStatus.REJECTED]: "Rejeté",
    [QuestStatus.COMPLETED]: "Complété",
    [QuestStatus.FAILED]: "Échoué",
    [QuestStatus.CANCELED]: "Annulé",
};

export const adventurerTypeOptions: SelectOption[] = Object.entries(adventurerTypeLabels).map(
    ([value, label]) => ({ value, label: label as string }),
);

export const adventurerStatusOptions: SelectOption[] = Object.entries(adventurerStatusLabels).map(
    ([value, label]) => ({ value, label }),
);

export const questStatusOptions: SelectOption[] = Object.entries(questStatusLabels).map(
    ([value, label]) => ({ value, label }),
);

export const commonStyles = {
    input: "p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none",
    select: "p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none",
    button: "px-3 py-2 rounded bg-slate-900 text-slate-100 border border-slate-600 hover:border-slate-500 transition-colors",
    label: "text-sm font-medium text-slate-300",
    container: "bg-slate-800 p-4 rounded-lg border border-slate-700",
} as const;

// Fonctions d'utilitaires pour le tri
export function sortData<T>(data: T[], sortBy: keyof T, sortOrder: "asc" | "desc"): T[] {
    return [...data].sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        let comparison = 0;
        if (aValue < bValue) comparison = -1;
        if (aValue > bValue) comparison = 1;

        return sortOrder === "asc" ? comparison : -comparison;
    });
}
