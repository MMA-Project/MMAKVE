import type { ChangeEvent } from "react";

interface RangeFilterProps {
    label: string;
    minValue: string;
    maxValue: string;
    onMinChange: (value: string) => void;
    onMaxChange: (value: string) => void;
    placeholder?: string;
    icon?: string;
    type?: "number" | "date";
    min?: string;
    maxWidth?: string;
}

export function RangeFilter({
    label,
    minValue,
    maxValue,
    onMinChange,
    onMaxChange,
    placeholder = "",
    icon,
    type = "number",
    min = "0",
    maxWidth = "w-20",
}: RangeFilterProps) {
    return (
        <div className="flex items-center gap-2 whitespace-nowrap">
            <label className="text-sm font-medium flex-shrink-0">{label}</label>
            <input
                type={type}
                placeholder="Min"
                value={minValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onMinChange(e.target.value)}
                className={`${maxWidth} p-1.5 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none text-xs`}
                min={type === "number" ? min : undefined}
            />
            <span className="text-slate-400 text-xs flex-shrink-0">—</span>
            <input
                type={type}
                placeholder="Max"
                value={maxValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onMaxChange(e.target.value)}
                className={`${maxWidth} p-1.5 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none text-xs`}
                min={type === "number" ? min : undefined}
            />
            {icon && <span className="flex-shrink-0">{icon}</span>}
        </div>
    );
}
