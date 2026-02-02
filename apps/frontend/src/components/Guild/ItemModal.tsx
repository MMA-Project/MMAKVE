import { useState, useEffect } from "react";
import type { Item } from "../../../../../packages/shared/src/types/item.type";
import {
    ItemName,
    ItemRarity,
    ItemType,
    ItemStatus,
} from "../../../../../packages/shared/src/types/item.type";
import {
    itemImages,
    itemEmojis,
    itemNameLabels,
    itemRarityLabels,
    itemTypeLabels,
} from "../../utils/itemConstants";
import { itemStatusLabels } from "../Item/ItemStatusBadge";

interface ItemModalProps {
    isOpen: boolean;
    item?: Item;
    onClose: () => void;
    onSave: (item: Item) => void;
}

export function ItemModal({ isOpen, item, onClose, onSave }: ItemModalProps) {
    const [formData, setFormData] = useState<Partial<Item>>(
        item || {
            name: ItemName.SWORD,
            type: ItemType.WEAPON,
            rarity: ItemRarity.COMMON,
            status: ItemStatus.AVAILABLE,
            description: "",
            price: 0,
            durability: 100,
            maxDurability: 100,
            isConsumable: false,
            quantity: 1,
        },
    );

    useEffect(() => {
        if (item) {
            setFormData(item);
        } else {
            setFormData({
                name: ItemName.SWORD,
                type: ItemType.WEAPON,
                rarity: ItemRarity.COMMON,
                status: ItemStatus.AVAILABLE,
                description: "",
                price: 0,
                durability: 100,
                maxDurability: 100,
                isConsumable: false,
                quantity: 1,
            });
        }
    }, [item, isOpen]);

    const handleChange = (field: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            id: item?.id || crypto.randomUUID(),
            name: formData.name || ItemName.SWORD,
            type: formData.type || ItemType.WEAPON,
            rarity: formData.rarity || ItemRarity.COMMON,
            status: formData.status || ItemStatus.AVAILABLE,
            description: formData.description || "",
            price: formData.price || 0,
            durability: formData.durability || 100,
            maxDurability: formData.maxDurability || 100,
            isConsumable: formData.isConsumable || false,
            quantity: formData.quantity || 1,
            questId: formData.questId,
        } as Item);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                        {item ? "Modifier l'item" : "Ajouter un item"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-200 transition"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Nom</label>
                        <select
                            value={formData.name || ItemName.SWORD}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                        >
                            {Object.values(ItemName).map((name) => (
                                <option key={name} value={name}>
                                    {itemEmojis[name] || "📦"} {itemNameLabels[name]}
                                </option>
                            ))}
                        </select>
                        <div className="mt-2 flex items-center gap-2">
                            {itemImages[formData.name || ItemName.SWORD] ? (
                                <img
                                    src={itemImages[formData.name || ItemName.SWORD]!}
                                    alt={formData.name}
                                    className="w-10 h-10 object-cover rounded"
                                />
                            ) : (
                                <span className="text-2xl">
                                    {itemEmojis[formData.name || ItemName.SWORD]}
                                </span>
                            )}
                            <span className="text-slate-300 font-medium">
                                {itemNameLabels[formData.name || ItemName.SWORD]}
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Type
                        </label>
                        <select
                            value={formData.type || ItemType.WEAPON}
                            onChange={(e) => handleChange("type", e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                        >
                            {Object.values(ItemType).map((type) => (
                                <option key={type} value={type}>
                                    {itemTypeLabels[type]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Rareté
                        </label>
                        <select
                            value={formData.rarity || ItemRarity.COMMON}
                            onChange={(e) => handleChange("rarity", e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                        >
                            {Object.values(ItemRarity).map((rarity) => (
                                <option key={rarity} value={rarity}>
                                    {itemRarityLabels[rarity]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Statut
                        </label>
                        <select
                            value={formData.status || ItemStatus.AVAILABLE}
                            onChange={(e) => handleChange("status", e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                        >
                            {Object.values(ItemStatus).map((status) => (
                                <option key={status} value={status}>
                                    {itemStatusLabels[status]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Description
                        </label>
                        <textarea
                            value={formData.description || ""}
                            onChange={(e) => handleChange("description", e.target.value)}
                            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                            rows={2}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Prix
                        </label>
                        <input
                            type="number"
                            value={formData.price || 0}
                            onChange={(e) => handleChange("price", parseInt(e.target.value))}
                            className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Durabilité
                            </label>
                            <input
                                type="number"
                                value={formData.durability || 100}
                                onChange={(e) =>
                                    handleChange("durability", parseInt(e.target.value))
                                }
                                disabled={formData.isConsumable}
                                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 disabled:opacity-50"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Durabilité Max
                            </label>
                            <input
                                type="number"
                                value={formData.maxDurability || 100}
                                onChange={(e) =>
                                    handleChange("maxDurability", parseInt(e.target.value))
                                }
                                disabled={formData.isConsumable}
                                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500 disabled:opacity-50"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isConsumable"
                            checked={formData.isConsumable || false}
                            onChange={(e) => handleChange("isConsumable", e.target.checked)}
                            className="cursor-pointer"
                        />
                        <label
                            htmlFor="isConsumable"
                            className="text-sm font-medium text-slate-300 cursor-pointer"
                        >
                            Consommable
                        </label>
                    </div>

                    {formData.isConsumable && (
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Quantité
                            </label>
                            <input
                                type="number"
                                value={formData.quantity || 1}
                                onChange={(e) => handleChange("quantity", parseInt(e.target.value))}
                                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-slate-100 focus:outline-none focus:border-blue-500"
                                min="1"
                            />
                        </div>
                    )}

                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
                        >
                            {item ? "Modifier" : "Créer"}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium py-2 rounded transition"
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
