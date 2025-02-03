<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { useLongPress } from "@/composables/useLongPress";
import { useWordOptions } from "@/composables/useWordOptions";
import { usePopup } from "@/composables/usePopup";
import type { DocumentData } from "firebase/firestore";
import WordOptions from "./WordOptions.vue";
import Popup from "./Popup.vue";
import EditWord from "./EditWord.vue";

const props = defineProps<{
    word: DocumentData;
    index: number;
    id: number;
    isSelected: boolean,
    withCheckbox: boolean,
    isActive: boolean
}>();

const emit = defineEmits<{
    (e: 'updateSelect', index: number, isSelected: boolean, word: DocumentData): void
    (e: 'updateActiveWordRef', wordRef: HTMLElement): void
}>();

const { isPopupVisible, togglePopup } = usePopup();

const { isLongPress, handleTouchStart, handleTouchEnd, disableLongPress, wordComputedPosition, optionsPosition } = useLongPress();
const { handleOption } = useWordOptions()

function updateOption(optionName: string, formData?: Record<string, string>) {
    const wordsArray = [props.word];
    if (optionName === 'Select') {
        emit('updateSelect', props.index, !props.isSelected, props.word)
    } else if (optionName === 'Edit' && !formData) {
        togglePopup();
        setTimeout(disableLongPress, 500);
        return;
    } else {
        handleOption(optionName, wordsArray, formData);
    }

    disableLongPress();
}

const touchStartY = ref(0);
const isScrolling = ref(false);

const startTouchEvent = (event: TouchEvent, type: 'start' | 'end') => {
    if (props.withCheckbox) return;

    if (type === 'start') {
        isScrolling.value = false;
        touchStartY.value = event.touches[0].clientY;
        handleTouchStart(event);
    }

    if (type === 'end') {
        handleTouchEnd();
    }
};

// Отслеживаем движение пальца
const handleTouchMove = (event: TouchEvent) => {
    const moveY = event.touches[0].clientY;
    if (Math.abs(moveY - touchStartY.value) > 10) {
        isScrolling.value = true;
        disableLongPress();
    }
};

const wordRef = ref<HTMLElement | null>(null);

const updateActiveWordRef = () => {
    if (props.isActive && wordRef.value) {
        emit('updateActiveWordRef', wordRef.value);
    }
};

onMounted(() => {
    updateActiveWordRef();
});

watch(
    () => props.isActive,
    (newValue) => {
        if (newValue) {
            updateActiveWordRef();
        }
    }
);

</script>

<template>
    <div class="word" :class="{ 'word--active': isLongPress }" ref="wordRef">
        <div class="word__checkbox checkbox filling filling--round" v-if="withCheckbox"
            @click="emit('updateSelect', index, !isSelected, word)">
            <Transition name="opacity">
                <svg v-if="isSelected" width="16" height="12" viewBox="0 0 16 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 6.0013L6.08333 9.83464L13.75 2.16797" stroke="#EEEEEE" stroke-width="3"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Transition>
        </div>
        <div class="word__inner filling" :class="{ 'filling--active': isActive }"
            @touchstart="startTouchEvent($event, 'start')" @touchend="startTouchEvent($event, 'end')"
            @touchmove="handleTouchMove" :style="wordComputedPosition">
            <div class="word__raw">
                <span class="word__index">
                    {{ index + 1 + '.' }}
                </span>
                <span>
                    {{ word.word }}
                </span>
            </div>
            <div class="word__translate">
                {{ word.translate }}
            </div>
        </div>
        <WordOptions :isShow="isLongPress" :optionsPosition="optionsPosition" @updateOption="updateOption"
            @closeOptions="disableLongPress" variant="single" />
        <Popup :isShow="isPopupVisible">
            <template #header>Edit word</template>
            <template #content>
                <EditWord @updatePopupVisibility="togglePopup" @updateWord="updateOption('Edit', $event)" />
            </template>
        </Popup>
    </div>
</template>


<style lang="scss">
.word {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    &--active {
        z-index: 2;
        pointer-events: none;
    }

    &__inner {
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: space-between;
    }

    &__raw {
        display: flex;
        align-items: center;
        gap: 5px;
        max-width: 50%;
        width: max-content;
        flex-grow: 1;
        span {
            max-width: 75%;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    &__index {}

    &__translate {
        text-overflow: ellipsis;
        max-width: 50%;
        overflow: hidden;
        width: max-content;
        flex-grow: 1;
    }

    &__cover {}
}
</style>