import type { ChangeEvent } from "react";

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectFilterProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    icon?: string;
    width?: string;
}

export function SelectFilter({
    label,
    value,
    onChange,
    options,
    placeholder = "Sélectionner...",
    icon,
    width = "flex-1 sm:flex-none",
}: SelectFilterProps) {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <label className="text-sm font-medium w-20 sm:w-32 flex-shrink-0">{label} :</label>
            <select
                value={value}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
                className={`${width} p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none`}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {icon && <span>{icon}</span>}
        </div>
    );
}
