interface EmptyStateProps {
    title?: string;
    message?: string;
    icon?: string;
}

export function EmptyState({
    title = "Aucune donnée disponible",
    message = "Les données ne sont pas disponibles pour le moment.",
    icon = "📭",
}: EmptyStateProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8 flex items-center justify-center">
            <div className="max-w-xl w-full border border-slate-700 rounded-lg bg-slate-900/70 p-6 text-center space-y-2">
                <div className="text-3xl">{icon}</div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-slate-400">{message}</p>
            </div>
        </div>
    );
}
