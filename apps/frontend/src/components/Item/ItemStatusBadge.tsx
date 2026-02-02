import { ItemStatus } from "../../../../../packages/shared/src/types/item.type";

export const itemStatusLabels: Record<ItemStatus, string> = {
    [ItemStatus.AVAILABLE]: "Disponible",
    [ItemStatus.IN_USE]: "En utilisation",
    [ItemStatus.CONSUMED]: "Consommé",
    [ItemStatus.BROKEN]: "Cassé",
    [ItemStatus.LOST]: "Perdu",
};

const itemStatusColors: Record<ItemStatus, string> = {
    [ItemStatus.AVAILABLE]: "bg-green-900/30 text-green-400 border-green-700",
    [ItemStatus.IN_USE]: "bg-blue-900/30 text-blue-400 border-blue-700",
    [ItemStatus.CONSUMED]: "bg-gray-900/30 text-gray-400 border-gray-700",
    [ItemStatus.BROKEN]: "bg-red-900/30 text-red-400 border-red-700",
    [ItemStatus.LOST]: "bg-amber-900/30 text-amber-400 border-amber-700",
};

export function ItemStatusBadge({ status }: { status: ItemStatus }) {
    return (
        <span
            className={`px-2 py-1 rounded text-xs border inline-block ${itemStatusColors[status]}`}
        >
            {itemStatusLabels[status]}
        </span>
    );
}
