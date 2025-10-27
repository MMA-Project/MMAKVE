export function AddButton({ onClick }: any) {
    return (
        <button
            aria-label="Add quest"
            title="Add quest"
            className="p-2 rounded hover:bg-slate-700"
            onClick={onClick}
        >
            <svg
                className="w-5 h-5 text-green-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
            >
                <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                />
            </svg>
        </button>
    );
}
