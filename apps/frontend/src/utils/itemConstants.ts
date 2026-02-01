import { ItemName } from "../../../../packages/shared/src/types/item.type";

import swordImg from "../assets/sword.png";
import axeImg from "../assets/axe.png";
import bowImg from "../assets/bow.png";
import daggerImg from "../assets/dagger.png";
import shieldImg from "../assets/shield.png";
import helmetImg from "../assets/helmet.png";
import chestImg from "../assets/chest.png";

export const itemImages: Record<ItemName, string | null> = {
    [ItemName.SWORD]: swordImg,
    [ItemName.AXE]: axeImg,
    [ItemName.BOW]: bowImg,
    [ItemName.DAGGER]: daggerImg,
    [ItemName.SHIELD]: shieldImg,
    [ItemName.HELMET]: helmetImg,
    [ItemName.ARMOR]: chestImg,
    [ItemName.STAFF]: null,
    [ItemName.HEALING_POTION]: null,
    [ItemName.MAGIC_RING]: null,
    [ItemName.ARROW]: null,
};

export const itemEmojis: Record<ItemName, string> = {
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
