interface DeleteButtonProps {
    onClick: () => void;
    disabled?: boolean;
    title?: string;
}

export function DeleteButton({
    onClick,
    disabled = false,
    title = "Supprimer",
}: DeleteButtonProps) {
    return (
        <button
            aria-label={title}
            title={disabled ? "Suppression impossible (non disponible)" : title}
            className={`p-2 rounded transition-all ${
                disabled ? "opacity-50 cursor-not-allowed bg-slate-800" : "hover:bg-slate-700"
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            <svg
                className={`w-5 h-5 ${disabled ? "text-slate-500" : "text-rose-400"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
            >
                <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7L5 7M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12"
                />
            </svg>
        </button>
    );
}
