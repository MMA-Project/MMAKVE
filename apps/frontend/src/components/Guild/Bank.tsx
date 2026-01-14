import type { Bank } from "../../../../../packages/shared/src/types/bank.type";

export function Bank({ bank }: { bank: Bank | undefined }) {
    if (!bank) {
        return null;
    }
    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Banque de la Guilde</h2>
            <div className="mb-4">
                <p className="text-lg text-gray-300">
                    Balance: <span className="text-green-400 font-bold">{bank.balance}</span>
                </p>
            </div>
            <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400">Recent Transactions</h3>
                {bank.transactions.length > 0 ? (
                    <ul className="text-sm text-gray-300 max-h-48 overflow-y-auto">
                        {bank.transactions.map((transaction, index) => (
                            <li key={index} className="py-1 border-b border-slate-700">
                                {transaction.name}: {transaction.amount}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500">No transactions</p>
                )}
            </div>
        </div>
    );
}
