export function FailButton({ onClick }: any) {
    return (
        <button
            aria-label="Marquer la quête comme échouée"
            title="Échec"
            className="p-2 rounded hover:bg-slate-700"
            onClick={onClick}
        >
            <svg
                className="w-5 h-5 text-red-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
    );
}
