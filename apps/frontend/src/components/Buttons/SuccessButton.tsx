export function SuccessButton({ onClick }: any) {
    return (
        <button
            aria-label="Marquer la quête comme réussie"
            title="Succès"
            className="p-2 rounded hover:bg-slate-700"
            onClick={onClick}
        >
            <svg
                className="w-5 h-5 text-green-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
    );
}
