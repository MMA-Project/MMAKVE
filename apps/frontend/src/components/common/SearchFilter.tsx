import type { ChangeEvent } from "react";

interface SearchFilterProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    icon?: string;
    width?: string;
}

export function SearchFilter({
    label,
    value,
    onChange,
    placeholder = "Rechercher...",
    icon,
    width = "flex-1 sm:w-96",
}: SearchFilterProps) {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <label className="text-sm font-medium w-20 sm:w-32 flex-shrink-0">{label} :</label>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                className={`${width} sm:flex-none p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none`}
            />
            {icon && <span>{icon}</span>}
        </div>
    );
}
