interface UpdateButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    title?: string;
}

export function UpdateButton({ onClick, disabled = false, title = "Modifier" }: UpdateButtonProps) {
    return (
        <button
            aria-label="Modifier la quête"
            title={title}
            className={`p-2 rounded ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700"}`}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
        >
            <svg
                className="w-5 h-5 text-slate-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
            >
                <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536M4 20h4.586a1 1 0 00.707-.293L19.707 8.293a1 1 0 000-1.414L17.12 4.293a1 1 0 00-1.414 0L5.293 14.707A1 1 0 005 15.414V20z"
                />
            </svg>
        </button>
    );
}
