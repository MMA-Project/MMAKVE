export default function ReturnButton() {
    return (
        <button
            className="absolute top-4 left-4 text-slate-400 hover:text-slate-100 hover:cursor-pointer"
            onClick={() => window.history.back()}
        >
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );
}
