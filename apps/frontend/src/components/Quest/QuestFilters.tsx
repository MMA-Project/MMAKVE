import { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import type { QuestStatus } from "../../../../../packages/shared/src/types/quest.type";
import { useState } from "react";
import { useFilterStore, useHasActiveQuestFilters } from "../../store/useQuestFilterStore";
import { AdvancedFiltersContainer } from "../common/AdvancedFiltersContainer";
import { RangeFilter } from "../common/RangeFilter";
import { SelectFilter } from "../common/SelectFilter";
import { MultiSelectFilter } from "../common/MultiSelectFilter";
import { SearchFilter } from "../common/SearchFilter";
import { questStatusOptions, adventurerTypeOptions } from "../../utils/uiConstants";

export function QuestFilters() {
    const {
        minReward,
        setMinReward,
        maxReward,
        setMaxReward,
        minXp,
        setMinXp,
        maxXp,
        setMaxXp,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        selectedStatus,
        setSelectedStatus,
        clientSearch,
        setClientSearch,
        selectedClasses,
        setSelectedClasses,
        resetAllFilters,
    } = useFilterStore();

    const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
    const hasActiveFilters = useHasActiveQuestFilters();

    const toggleClass = (classType: string) => {
        const type = classType as AdventurerType;
        if (selectedClasses.includes(type)) {
            setSelectedClasses(selectedClasses.filter((c) => c !== type));
        } else {
            setSelectedClasses([...selectedClasses, type]);
        }
    };

    return (
        <AdvancedFiltersContainer
            hasActiveFilters={hasActiveFilters}
            onResetFilters={resetAllFilters}
            title="Filtres avancés"
        >
            <RangeFilter
                label="Prime"
                minValue={minReward}
                maxValue={maxReward}
                onMinChange={setMinReward}
                onMaxChange={setMaxReward}
                icon="💰"
            />

            <RangeFilter
                label="XP requis"
                minValue={minXp}
                maxValue={maxXp}
                onMinChange={setMinXp}
                onMaxChange={setMaxXp}
                icon="⭐"
            />

            <RangeFilter
                label="Date limite"
                minValue={startDate}
                maxValue={endDate}
                onMinChange={setStartDate}
                onMaxChange={setEndDate}
                type="date"
                icon="📅"
                maxWidth="w-full sm:w-auto"
            />

            <SelectFilter
                label="Status"
                value={selectedStatus}
                onChange={(value) => setSelectedStatus(value as QuestStatus | "")}
                options={questStatusOptions}
                placeholder="Tous les status"
                icon="📊"
            />

            <MultiSelectFilter
                label="Classes"
                selectedItems={selectedClasses}
                onToggleItem={toggleClass}
                options={adventurerTypeOptions}
                placeholder="Sélectionner des classes..."
                isOpen={isClassDropdownOpen}
                onToggleOpen={setIsClassDropdownOpen}
                icon="⚔️"
            />

            <SearchFilter
                label="Client"
                value={clientSearch}
                onChange={setClientSearch}
                placeholder="Rechercher un client..."
                icon="👤"
            />
        </AdvancedFiltersContainer>
    );
}
