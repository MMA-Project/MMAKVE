import type { ReactNode } from "react";

export type SortOrder = "asc" | "desc";

interface SortControlsProps<T extends string> {
    sortBy: T;
    sortOrder: SortOrder;
    onSortByChange: (sortBy: T) => void;
    onSortOrderChange: (order: SortOrder) => void;
    sortOptions: Array<{ value: T; label: string }>;
    additionalControls?: ReactNode;
}

export function SortControls<T extends string>({
    sortBy,
    sortOrder,
    onSortByChange,
    onSortOrderChange,
    sortOptions,
    additionalControls,
}: SortControlsProps<T>) {
    return (
        <div className="mb-6 bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="flex justify-between items-end gap-4">
                <div className="flex items-center gap-4">
                    <label htmlFor="sort" className="text-sm font-medium text-slate-300">
                        Trier par :
                    </label>
                    <select
                        id="sort"
                        className="px-3 py-2 rounded bg-slate-900 text-slate-100 border border-slate-600 hover:border-slate-500 transition-colors"
                        value={sortBy}
                        onChange={(e) => onSortByChange(e.target.value as T)}
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <button
                        id="order"
                        className="px-3 py-2 rounded bg-slate-900 text-slate-100 border border-slate-600 hover:border-slate-500 transition-colors"
                        onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
                    >
                        {sortOrder === "asc" ? "⬆" : "⬇"}
                    </button>
                </div>
                {additionalControls}
            </div>
        </div>
    );
}
