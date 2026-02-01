import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { ItemRarity, ItemStatus } from "../../../../../packages/shared/src/types/item.type";
import { Link } from "react-router-dom";
import { itemImages, itemEmojis } from "../../utils/itemConstants";

export function GuildInventory({ inventory }: { inventory: Item[] }) {
    const availableItems = inventory.filter((item) => item.status === ItemStatus.AVAILABLE);
    const inUseItems = inventory.filter((item) => item.status === ItemStatus.IN_USE);

    const totalValue = inventory.reduce((sum, item) => sum + item.price, 0);

    const rarityColors = {
        [ItemRarity.COMMON]: "text-gray-400",
        [ItemRarity.UNCOMMON]: "text-green-400",
        [ItemRarity.RARE]: "text-blue-400",
        [ItemRarity.EPIC]: "text-purple-400",
        [ItemRarity.LEGENDARY]: "text-orange-400",
    };

    const statusColors = {
        [ItemStatus.AVAILABLE]: "bg-green-900/30 text-green-400 border-green-700",
        [ItemStatus.IN_USE]: "bg-blue-900/30 text-blue-400 border-blue-700",
        [ItemStatus.CONSUMED]: "bg-gray-900/30 text-gray-400 border-gray-700",
    };

    const statusLabels = {
        [ItemStatus.AVAILABLE]: "Disponible",
        [ItemStatus.IN_USE]: "En utilisation",
        [ItemStatus.CONSUMED]: "Consommé",
    };

    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <span className="text-2xl">🎒</span> Inventaire
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                        {availableItems.length} disponibles / {inUseItems.length} en utilisation /{" "}
                        {inventory.length} total
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-slate-400">Valeur totale</p>
                    <p className="text-xl font-bold text-amber-400">
                        {new Intl.NumberFormat("fr-FR").format(totalValue)} po
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b border-slate-700">
                        <tr className="text-left text-slate-400 uppercase tracking-wide text-xs">
                            <th className="pb-3 font-semibold">Icône</th>
                            <th className="pb-3 font-semibold">Nom</th>
                            <th className="pb-3 font-semibold">Type</th>
                            <th className="pb-3 font-semibold">Rareté</th>
                            <th className="pb-3 font-semibold">Durabilité/Qté</th>
                            <th className="pb-3 font-semibold">Prix</th>
                            <th className="pb-3 font-semibold">Statut</th>
                            <th className="pb-3 font-semibold">Quête</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                        {inventory.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-700/30 transition-colors">
                                <td className="py-3">
                                    <div className="flex items-center justify-center w-8 h-8">
                                        {itemImages[item.name] ? (
                                            <img
                                                src={itemImages[item.name]!}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-lg">{itemEmojis[item.name]}</span>
                                        )}
                                    </div>
                                </td>
                                <td className="py-3">
                                    <div>
                                        <p className="font-medium text-slate-200">{item.name}</p>
                                        <p className="text-xs text-slate-500 truncate max-w-xs">
                                            {item.description}
                                        </p>
                                    </div>
                                </td>
                                <td className="py-3">
                                    <span className="text-slate-300 capitalize">{item.type}</span>
                                </td>
                                <td className="py-3">
                                    <span className={`font-semibold ${rarityColors[item.rarity]}`}>
                                        {item.rarity}
                                    </span>
                                </td>
                                <td className="py-3">
                                    {item.isConsumable ? (
                                        <span className="text-slate-300">x{item.quantity}</span>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                                                    style={{
                                                        width: `${((item.durability || 0) / (item.maxDurability || 1)) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs text-slate-400">
                                                {item.durability}/{item.maxDurability}
                                            </span>
                                        </div>
                                    )}
                                </td>
                                <td className="py-3">
                                    <span className="text-amber-400 font-semibold">
                                        {item.price} po
                                    </span>
                                </td>
                                <td className="py-3">
                                    <span
                                        className={`px-2 py-1 rounded text-xs border ${statusColors[item.status]}`}
                                    >
                                        {statusLabels[item.status]}
                                    </span>
                                </td>
                                <td className="py-3">
                                    {item.questId ? (
                                        <Link
                                            to={`/quest/${item.questId}`}
                                            className="text-blue-400 hover:text-blue-300 text-lg transition-colors"
                                            title={`Quête #${item.questId}`}
                                        >
                                            🎯
                                        </Link>
                                    ) : (
                                        <span className="text-slate-600 text-xs">-</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
