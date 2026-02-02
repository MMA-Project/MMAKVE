import { useState } from "react";
import type { Item } from "../../../../../packages/shared/src/types/item.type";
import { ItemRarity, ItemStatus } from "../../../../../packages/shared/src/types/item.type";
import { Link } from "react-router-dom";
import {
    itemEmojis,
    itemImages,
    itemNameLabels,
    itemRarityLabels,
    itemTypeLabels,
} from "../../utils/itemConstants";
import { ItemModal } from "./ItemModal";
import { useAddItem, useUpdateItem } from "../../api/guildApi";
import { UpdateButton } from "../Buttons/UpdateButton";
import { DeleteButton } from "../Buttons/DeleteButton";
import { ItemStatusBadge } from "../Item/ItemStatusBadge";

export function GuildInventory({ inventory }: { inventory: Item[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<Item | undefined>();
    const addItem = useAddItem();
    const updateItem = useUpdateItem();

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
                <div className="flex flex-col items-end gap-3">
                    <div>
                        <p className="text-sm text-slate-400">Valeur totale</p>
                        <p className="text-xl font-bold text-amber-400">
                            {new Intl.NumberFormat("fr-FR").format(totalValue)} po
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="p-4 border border-slate-700 rounded bg-slate-900 flex flex-col gap-3 hover:cursor-pointer hover:bg-slate-800 transition mb-6"
                onClick={() => {
                    setEditingItem(undefined);
                    setIsModalOpen(true);
                }}
            >
                <div className="flex items-center justify-center gap-2 text-slate-400">
                    <span>+</span>
                    <span>Ajouter un nouvel objet</span>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b border-slate-700">
                        <tr className="text-left text-slate-400 uppercase tracking-wide text-xs">
                            <th className="pb-3 px-2 font-semibold text-center">Icône</th>
                            <th className="pb-3 px-2 font-semibold">Nom</th>
                            <th className="pb-3 px-2 font-semibold">Type</th>
                            <th className="pb-3 px-2 font-semibold">Rareté</th>
                            <th className="pb-3 px-2 font-semibold">Durabilité/Qté</th>
                            <th className="pb-3 px-2 font-semibold text-center">Prix</th>
                            <th className="pb-3 px-2 font-semibold text-center">Statut</th>
                            <th className="pb-3 px-2 font-semibold text-center">Quête</th>
                            <th className="pb-3 px-2 font-semibold text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                        {inventory.map((item) => (
                            <tr
                                key={item.id}
                                className="hover:bg-slate-700/30 transition-colors group"
                            >
                                <td className="py-3 px-2">
                                    <div className="flex items-center justify-center w-8 h-8 mx-auto">
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
                                <td className="py-3 px-2">
                                    <div>
                                        <p className="font-medium text-slate-200">
                                            {itemNameLabels[item.name]}
                                        </p>
                                        <p className="text-xs text-slate-500 truncate max-w-xs">
                                            {item.description}
                                        </p>
                                    </div>
                                </td>
                                <td className="py-3 px-2">
                                    <span className="text-slate-300">
                                        {itemTypeLabels[item.type]}
                                    </span>
                                </td>
                                <td className="py-3 px-2">
                                    <span className={`font-semibold ${rarityColors[item.rarity]}`}>
                                        {itemRarityLabels[item.rarity]}
                                    </span>
                                </td>
                                <td className="py-3 px-2">
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
                                <td className="py-3 px-2 text-center whitespace-nowrap">
                                    <span className="text-amber-400 font-semibold">
                                        {item.price} po
                                    </span>
                                </td>
                                <td className="py-3 px-2 text-center">
                                    <ItemStatusBadge status={item.status} />
                                </td>
                                <td className="py-3 px-2 text-center">
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
                                <td className="py-3 px-2 text-center">
                                    <div className="flex items-center justify-center gap-1">
                                        <UpdateButton
                                            onClick={() => {
                                                setEditingItem(item);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                        <DeleteButton
                                            onClick={() => {
                                                if (
                                                    confirm(`Marquer ${item.name} comme consommé ?`)
                                                ) {
                                                    updateItem.mutate({
                                                        ...item,
                                                        status: ItemStatus.CONSUMED,
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ItemModal
                isOpen={isModalOpen}
                item={editingItem}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingItem(undefined);
                }}
                onSave={(item) => {
                    if (editingItem) {
                        updateItem.mutate(item);
                    } else {
                        addItem.mutate(item);
                    }
                }}
            />
        </div>
    );
}
