import type { ReactNode } from "react";

interface AdvancedFiltersContainerProps {
    hasActiveFilters: boolean;
    children: ReactNode;
    onResetFilters?: () => void;
    title?: string;
}

export function AdvancedFiltersContainer({
    hasActiveFilters,
    children,
    onResetFilters,
    title = "Filtres avancés",
}: AdvancedFiltersContainerProps) {
    return (
        <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-100 transition">
                <span>▼</span>
                <span>{title}</span>
                {hasActiveFilters && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-blue-600 rounded">Actif</span>
                )}
            </button>

            <div className="absolute right-0 top-full mt-2 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="space-y-4 p-4 border border-slate-700 rounded bg-slate-900 shadow-2xl">
                    {children}

                    {hasActiveFilters && onResetFilters && (
                        <button
                            onClick={onResetFilters}
                            className="w-full sm:w-auto px-4 py-2 text-sm rounded bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-slate-100 transition whitespace-nowrap"
                        >
                            Réinitialiser tous les filtres
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
