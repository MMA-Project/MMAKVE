import { create } from "zustand";
import {
    AdventurerStatus,
    AdventurerType,
} from "../../../../packages/shared/src/types/adventurer.type";

interface AdventurerFilterState {
    minXp: string;
    maxXp: string;
    nameSearch: string;
    selectedStatus: AdventurerStatus | "";
    selectedTypes: AdventurerType[];

    setMinXp: (value: string) => void;
    setMaxXp: (value: string) => void;
    setNameSearch: (value: string) => void;
    setSelectedStatus: (value: AdventurerStatus | "") => void;
    setSelectedTypes: (value: AdventurerType[]) => void;
    resetAllFilters: () => void;
}

const initialState = {
    minXp: "",
    maxXp: "",
    nameSearch: "",
    selectedStatus: "" as AdventurerStatus | "",
    selectedTypes: [] as AdventurerType[],
};

export const useAdventurerFilterStore = create<AdventurerFilterState>((set) => ({
    ...initialState,

    setMinXp: (value) => set({ minXp: value }),
    setMaxXp: (value) => set({ maxXp: value }),
    setNameSearch: (value) => set({ nameSearch: value }),
    setSelectedStatus: (value) => set({ selectedStatus: value }),
    setSelectedTypes: (value) => set({ selectedTypes: value }),
    resetAllFilters: () => set(initialState),
}));
