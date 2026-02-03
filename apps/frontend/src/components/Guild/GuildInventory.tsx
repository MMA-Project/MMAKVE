import { useState } from "react";
import type { Item } from "../../../../../packages/shared/src/types/item.type";
import {
    ItemRarity,
    ItemStatus,
    ItemType,
} from "../../../../../packages/shared/src/types/item.type";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/currency";
import {
    itemEmojis,
    itemImages,
    itemNameLabels,
    itemRarityLabels,
    itemTypeLabels,
} from "../../utils/itemConstants";
import { ItemModal } from "./ItemModal";
import { useAddItem, useUpdateItem, useDeleteItem } from "../../api/guildApi";
import { UpdateButton } from "../Buttons/UpdateButton";
import { DeleteButton } from "../Buttons/DeleteButton";
import { ItemStatusBadge } from "../Item/ItemStatusBadge";
import { SortControls } from "../common/SortControls";
import { SearchFilter } from "../common/SearchFilter";
import { SelectFilter } from "../common/SelectFilter";
import { RangeFilter } from "../common/RangeFilter";
import { AdvancedFiltersContainer } from "../common/AdvancedFiltersContainer";
import { CreateButton } from "../common/CreateButton";
import { useSorting } from "../../hooks/useSorting";

export function GuildInventory({ inventory }: { inventory: Item[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<Item | undefined>();

    // Filtres
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedRarity, setSelectedRarity] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");

    // Tri
    const sortConfig = {
        name: { label: "Nom", getValue: (item: Item) => itemNameLabels[item.name] },
        type: { label: "Type", getValue: (item: Item) => itemTypeLabels[item.type] },
        rarity: { label: "Rareté", getValue: (item: Item) => item.rarity },
        price: { label: "Prix", getValue: (item: Item) => item.price },
        status: { label: "Statut", getValue: (item: Item) => item.status },
    };

    const { sortBy, sortOrder, setSortBy, setSortOrder } = useSorting("name", "asc");

    // Logique de tri manuelle
    const sortedItems = [...inventory].sort((a, b) => {
        const aValue = sortConfig[sortBy as keyof typeof sortConfig]?.getValue(a);
        const bValue = sortConfig[sortBy as keyof typeof sortConfig]?.getValue(b);

        if (aValue === undefined || bValue === undefined) return 0;

        if (typeof aValue === "number" && typeof bValue === "number") {
            return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        }

        const aStr = String(aValue).toLowerCase();
        const bStr = String(bValue).toLowerCase();

        if (sortOrder === "asc") {
            return aStr.localeCompare(bStr);
        } else {
            return bStr.localeCompare(aStr);
        }
    });

    const addItem = useAddItem();
    const updateItem = useUpdateItem();
    const deleteItem = useDeleteItem();

    const handleDeleteItem = (itemId: string, itemName: string, isAvailable: boolean) => {
        if (!isAvailable) return;

        if (window.confirm(`Êtes-vous sûr de vouloir supprimer ${itemName} ?`)) {
            deleteItem.mutate(itemId);
        }
    };

    // Filtrage
    const filteredAndSortedItems = sortedItems.filter((item: Item) => {
        const itemLabel = itemNameLabels[item.name] ?? item.name;
        const matchesSearch =
            !searchTerm ||
            itemLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = !selectedType || item.type === selectedType;
        const matchesRarity = !selectedRarity || item.rarity === selectedRarity;
        const matchesStatus = !selectedStatus || item.status === selectedStatus;
        const matchesMinPrice = !minPrice || item.price >= parseInt(minPrice);
        const matchesMaxPrice = !maxPrice || item.price <= parseInt(maxPrice);

        return (
            matchesSearch &&
            matchesType &&
            matchesRarity &&
            matchesStatus &&
            matchesMinPrice &&
            matchesMaxPrice
        );
    });

    const availableItems = filteredAndSortedItems.filter(
        (item) => item.status === ItemStatus.AVAILABLE,
    );
    const inUseItems = filteredAndSortedItems.filter((item) => item.status === ItemStatus.IN_USE);

    const totalValue = inventory.reduce((sum, item) => sum + item.price, 0);

    // Options pour les selects
    const typeOptions = Object.values(ItemType).map((type) => ({
        value: type,
        label: itemTypeLabels[type],
    }));

    const rarityOptions = Object.values(ItemRarity).map((rarity) => ({
        value: rarity,
        label: itemRarityLabels[rarity],
    }));

    const statusOptions = Object.values(ItemStatus).map((status) => ({
        value: status,
        label:
            status === ItemStatus.AVAILABLE
                ? "Disponible"
                : status === ItemStatus.IN_USE
                  ? "En utilisation"
                  : status === ItemStatus.BROKEN
                    ? "Cassé"
                    : "Inconnu",
    }));

    const hasActiveFilters = Boolean(
        searchTerm || selectedType || selectedRarity || selectedStatus || minPrice || maxPrice,
    );

    const resetFilters = () => {
        setSearchTerm("");
        setSelectedType("");
        setSelectedRarity("");
        setSelectedStatus("");
        setMinPrice("");
        setMaxPrice("");
    };

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
                        {filteredAndSortedItems.length} affichés / {inventory.length} total
                    </p>
                </div>
                <div>
                    <p className="text-sm text-slate-400">Valeur totale</p>
                    <p className="text-xl font-bold text-amber-400">
                        {formatCurrency(totalValue)} po
                    </p>
                </div>
            </div>

            <div className="mb-6">
                <SortControls
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    onSortByChange={(value: string) => setSortBy(value as any)}
                    onSortOrderChange={setSortOrder}
                    sortOptions={Object.entries(sortConfig).map(([value, { label }]) => ({
                        value,
                        label,
                    }))}
                    additionalControls={
                        <AdvancedFiltersContainer
                            hasActiveFilters={hasActiveFilters}
                            onResetFilters={resetFilters}
                        >
                            <div className="grid grid-cols-1 gap-4">
                                <SearchFilter
                                    label="Recherche"
                                    value={searchTerm}
                                    onChange={setSearchTerm}
                                    placeholder="Rechercher un objet..."
                                    icon="🔍"
                                />

                                <SelectFilter
                                    label="Type"
                                    value={selectedType}
                                    onChange={setSelectedType}
                                    options={typeOptions}
                                    placeholder="Tous les types"
                                    icon="⚔️"
                                />

                                <SelectFilter
                                    label="Rareté"
                                    value={selectedRarity}
                                    onChange={setSelectedRarity}
                                    options={rarityOptions}
                                    placeholder="Toutes les raretés"
                                    icon="✨"
                                />

                                <SelectFilter
                                    label="Statut"
                                    value={selectedStatus}
                                    onChange={setSelectedStatus}
                                    options={statusOptions}
                                    placeholder="Tous les statuts"
                                    icon="📊"
                                />

                                <RangeFilter
                                    label="Prix (po)"
                                    minValue={minPrice}
                                    maxValue={maxPrice}
                                    onMinChange={setMinPrice}
                                    onMaxChange={setMaxPrice}
                                    placeholder="Prix"
                                    icon="💰"
                                    type="number"
                                />
                            </div>
                        </AdvancedFiltersContainer>
                    }
                />
            </div>

            <div className="mb-6">
                <CreateButton
                    onClick={() => {
                        setEditingItem(undefined);
                        setIsModalOpen(true);
                    }}
                    title="Ajouter un nouvel objet"
                    hoverColor="amber"
                />
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
                        {filteredAndSortedItems.map((item: Item) => (
                            <tr
                                key={item.id}
                                className="hover:bg-slate-700/30 transition-colors group"
                            >
                                <td className="py-3 px-2">
                                    <div className="flex items-center justify-center w-8 h-8 mx-auto">
                                        {itemImages[item.name] ? (
                                            <img
                                                src={itemImages[item.name]!}
                                                alt={itemNameLabels[item.name] ?? item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-lg">
                                                {itemEmojis[item.name] ?? "📦"}
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="py-3 px-2">
                                    <div>
                                        <p className="font-medium text-slate-200">
                                            {itemNameLabels[item.name] ?? item.name}
                                        </p>
                                        <p className="text-xs text-slate-500 max-w-xs ">
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
                                        {formatCurrency(item.price)} po
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
                                            disabled={item.status === ItemStatus.IN_USE}
                                            title={
                                                item.status === ItemStatus.IN_USE
                                                    ? "Les objets en cours d'utilisation ne peuvent pas être modifiés"
                                                    : "Modifier l'objet"
                                            }
                                        />
                                        <DeleteButton
                                            onClick={() =>
                                                handleDeleteItem(
                                                    item.id,
                                                    itemNameLabels[item.name] ?? item.name,
                                                    item.status === ItemStatus.AVAILABLE,
                                                )
                                            }
                                            disabled={item.status !== ItemStatus.AVAILABLE}
                                            title={
                                                item.status === ItemStatus.AVAILABLE
                                                    ? "Supprimer l'item"
                                                    : "Seuls les items disponibles peuvent être supprimés"
                                            }
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
