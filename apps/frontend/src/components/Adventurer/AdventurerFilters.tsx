import { AdventurerType } from "../../../../../packages/shared/src/types/adventurer.type";
import { useState } from "react";
import {
    useAdventurerFilterStore,
    useHasActiveAdventurerFilters,
} from "../../store/useAdventurerFilterStore";
import { AdvancedFiltersContainer } from "../common/AdvancedFiltersContainer";
import { SearchFilter } from "../common/SearchFilter";
import { RangeFilter } from "../common/RangeFilter";
import { SelectFilter } from "../common/SelectFilter";
import { MultiSelectFilter } from "../common/MultiSelectFilter";
import { adventurerStatusOptions, adventurerTypeOptions } from "../../utils/uiConstants";

export function AdventurerFilters() {
    const {
        minXp,
        setMinXp,
        maxXp,
        setMaxXp,
        nameSearch,
        setNameSearch,
        selectedStatus,
        setSelectedStatus,
        selectedTypes,
        setSelectedTypes,
        resetAllFilters,
    } = useAdventurerFilterStore();

    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const hasActiveFilters = useHasActiveAdventurerFilters();

    const toggleType = (typeValue: string) => {
        const type = typeValue as AdventurerType;
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((t) => t !== type));
        } else {
            setSelectedTypes([...selectedTypes, type]);
        }
    };

    return (
        <AdvancedFiltersContainer
            hasActiveFilters={hasActiveFilters}
            onResetFilters={resetAllFilters}
            title="Filtres avancés"
        >
            <SearchFilter
                label="Nom"
                value={nameSearch}
                onChange={setNameSearch}
                placeholder="Rechercher par nom..."
            />

            <RangeFilter
                label="XP"
                minValue={minXp}
                maxValue={maxXp}
                onMinChange={setMinXp}
                onMaxChange={setMaxXp}
                maxWidth="flex-1"
            />

            <SelectFilter
                label="Statut"
                value={selectedStatus}
                onChange={(value) => setSelectedStatus(value as any)}
                options={adventurerStatusOptions}
                placeholder="Tous les statuts"
                width="flex-1"
            />

            <MultiSelectFilter
                label="Types"
                selectedItems={selectedTypes}
                onToggleItem={toggleType}
                options={adventurerTypeOptions}
                placeholder="Sélectionner des types..."
                isOpen={isTypeDropdownOpen}
                onToggleOpen={setIsTypeDropdownOpen}
            />
        </AdvancedFiltersContainer>
    );
}
