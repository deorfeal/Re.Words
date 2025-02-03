<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, watch, unref } from 'vue';
import type { ComputedRef } from '@vue/reactivity';
import { onClickOutside } from '@vueuse/core';

const props = defineProps<{
    options: string[];
    modelValue: string;
    filterExcludeValue?: string;
    placeholder?: string | ComputedRef<string>;
    error?: boolean;
    withSearch?: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const isOpen = ref(false);
const selectRef = ref<HTMLElement | null>(null);
const searchQuery = ref('');

const selectedValue = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value),
});

const selectedText = computed(() =>
    selectedValue.value || props.placeholder
);

const filteredOptions = computed(() => {
    let list = props.options.filter(option => option !== props.filterExcludeValue);
    return props.withSearch ? list.filter(option => option.toLowerCase().includes(searchQuery.value.toLowerCase())) : list;
});

const toggleItems = () => {
    isOpen.value = !isOpen.value;
};

const selectOption = (option: string) => {
    selectedValue.value = option;
    searchQuery.value = option;
    isOpen.value = false;
};

onClickOutside(selectRef, () => (isOpen.value = false));

watch(selectedValue, (newVal) => {
    searchQuery.value = newVal;
});

</script>

<template>
    <div class="form__select select" ref="selectRef">
        <div class="select__custom-select custom-select" :class="{ open: isOpen, 'select--search': props.withSearch }"
            @click="toggleItems">
            <input v-if="props.withSearch" type="text" v-model="searchQuery" :placeholder="unref(props.placeholder)"
                class="select-selected filling" :class="{ 'filling--error': props.error }" @focus="isOpen = true"
                @click.stop />
            <div v-else class="select-selected filling" :class="{ 'filling--error': props.error }">
                {{ placeholder }}
                {{ selectedText }}
            </div>
            <div class="select-items filling filling--without-focus" :class="{ 'filling--error': props.error }">
                <div v-for="option in filteredOptions" :key="option" @click.stop="selectOption(option)"
                    :class="{ selected: option === selectedValue }">
                    <span>{{ option }}</span>
                </div>
            </div>
        </div>
        <select v-model="selectedValue" class="real-select" style="display: none;">
            <option v-for="option in props.options" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>


<style lang="scss">
.select {
    width: 100%;
    cursor: pointer;

    &--search {
        &::before {
            content: '';
            position: absolute;
            width: 1px;
            height: calc(100% - 8px);
            background: rgba(255, 255, 255, 2.5%);
            right: 35px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }

        .select-selected {
            padding-right: 45px;
        }
    }
}

.custom-select {
    position: relative;

    &::after {
        content: '';
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        background-image: url(/images/drop-down.svg);
        background-repeat: no-repeat;
        background-size: contain;
        transition: transform 0.3s;
    }
}

.custom-select.open {
    .select-items {
        opacity: 1;
        pointer-events: unset;
    }

    .select-selected {
        border-radius: 8px 8px 0 0;
        border-bottom: 1px solid transparent;
    }

    &::after {
        transform: translateY(-50%) rotate(-180deg);
    }
}

.select-selected {
    max-height: 42px;
    width: 100%;
    transition: border-radius 0.3s, border 0.3s;
    padding: 12px 35px 12px 12px;
    white-space: nowrap;

    &::placeholder {
        color: rgb(255, 255, 255, 75%);
    }
}

.select-items {
    position: absolute;
    max-height: 220px;
    overflow-y: auto;
    left: 0;
    top: 100%;
    right: 0;
    width: 100%;
    z-index: 1;
    border-radius: 0 0 8px 8px;
    transition: opacity 0.3s;
    padding: unset;
    opacity: 0;
    pointer-events: none;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 2.5%);
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #FFF;
        border-radius: 8px;
    }

    .selected {
        color: #9966CC;
    }
}

.select-items div {
    padding: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 2.5%);
    white-space: nowrap;

    padding: 12px;
    transition: background 0.3s, color 0.3s;

    &:active {
        background: rgba(255, 255, 255, 15%);
    }

    &:last-child {
        border-bottom: unset;
    }

    &:last-child {
        border-bottom: unset;
        text-overflow: ellipsis;
    }
}

.select-hide {
    opacity: 0;
    pointer-events: none;
}

.select-items div:hover {
    // background: #F5F6F8;
}
</style>