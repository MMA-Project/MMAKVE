import { Guild } from "@mmakve/shared";
import { mockAdventurers } from "./adventurer.mock";

export const mockGuilds: Guild[] = [
  {
    id: "g1",
    name: "Guilde du Poing de Fer",
    adventurers: [mockAdventurers[0], mockAdventurers[1]],
  },
  {
    id: "g2",
    name: "Ordre de Lune d'Argent",
    adventurers: [mockAdventurers[2], mockAdventurers[3], mockAdventurers[4]],
  },
  {
    id: "g3",
    name: "Les Chercheurs",
    adventurers: [mockAdventurers[5], mockAdventurers[6]],
  },
];