export function DeleteButton({ onClick }: any) {
    return (
        <button
            aria-label="Delete quest"
            title="Delete"
            className="p-2 rounded hover:bg-slate-700"
            onClick={onClick}
        >
            <svg
                className="w-5 h-5 text-rose-400"
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
