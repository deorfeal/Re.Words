import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { FiltersStateInterface } from '../interfaces/filtersStateInterface';

export const useFiltersStore = defineStore('filtersStore', () => {
    const filtersState = ref<Record<string, FiltersStateInterface>>({
        switchLanguage: {
            state: {
                isActive: false
            }
        },
        sortBy: {
            state: {
                isActive: true
            },
            select: {
                selectedOptions: {
                    new: true,
                    old: false,
                    longest: false,
                    shortest: false,
                    alphabet: false
                }
            }
        },
        switchMix: {
            state: {
                isActive: false
            }
        }
    });


    function resetFilterState(): void {
        filtersState.value.switchLanguage.state.isActive = false
        filtersState.value.switchMix.state.isActive = false
    }

    function switchFilter(filterName: string): void {
        filtersState.value[filterName].state.isActive = !filtersState.value[filterName].state.isActive;
    }

    function switchSortOption(option: string): void {
        const selectedOptions = filtersState.value.sortBy.select!.selectedOptions

        for (let item of Object.keys(selectedOptions)) {
            selectedOptions[item] = false;
        }

        selectedOptions[option] = !selectedOptions[option];
    }

    return {
        filtersState,
        switchFilter,
        resetFilterState,
        switchSortOption
    }
});

