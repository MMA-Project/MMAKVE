import {
    AdventurerStatus,
    AdventurerType,
} from "../../../../packages/shared/src/types/adventurer.type";

import adventurerImg from "../assets/adventurer.png";
import alchemyImg from "../assets/alchemy.png";
import archerImg from "../assets/archer.png";
import assasinImg from "../assets/assasin.png";
import barbarianImg from "../assets/barbarian.png";
import druidImg from "../assets/druid.png";
import knightImg from "../assets/knight.png";
import magicianImg from "../assets/magician.png";
import martialImg from "../assets/martial.png";
import priestImg from "../assets/priest.png";
import swordsmanImg from "../assets/swordsman.png";
import wizardImg from "../assets/wizard.png";

export const adventurerImages: Record<AdventurerType, string> = {
    [AdventurerType.WARRIOR]: swordsmanImg,
    [AdventurerType.ARCHER]: archerImg,
    [AdventurerType.BARBARIAN]: barbarianImg,
    [AdventurerType.PALADIN]: knightImg,
    [AdventurerType.ARCANE_MAGE]: wizardImg,
    [AdventurerType.PRIEST]: priestImg,
    [AdventurerType.GEOMANCER]: druidImg,
    [AdventurerType.ALCHEMIST]: alchemyImg,
    [AdventurerType.BLACKSMITH]: martialImg,
    [AdventurerType.ENCHANTER]: magicianImg,
    [AdventurerType.MESSENGER]: adventurerImg,
    [AdventurerType.ROGUE]: assasinImg,
};

export const adventurerTypeLabels: Record<AdventurerType, string> = {
    [AdventurerType.ARCHER]: "Archer",
    [AdventurerType.BARBARIAN]: "Barbare",
    [AdventurerType.PALADIN]: "Paladin",
    [AdventurerType.ARCANE_MAGE]: "Mage des Arcanes",
    [AdventurerType.PRIEST]: "Prêtre",
    [AdventurerType.GEOMANCER]: "Géomancien",
    [AdventurerType.ALCHEMIST]: "Alchimiste",
    [AdventurerType.BLACKSMITH]: "Forgeron",
    [AdventurerType.ENCHANTER]: "Enchanteur",
    [AdventurerType.MESSENGER]: "Messager",
    [AdventurerType.ROGUE]: "Roublard",
    [AdventurerType.WARRIOR]: "Guerrier",
};

export const statusColors: Record<AdventurerStatus, string> = {
    [AdventurerStatus.AVAILABLE]: "bg-green-500",
    [AdventurerStatus.ON_QUEST]: "bg-blue-500",
    [AdventurerStatus.INJURED]: "bg-orange-500",
    [AdventurerStatus.DEAD]: "bg-red-500",
    [AdventurerStatus.RESTING]: "bg-purple-500",
    [AdventurerStatus.LEAVED]: "bg-slate-500",
    [AdventurerStatus.DELETED]: "bg-gray-600",
};

export const statusLabels: Record<AdventurerStatus, string> = {
    [AdventurerStatus.AVAILABLE]: "Disponible",
    [AdventurerStatus.ON_QUEST]: "En quête",
    [AdventurerStatus.INJURED]: "Blessé",
    [AdventurerStatus.DEAD]: "Décédé",
    [AdventurerStatus.RESTING]: "Au repos",
    [AdventurerStatus.LEAVED]: "Parti",
    [AdventurerStatus.DELETED]: "Supprimé",
};
