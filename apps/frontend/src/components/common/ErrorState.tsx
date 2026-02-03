interface ErrorStateProps {
    title?: string;
    message: string;
    icon?: string;
}

export function ErrorState({
    title = "Une erreur est survenue",
    message,
    icon = "⚠️",
}: ErrorStateProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8 flex items-center justify-center">
            <div className="max-w-xl w-full border border-red-800 rounded-lg bg-red-950/60 p-6 text-center space-y-2">
                <div className="text-3xl">{icon}</div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-red-200">{message}</p>
            </div>
        </div>
    );
}
