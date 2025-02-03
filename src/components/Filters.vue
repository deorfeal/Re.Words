<script lang="ts" setup>
import { ref, computed } from 'vue';
import Filter from './Filter.vue';
import type { FiltersObjInterface } from '@/interfaces/filterObjInterface';

import { useFiltersStore } from '@/stores/filtersStore';
const filtersStore = useFiltersStore();

const props = defineProps<{
    wordPair: Record<string, string>,
    withMix: boolean;
}>()

const filtersData = ref<FiltersObjInterface>({
    switchLanguage: {
        state: {
            isShowed: true,
            isActive: computed(() => filtersStore.filtersState.switchLanguage.state.isActive)
        },
        select: {
            isSelect: false
        },
        icon: `${import.meta.env.BASE_URL}/images/replace-icon.svg`,
        text: computed(() => `${props.wordPair.word} - ${props.wordPair.translate}`)
    },
    sortBy: {
        state: {
            isShowed: true,
            isActive: computed(() => filtersStore.filtersState.sortBy.state.isActive)
        },
        select: {
            isSelect: true,
            optionsList: ['new', 'old', 'longest', 'shortest', 'alphabet'],
            startedSelectedOption: 'new'
        },
        icon: `${import.meta.env.BASE_URL}/images/sort-icon.svg`,
        text: 'Sort by:'
    },
    switchMix: {
        state: {
            isShowed: props.withMix,
            isActive: computed(() => filtersStore.filtersState.switchMix.state.isActive)
        },
        select: {
            isSelect: false
        },
        icon: `${import.meta.env.BASE_URL}/images/mix-icon.svg`,
        text: 'Mix'
    }
})


function chooseFilter(filterName: string) {
    filtersStore.switchFilter(filterName);
}

function chooseSort(selectedValue: string) {
    filtersStore.switchSortOption(selectedValue)
}
</script>

<template>
    <div class="filters">
        <ul class="filters__list filters-list">
            <li v-for="(item, key) in filtersData" :key="key" class="filters-list__item">
                <Filter class="filters-list__filter" v-if="item && item.state.isShowed" :itemData="item"
                    @chooseFilter="chooseFilter" @chooseSort="chooseSort" :filterName="key"
                    :startedSelectedOption:="item.select.startedSelectedOption" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.filters {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    margin-right: -15px;
    margin-left: -15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 206px;
    margin-bottom: -206px;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }
}

.filters-list {
    display: flex;
    align-items: center;
    gap: 15px;
    width: max-content;
}
</style>