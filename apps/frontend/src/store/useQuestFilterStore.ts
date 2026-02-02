import { create } from "zustand";
import { QuestStatus } from "../../../../packages/shared/src/types/quest.type";
import { AdventurerType } from "../../../../packages/shared/src/types/adventurer.type";

interface FilterState {
    minReward: string;
    maxReward: string;
    minXp: string;
    maxXp: string;
    startDate: string;
    endDate: string;
    selectedStatus: QuestStatus | "";
    clientSearch: string;
    selectedClasses: AdventurerType[];

    setMinReward: (value: string) => void;
    setMaxReward: (value: string) => void;
    setMinXp: (value: string) => void;
    setMaxXp: (value: string) => void;
    setStartDate: (value: string) => void;
    setEndDate: (value: string) => void;
    setSelectedStatus: (value: QuestStatus | "") => void;
    setClientSearch: (value: string) => void;
    setSelectedClasses: (value: AdventurerType[]) => void;
    resetAllFilters: () => void;
}

const initialState = {
    minReward: "",
    maxReward: "",
    minXp: "",
    maxXp: "",
    startDate: "",
    endDate: "",
    selectedStatus: "" as QuestStatus | "",
    clientSearch: "",
    selectedClasses: [] as AdventurerType[],
};

export const useFilterStore = create<FilterState>((set) => ({
    ...initialState,

    setMinReward: (value) => set({ minReward: value }),
    setMaxReward: (value) => set({ maxReward: value }),
    setMinXp: (value) => set({ minXp: value }),
    setMaxXp: (value) => set({ maxXp: value }),
    setStartDate: (value) => set({ startDate: value }),
    setEndDate: (value) => set({ endDate: value }),
    setSelectedStatus: (value) => set({ selectedStatus: value }),
    setClientSearch: (value) => set({ clientSearch: value }),
    setSelectedClasses: (value) => set({ selectedClasses: value }),
    resetAllFilters: () => set(initialState),
}));

// Hook utilitaire pour détecter si des filtres sont actifs
export const useHasActiveQuestFilters = () => {
    const {
        minReward,
        maxReward,
        minXp,
        maxXp,
        startDate,
        endDate,
        selectedStatus,
        clientSearch,
        selectedClasses,
    } = useFilterStore();
    return (
        minReward !== "" ||
        maxReward !== "" ||
        minXp !== "" ||
        maxXp !== "" ||
        startDate !== "" ||
        endDate !== "" ||
        selectedStatus !== "" ||
        clientSearch !== "" ||
        selectedClasses.length > 0
    );
};
