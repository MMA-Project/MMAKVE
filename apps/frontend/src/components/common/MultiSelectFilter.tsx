import { useRef, useEffect } from "react";

export interface SelectOption {
    value: string;
    label: string;
}

interface MultiSelectFilterProps {
    label: string;
    selectedItems: string[];
    onToggleItem: (item: string) => void;
    options: SelectOption[];
    placeholder?: string;
    icon?: string;
    isOpen: boolean;
    onToggleOpen: (open: boolean) => void;
}

export function MultiSelectFilter({
    label,
    selectedItems,
    onToggleItem,
    options,
    placeholder = "Sélectionner...",
    icon,
    isOpen,
    onToggleOpen,
}: MultiSelectFilterProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onToggleOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onToggleOpen]);

    return (
        <div className="flex flex-wrap items-center gap-4">
            <label className="text-sm font-medium w-20 sm:w-32 flex-shrink-0">{label} :</label>
            <div className="relative flex-1 sm:flex-none" ref={dropdownRef}>
                <button
                    onClick={() => onToggleOpen(!isOpen)}
                    className="w-full sm:w-64 p-2 rounded bg-slate-800 text-slate-100 border border-slate-600 focus:border-slate-500 min-h-[42px] flex items-center justify-between cursor-pointer"
                >
                    <span className="text-sm">
                        {selectedItems.length > 0
                            ? `${selectedItems.length} sélectionné${selectedItems.length > 1 ? "s" : ""}`
                            : placeholder}
                    </span>
                    <span className="text-slate-400">{isOpen ? "▲" : "▼"}</span>
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 max-h-64 overflow-y-auto bg-slate-800 border border-slate-600 rounded shadow-lg z-10">
                        {options.map((option) => {
                            const isSelected = selectedItems.includes(option.value);
                            return (
                                <label
                                    key={option.value}
                                    className="flex items-center gap-2 px-3 py-2 hover:bg-slate-700 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => onToggleItem(option.value)}
                                        className="w-4 h-4 rounded bg-slate-700 border-slate-600 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-slate-100">{option.label}</span>
                                </label>
                            );
                        })}
                    </div>
                )}
            </div>
            {icon && <span>{icon}</span>}
        </div>
    );
}
