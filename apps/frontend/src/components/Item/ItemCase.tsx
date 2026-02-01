import { type Item, ItemType, ItemName } from "../../../../../packages/shared/src/types/item.type";
import { itemRarityColors } from "../../utils/itemRarityColors";

// Import des images
import swordImg from "../../assets/sword.png";
import axeImg from "../../assets/axe.png";
import bowImg from "../../assets/bow.png";
import daggerImg from "../../assets/dagger.png";
import shieldImg from "../../assets/shield.png";
import helmetImg from "../../assets/helmet.png";
import chestImg from "../../assets/chest.png";

const itemImages: Record<ItemName, string | null> = {
    [ItemName.SWORD]: swordImg,
    [ItemName.AXE]: axeImg,
    [ItemName.BOW]: bowImg,
    [ItemName.DAGGER]: daggerImg,
    [ItemName.SHIELD]: shieldImg,
    [ItemName.HELMET]: helmetImg,
    [ItemName.ARMOR]: chestImg,
    [ItemName.STAFF]: null, // Utiliser emoji
    [ItemName.HEALING_POTION]: null, // Utiliser emoji
    [ItemName.MAGIC_RING]: null, // Utiliser emoji
    [ItemName.ARROW]: null, // Utiliser emoji
};

const itemEmojis: Record<ItemName, string> = {
    [ItemName.SWORD]: "⚔️",
    [ItemName.AXE]: "🪓",
    [ItemName.BOW]: "🏹",
    [ItemName.DAGGER]: "🗡️",
    [ItemName.SHIELD]: "🛡️",
    [ItemName.HELMET]: "⛑️",
    [ItemName.ARMOR]: "🦺",
    [ItemName.STAFF]: "🪄",
    [ItemName.HEALING_POTION]: "🧪",
    [ItemName.MAGIC_RING]: "💍",
    [ItemName.ARROW]: "➳",
};

export function ItemCase({ item }: { item: Item }) {
    const imageSrc = itemImages[item.name];
    const emoji = itemEmojis[item.name];

    return (
        <div
            className="w-12 h-12 flex items-center justify-center rounded bg-slate-700"
            style={{
                boxShadow: `inset 0 0 10px ${itemRarityColors[item.rarity]}`,
            }}
            title={`${item.name} - Durabilité: ${item.durability}%`}
        >
            {imageSrc ? (
                <img src={imageSrc} alt={item.name} className="w-8 h-8 object-contain" />
            ) : (
                <span className="text-2xl">{emoji}</span>
            )}
        </div>
    );
}
