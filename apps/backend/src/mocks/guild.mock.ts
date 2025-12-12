import { Guild } from "@mmakve/shared";
import { mockAdventurers } from "./adventurer.mock";

export const mockGuilds: Guild[] = [
  {
    id: "g1",
    name: "Iron Fist Guild",
    adventurers: [mockAdventurers[0], mockAdventurers[1]],
  },
  {
    id: "g2",
    name: "Silvermoon Order",
    adventurers: [mockAdventurers[2], mockAdventurers[3], mockAdventurers[4]],
  },
  {
    id: "g3",
    name: "The Seekers",
    adventurers: [mockAdventurers[5], mockAdventurers[6]],
  },
];