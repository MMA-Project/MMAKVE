export function StartButton({ onClick }: any) {
    return (
        <button
            aria-label="Démarrer la quête"
            title="Démarrer"
            className="p-2 rounded hover:bg-slate-700"
            onClick={onClick}
        >
            <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
            </svg>
        </button>
    );
}
