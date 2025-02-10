import { ref, computed, watch } from 'vue';
import type { DocumentData } from 'firebase/firestore';
import { useAlertStore } from '@/stores/alert';
import { useFiltersStore } from '../stores/filtersStore';

export function useFilterManager() {
    const filtersStore = useFiltersStore();
    const alertStore = useAlertStore();
    const filteredWords = ref()

    watch(
        () => filtersStore.filtersState.switchLanguage.state.isActive,
        (newValue, oldValue) => {
            if (newValue !== oldValue) {
                changeSwitchLanguage(filteredWords.value);
            }
        }
    )

    watch(
        () => filtersStore.filtersState.switchMix.state.isActive,
        (newValue, oldValue) => {
            if (newValue !== oldValue) {
                changeMix(filteredWords.value);
            }
        }
    )

    const sortType = ref<string>('')

    watch(
        () => filtersStore.filtersState.sortBy.select!.selectedOptions,
        (newValue) => {
            sortType.value = Object.keys(newValue).find(key => newValue[key] === true) ?? 'new';
            changeSort(filteredWords.value, sortType.value);
        },
        { deep: true }
    )

    const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

    const wordPair = computed(() => {
        if (!filteredWords.value) {
            return { word: '', translate: '' };
        }

        const { fromLanguageCode, toLanguageCode } = filteredWords.value[0];
        return filtersStore.filtersState.switchLanguage.state.isActive
            ? {
                word: capitalize(toLanguageCode),
                translate: capitalize(fromLanguageCode),
            }
            : {
                word: capitalize(fromLanguageCode),
                translate: capitalize(toLanguageCode),
            };
    });

    function changeSwitchLanguage(newfilteredWords: DocumentData[]) {
        filteredWords.value = newfilteredWords.map((word) => {
            return {
                ...word,
                word: word.translate,
                translate: word.word
            }
        })
    }

    let originalfilteredWords: DocumentData[] = [];
    let isRandomized = false;

    function changeMix(newfilteredWords: DocumentData[]) {
        if (!originalfilteredWords.length) {
            originalfilteredWords = [...newfilteredWords];
        }

        if (isRandomized) {
            filteredWords.value = [...originalfilteredWords];
        } else {
            if (newfilteredWords.length <= 1) {
                filteredWords.value = [...newfilteredWords]; // Просто оставляем как есть
                alertStore.showAlert('Not enough words to mix!', 'alert--error');
            } else {
                let randomizedList: DocumentData[];

                do {
                    randomizedList = [...newfilteredWords].sort(() => Math.random() - 0.5);
                } while (JSON.stringify(randomizedList) === JSON.stringify(originalfilteredWords));

                filteredWords.value = randomizedList;
            }
        }

        isRandomized = !isRandomized;
    }

    function changeSort(newfilteredWords: DocumentData[], sortType: string) {
        if (sortType === 'new') {
            filteredWords.value = newfilteredWords.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
        }

        if (sortType === 'old') {
            filteredWords.value = newfilteredWords.sort((a, b) => a.createdAt.seconds - b.createdAt.seconds);
        }

        if (sortType === 'longest') {
            filteredWords.value = newfilteredWords.sort((a, b) => b.word.length - a.word.length);
        }

        if (sortType === 'shortest') {
            filteredWords.value = newfilteredWords.sort((a, b) => a.word.length - b.word.length);
        }

        if (sortType === 'alphabet') {
            filteredWords.value = newfilteredWords.sort((a, b) => a.word.localeCompare(b.word));
        }
    }

    function resetFilter(newfilteredWords: DocumentData[]) {
        filteredWords.value = newfilteredWords;
        filtersStore.resetFilterState()
        changeSort(filteredWords.value, sortType.value);
    }

    return {
        filteredWords,
        resetFilter,
        wordPair
    }
}