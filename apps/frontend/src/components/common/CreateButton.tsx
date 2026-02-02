import type { ReactNode } from "react";

interface CreateButtonProps {
    onClick: () => void;
    icon?: string;
    title: string;
    subtitle?: string;
    hoverColor?: "purple" | "emerald" | "blue" | "amber";
    children?: ReactNode;
}

const colorClasses = {
    purple: {
        border: "hover:border-purple-500",
        text: "group-hover:text-purple-400",
    },
    emerald: {
        border: "hover:border-emerald-500",
        text: "group-hover:text-emerald-400",
    },
    blue: {
        border: "hover:border-blue-500",
        text: "group-hover:text-blue-400",
    },
    amber: {
        border: "hover:border-amber-500",
        text: "group-hover:text-amber-400",
    },
};

export function CreateButton({
    onClick,
    icon = "+",
    title,
    subtitle,
    hoverColor = "purple",
    children,
}: CreateButtonProps) {
    const colors = colorClasses[hoverColor];

    return (
        <div
            className={`p-6 border-2 border-dashed border-slate-600 rounded-lg bg-slate-900/50 flex flex-col gap-3 hover:cursor-pointer ${colors.border} hover:bg-slate-800/50 transition-all group`}
            onClick={onClick}
        >
            <div
                className={`flex items-center justify-center gap-2 text-slate-400 ${colors.text} transition-colors`}
            >
                <span className="text-2xl">{icon}</span>
                <span className="font-medium">{title}</span>
            </div>
            {subtitle && <p className="text-sm text-slate-500 text-center">{subtitle}</p>}
            {children}
        </div>
    );
}
