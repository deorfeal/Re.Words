<script setup lang="ts">
import { inject, computed } from 'vue';

const props = defineProps<{
    optionsPosition?: Record<string, string | undefined>;
    isShow: boolean;
    variant: 'multiple' | 'single'; // Новый пропс, определяющий вариант отображения
}>();

const optionsType = inject<string>('optionsType');

const addValues = computed(() => {
    if (optionsType === 'all') {
        return [
            { optionName: 'Add to learned', optionIcon: `${import.meta.env.BASE_URL}/images/learned-icon.svg` },
            { optionName: 'Add to repeat', optionIcon: `${import.meta.env.BASE_URL}/images/repeat-icon.svg` },
        ];
    }
    if (optionsType === 'repeat') {
        return [{ optionName: 'Add to learned', optionIcon: `${import.meta.env.BASE_URL}/images/learned-icon.svg` }];
    }
    if (optionsType === 'learned') {
        return [{ optionName: 'Add to repeat', optionIcon: `${import.meta.env.BASE_URL}/images/repeat-icon.svg` }];
    }
    return [];
});

const singleOptions = computed(() => [
    { optionName: 'Copy', optionIcon: `${import.meta.env.BASE_URL}/images/copy-icon.svg` },
    ...addValues.value,
    { optionName: 'Edit', optionIcon: `${import.meta.env.BASE_URL}/images/edit-icon.svg` },
    // { optionName: 'Add to category', optionIcon: '/images/plus-icon.svg' },
    { optionName: 'Delete', optionIcon: `${import.meta.env.BASE_URL}/images/delete-icon.svg` },
    { optionName: 'Select', optionIcon: `${import.meta.env.BASE_URL}/images/select-icon.svg` },
]);

const multipleOptions = computed(() => [
    { optionName: 'Copy', optionIcon: `${import.meta.env.BASE_URL}/images/copy-icon.svg` },
    ...addValues.value,
    // { optionName: 'Add to category', optionIcon: '/images/plus-icon.svg' },
    { optionName: 'Delete', optionIcon: `${import.meta.env.BASE_URL}/images/delete-icon.svg` },
]);

const currentOptions = computed(() => (props.variant === 'single' ? singleOptions.value : multipleOptions.value));

const currentPosition = computed(() => {
    if (props.variant === 'single') {
        return props.optionsPosition;
    } else {
        return {
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
        };
    }
});

const emit = defineEmits<{
    (e: 'updateOption', optionName: string): void;
    (e: 'closeOptions'): void
}>();
</script>

<template>
    <Teleport to="body">
        <div class="options">
            <TransitionGroup name="opacity">
                <div key="options-cover" v-if="variant === 'single' && isShow" class="options__cover cover"
                    @pointerdown="emit('closeOptions')">
                </div>
                <div key="options-block" v-if="isShow" class="options-block filling filling--without-focus"
                    :style="currentPosition"
                    :class="{ 'options-block--multiple': variant === 'multiple', 'filling--notblured': variant === 'single' }">
                    <ul class="options-block__list">
                        <li class="options-block__item"
                            :class="{ 'options-block__item--delete': option.optionName === 'Delete' }"
                            v-for="(option, index) in currentOptions" :key="option.optionName"
                            @pointerup="emit('updateOption', option.optionName)">
                            <div v-if="variant === 'single'" class="options-block__text">
                                {{ option.optionName }}
                            </div>
                            <div class="options-block__icon">
                                <img :src="option.optionIcon" alt="icon">
                            </div>
                        </li>
                    </ul>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>

<style lang="scss">
.options-block {
    position: absolute;
    left: 15px;
    width: max-content;
    padding: unset;
    z-index: 2;
    overflow: hidden;

    &--multiple {
        padding-left: unset;
        padding-right: unset;
        width: max-content;

        .options-block__list {
            flex-direction: row;
        }

        .options-block__item {
            padding-left: 12px;
            padding-right: 12px;
            border-right: 1px solid rgba(255, 255, 255, 2.5%);
            border-bottom: unset;

            &:last-child {
                border-right: unset;
            }
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
    }

    &__item {
        border-bottom: 1px solid rgba(#fff, 2.5%);
        display: flex;
        align-items: center;
        gap: 60px;
        cursor: pointer;
        justify-content: space-between;
        padding: 12px;
        transition: background 0.3s;

        &:active {
            background: rgba(255, 255, 255, 15%);
        }

        &--delete {
            color: #FF0000;
        }

        &:last-child {
            border-bottom: unset;
        }
    }

    &__icon {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    // Стили для родительского компонента
    &--parent {
        background: rgba(0, 0, 0, 50%);
        border-radius: 10px;
        padding: 12px;
    }
}
</style>
