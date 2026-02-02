import { Guild, Bank, Item, ItemName, ItemType, ItemRarity } from "@mmakve/shared";
import { mockAdventurers } from "./adventurer.mock";

const mockItems: Item[] = [
  {
    id: "item1",
    name: ItemName.SWORD,
    description: "A sharp iron sword",
    durability: 100,
    price: 500,
    type: ItemType.WEAPON,
    rarity: ItemRarity.COMMON,
    profiles: [],
  },
  {
    id: "item2",
    name: ItemName.SHIELD,
    description: "A sturdy wooden shield",
    durability: 80,
    price: 300,
    type: ItemType.ARMOR,
    rarity: ItemRarity.UNCOMMON,
    profiles: [],
  },
  {
    id: "item3",
    name: ItemName.HEALING_POTION,
    description: "Restores 50 HP",
    durability: 1,
    price: 100,
    type: ItemType.POTION,
    rarity: ItemRarity.COMMON,
    profiles: [],
  },
];

const mockBanks: Bank[] = [
  {
    balance: 5000,
    transactions: [
      {
        id: "t1",
        name: "Quest Reward",
        amount: 1000,
        date: Date.now() - 86400000,
      },
      {
        id: "t2",
        name: "Item Purchase",
        amount: -200,
        date: Date.now() - 172800000,
      },
    ],
  },
  {
    balance: 8500,
    transactions: [
      {
        id: "t3",
        name: "Guild Contribution",
        amount: 2000,
        date: Date.now() - 259200000,
      },
    ],
  },
  {
    balance: 3200,
    transactions: [
      {
        id: "t4",
        name: "Treasure Found",
        amount: 500,
        date: Date.now() - 345600000,
      },
    ],
  },
];

export const mockGuilds: Guild[] = [
  {
    id: "g1",
    name: "Guilde du Poing de Fer",
    adventurers: [mockAdventurers[0], mockAdventurers[1]],
    bank: mockBanks[0],
    inventory: [mockItems[0], mockItems[2]],
  },
  {
    id: "g2",
    name: "Ordre de Lune d'Argent",
    adventurers: [mockAdventurers[2], mockAdventurers[3], mockAdventurers[4]],
    bank: mockBanks[1],
    inventory: [mockItems[1], mockItems[0]],
  },
  {
    id: "g3",
    name: "Les Chercheurs",
    adventurers: [mockAdventurers[5], mockAdventurers[6]],
    bank: mockBanks[2],
    inventory: [mockItems[2]],
  },
];