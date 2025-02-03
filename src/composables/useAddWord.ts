import { ref, watch } from 'vue';
import { validateForm } from '@/utils/validateForm';
import { sortLangs } from '@/utils/sortLangs';
import { allLangs } from '@/constants/allLangs';
import { addWord } from '@/services/wordActions';
import { useWordsStore } from '@/stores/wordsStore';
import { useLoaderStore } from '@/stores/loader';
import type { WordsAddingFormInterface } from '@/interfaces/wordsAddingFormInterface';

export function useAddWord() {
    const wordsStore = useWordsStore();
    const loaderStore = useLoaderStore();

    const form = ref<WordsAddingFormInterface>({
        languagesState: {
            from: { langs: [...Object.keys(allLangs)], chosenValue: { longString: '', shortString: '' }, placeholder: 'From', error: false },
            to: { langs: [...Object.keys(allLangs)], chosenValue: { longString: '', shortString: '' }, placeholder: 'To', error: false }
        },
        word: { value: '', error: false, placeholder: 'Word' },
        translate: { value: '', error: false, placeholder: 'Translate' },
        category: { value: '', placeholder: 'Category' },
        addTo: { directions: ['all words', 'repeat words', 'learned words'], chosenValue: 'all words', placeholder: 'Add to:', error: false }
    });

    const formErrors = ref<Record<string, boolean>>({
        languagesStateFromError: false,
        languagesStateToError: false,
        wordError: false,
        translateError: false,
        addToError: false
    });

    watch(
        () => form.value.languagesState.from.chosenValue.longString,
        (newValue) => {
            const shortWord = allLangs[newValue];
            form.value.languagesState.from.chosenValue.shortString = shortWord;
            form.value.languagesState.to.langs = sortLangs(newValue, true);
        }
    );

    watch(
        () => form.value.languagesState.to.chosenValue.longString,
        (newValue) => {
            const shortWord = allLangs[newValue];
            form.value.languagesState.to.chosenValue.shortString = shortWord;
            form.value.languagesState.from.langs = sortLangs(newValue, false);
        }
    );

    function resetForm() {
        form.value.word.value = '';
        form.value.translate.value = '';
    }

    async function submitForm() {
        const validationResult = validateForm(form.value);

        if (typeof validationResult === 'object' && validationResult !== null) {
            formErrors.value = validationResult;
        } else {
            Object.keys(formErrors.value).forEach((key) => formErrors.value[key] = false);
            try {
                loaderStore.showLoader();
                await addWord(form.value);
                wordsStore.reloadWords();
                resetForm();
            } catch (error) {
                console.error(error);
            } finally {
                loaderStore.hideLoader();
            }
        }
    }

    function replaceLang() {
        const { from, to } = form.value.languagesState;

        // Сохраняем текущие значения from
        const tempFrom = { ...from };

        // Заменяем значения from на to
        form.value.languagesState.from.chosenValue = { ...to.chosenValue };
        form.value.languagesState.from.langs = sortLangs(to.chosenValue.longString, false);

        // Заменяем значения to на ранее сохраненные from
        form.value.languagesState.to.chosenValue = { ...tempFrom.chosenValue };
        form.value.languagesState.to.langs = sortLangs(tempFrom.chosenValue.longString, true);
    }

    return {
        form,
        formErrors,
        submitForm,
        replaceLang
    };
}
