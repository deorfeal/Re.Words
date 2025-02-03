import type { DocumentData } from "firebase/firestore";
import { updateWordDirection, updateWordData, deleteWord } from "../services/wordActions";
import { useAlertStore } from '@/stores/alert';

export function useWordOptions() {
    const alertStore = useAlertStore();
    async function copy(words: DocumentData[]) {
        try {
            const textToCopy = words.map(word => `${word.word} - ${word.translate}`).join("\n");

            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(textToCopy);
            } else {
                // Fallback для iOS и старых браузеров
                const textarea = document.createElement("textarea");
                textarea.value = textToCopy;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy"); // Классический метод копирования
                document.body.removeChild(textarea);
            }

            alertStore.showAlert('Copied successfully!', 'alert--success');
        } catch (err) {
            alertStore.showAlert('Copy failed!', 'alert--error');
        }
    }

    async function handleOption(option: string, words: DocumentData[], formData?: Record<string, string>) {
        if (!words.length) return;

        switch (option) {
            case 'Copy':
                copy(words);
                break;
            case 'Add to learned':
                updateWordDirection(words, 'learned');
                break;
            case 'Add to repeat':
                updateWordDirection(words, 'repeat');
                break;
            case 'Edit':
                if (formData) updateWordData(words, formData.word, formData.translation);
                break;
            case 'Delete':
                deleteWord(words);
                break;
            case 'Add to category':
                // Эти опции пока ничего не делают
                break;
        }
    }

    return {
        handleOption
    };
}
