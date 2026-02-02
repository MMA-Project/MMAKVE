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
    maxWidth = "w-24",
}: RangeFilterProps) {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <label className="text-sm font-medium w-20 sm:w-32 flex-shrink-0">{label} :</label>
            <div className="flex items-center gap-2">
                <input
                    type={type}
                    placeholder={`Min${placeholder ? ` ${placeholder}` : ""}`}
                    value={minValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onMinChange(e.target.value)}
                    className={`${maxWidth} p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none`}
                    min={type === "number" ? min : undefined}
                />
                <span className="text-slate-400">—</span>
                <input
                    type={type}
                    placeholder={`Max${placeholder ? ` ${placeholder}` : ""}`}
                    value={maxValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onMaxChange(e.target.value)}
                    className={`${maxWidth} p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 focus:outline-none`}
                    min={type === "number" ? min : undefined}
                />
                {icon && <span>{icon}</span>}
            </div>
        </div>
    );
}
