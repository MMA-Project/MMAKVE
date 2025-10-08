export enum AdventurerType {
  ARCHER,
  BARBARIAN,
  PALADIN,
  ARCANE_MAGE,
  PRIEST,
  GEOMANCER,
  ALCHEMIST,
  BLACKSMITH,
  ENCHANTER,
  MESSENGER,
}

export type Adventurer = {
  id: number;

  name: string;
  type: AdventurerType;
  status: "available" | "on_quest" | "injured" | "dead" | "sleeping";
  xp: number;
};

export type AdventurerCreation = Omit<Adventurer, "id" | "status" | "xp">;
