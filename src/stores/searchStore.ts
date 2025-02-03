import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { DocumentData } from 'firebase/firestore';

export const useSearchStore = defineStore('search', () => {
    const selectedWord = ref<DocumentData>();

    function setWord(word: DocumentData) {
        selectedWord.value = word;
    }
    function clearWord() {
        selectedWord.value = {};
    }
    return {
        selectedWord,
        setWord,
        clearWord
    };
});
