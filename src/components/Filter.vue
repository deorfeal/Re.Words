<script lang="ts" setup>
import { ref, watch } from 'vue';
import CustomSelect from './CustomSelect.vue';
import type { FilterItem } from '@/interfaces/filterObjInterface';

const props = defineProps<{
    itemData: FilterItem,
    filterName: string
}>();

const selectedValue = ref<string>(props.itemData.select.startedSelectedOption || '');

const emit = defineEmits<{
    (e: 'chooseFilter', filterName: string): void
    (e: 'chooseSort', selectedValue: string): void
}>()

function chooseFilter(): void {
    if (props.itemData.select.isSelect) return;
    emit('chooseFilter', props.filterName);
}

function chooseSort(): void {
    emit('chooseSort', selectedValue.value);
}

watch(
    () => selectedValue.value,
    () => {
        chooseSort();
    }
)
</script>

<template>
    <div class="filter" @click="chooseFilter()">
        <div class="filter__icon filling filling--round" :class="{ 'filling--active': itemData.state.isActive }">
            <img :src="itemData.icon" alt="icon">
        </div>
        <div class="filter__text" v-if="!itemData.select.isSelect">
            {{ itemData.text }}
        </div>
        <CustomSelect v-if="itemData.select.isSelect" :options="itemData.select.optionsList!" v-model="selectedValue"
            :placeholder="itemData.text" :selectedOptionWithPlaceholder="true" :withSearch="false"/>
    </div>
</template>

<style lang="scss">
.filter {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    cursor: pointer;
    &__icon {
        img {
            width: 16px;
            height: 16px;
            object-fit: contain;
        }
    }

    &__text {
        white-space: nowrap;
    }
}
</style>