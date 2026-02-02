import { useState } from "react";
import type { SortOrder } from "../components/common/SortControls";

export interface SortConfig<T extends string> {
    sortBy: T;
    sortOrder: SortOrder;
}

export function useSorting<T extends string>(
    defaultSortBy: T,
    defaultSortOrder: SortOrder = "asc",
) {
    const [sortBy, setSortBy] = useState<T>(defaultSortBy);
    const [sortOrder, setSortOrder] = useState<SortOrder>(defaultSortOrder);

    const updateSort = (newSortBy: T) => {
        if (sortBy === newSortBy) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(newSortBy);
            setSortOrder("asc");
        }
    };

    const setSortConfig = (config: SortConfig<T>) => {
        setSortBy(config.sortBy);
        setSortOrder(config.sortOrder);
    };

    return {
        sortBy,
        sortOrder,
        setSortBy,
        setSortOrder,
        updateSort,
        setSortConfig,
        sortConfig: { sortBy, sortOrder },
    };
}
