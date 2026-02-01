import type { Bank } from "../../../../../packages/shared/src/types/bank.type";

export function Bank({ bank }: { bank: Bank | undefined }) {
    if (!bank) {
        return null;
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("fr-FR").format(amount);
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 h-full">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-2xl">💰</span> Banque
            </h2>
            <div className="mb-6 p-4 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-lg border border-amber-700/50">
                <p className="text-sm text-slate-400 mb-1">Balance totale</p>
                <p className="text-3xl font-bold text-amber-400">
                    {formatCurrency(bank.balance)}{" "}
                    <span className="text-lg text-amber-500">po</span>
                </p>
            </div>
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                    Transactions récentes
                </h3>
                {bank.transactions.length > 0 ? (
                    <div className="space-y-2 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                        {bank.transactions
                            .sort((a, b) => b.date - a.date)
                            .map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className="bg-slate-900/50 p-3 rounded border border-slate-700 hover:border-slate-600 transition-colors"
                                >
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-slate-200 truncate">
                                                {transaction.name}
                                            </p>
                                            <p className="text-xs text-slate-500 mt-1">
                                                {formatDate(transaction.date)}
                                            </p>
                                        </div>
                                        <span
                                            className={`text-sm font-semibold whitespace-nowrap ${
                                                transaction.amount > 0
                                                    ? "text-green-400"
                                                    : "text-red-400"
                                            }`}
                                        >
                                            {transaction.amount > 0 ? "+" : ""}
                                            {formatCurrency(transaction.amount)} po
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                ) : (
                    <p className="text-sm text-slate-500 italic">Aucune transaction</p>
                )}
            </div>
        </div>
    );
}
