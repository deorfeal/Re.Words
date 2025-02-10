import { ref, computed } from "vue";
import type { DocumentData } from "firebase/firestore";

export function useWordsSelect() {
    const withCheckboxes = ref(false);
    const checkboxesSelectedMap = ref<Record<number, { state: boolean; word: DocumentData }>>({});

    function updateSelect(index: number, isSelected: boolean, word: DocumentData) {
        if (isSelected) {
            checkboxesSelectedMap.value[index] = { state: true, word };
        } else {
            delete checkboxesSelectedMap.value[index];
        }
        withCheckboxes.value = Object.keys(checkboxesSelectedMap.value).length > 0;
    }

    const selectedWords = computed(() =>
        Object.values(checkboxesSelectedMap.value).map(item => item.word)
    );

    function resetSelect() {
        checkboxesSelectedMap.value = {};
        withCheckboxes.value = false;
    }

    return { withCheckboxes, checkboxesSelectedMap, selectedWords, updateSelect, resetSelect };
}
