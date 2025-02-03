import { ref, computed } from "vue";
import type { ComputedRef } from "@vue/reactivity";

export function useLongPress(longPressDelay = 250) {
    const longPressTimer = ref<number | null>(null);
    const animationFrame = ref<number | null>(null);
    const pressTime = ref<number>(0);
    const isLongPress = ref<boolean>(false);
    const elementRect = ref<DOMRect | null>(null);

    const scaleValue: ComputedRef<number> = computed(() => {
        return pressTime.value === 0 ? 1 : 1 - pressTime.value / 100;
    });

    const wordPosition: ComputedRef<Record<string, number>> = computed(() => {
        if (!elementRect.value) return { top: 0, translateY: 0 };
        return {
            top: elementRect.value.top,
            translateY: window.innerHeight / 1.8 - (elementRect.value.top + elementRect.value.height / 1.8),
        };
    });

    const wordComputedPosition: ComputedRef<Record<string, string>> = computed(() => {
        return {
            transform: `scale(${scaleValue.value}) translateY(${isLongPress.value ? wordPosition.value.translateY + 'px' : '0'})`
        };
    });

    const optionsPosition: ComputedRef<Record<string, string>> = computed(() => {
        if (!elementRect.value) return { transform: 'translateY(0px)', top: '0px' };
        return {
            transform: `translateY(${wordPosition.value.translateY}px)`,
            top: `${wordPosition.value.top + 48}px`
        };
    });

    const updatePressTime = (): void => {
        pressTime.value += 0.5;
        animationFrame.value = requestAnimationFrame(updatePressTime);
    };

    const handleTouchStart = (event: TouchEvent, ): void => {
        disableLongPress()

        updateTranslateY(event);

        isLongPress.value = false;
        animationFrame.value = requestAnimationFrame(updatePressTime);

        longPressTimer.value = window.setTimeout(() => {
            isLongPress.value = true;
            cancelAnimationFrame(animationFrame.value!);
            pressTime.value = 0;
        }, longPressDelay);
    };

    const disableLongPress = (): void => {
        if (isLongPress.value) {
            isLongPress.value = false;
            return;
        }
    };

    const smoothDecrease = (): void => {
        if (pressTime.value > 0) {
            pressTime.value -= 0.5;
            animationFrame.value = requestAnimationFrame(smoothDecrease);
        } else {
            cancelAnimationFrame(animationFrame.value!);
            animationFrame.value = null;
        }
    };

    const updateTranslateY = (event: TouchEvent): void => {
        const target = event.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        elementRect.value = rect;
    };

    const handleTouchEnd = (): void => {
        if (longPressTimer.value !== null) {
            clearTimeout(longPressTimer.value);
            longPressTimer.value = null;
        }

        cancelAnimationFrame(animationFrame.value!);
        animationFrame.value = null;

        if (!isLongPress.value) {
            animationFrame.value = requestAnimationFrame(smoothDecrease);
        }
    };

    return {
        pressTime,
        isLongPress,
        scaleValue,
        wordPosition,
        handleTouchStart,
        handleTouchEnd,
        disableLongPress,
        wordComputedPosition,
        optionsPosition
    };
}
