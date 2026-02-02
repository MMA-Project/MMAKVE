export function CancelButton({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
    return (
        <button
            aria-label="Annuler la quête"
            title="Annuler"
            className="p-2 rounded hover:bg-slate-700"
            onClick={onClick}
        >
            <svg
                className="w-5 h-5 text-orange-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
            >
                <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    );
}
