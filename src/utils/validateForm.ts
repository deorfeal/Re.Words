import type { WordsAddingFormInterface } from '../interfaces/wordsAddingFormInterface';

import { useAlertStore } from '@/stores/alert';

interface FieldToValidate {
    field: {
        chosenValue?: string | { longString?: string };
        value?: string;
        error?: boolean;
    };
    errorMessage: string;
}

export function validateForm(form: WordsAddingFormInterface): boolean | Record<string, boolean> {
    const alertStore = useAlertStore();
    let isValid = true;

    const errors: Record<string, boolean> = {
        languagesStateFromError: false,
        languagesStateToError: false,
        wordError: false,
        translateError: false,
        addToError: false
    };

    const fieldsToValidate: FieldToValidate[] = [
        { field: form.languagesState.from, errorMessage: 'Please select a language: from' },
        { field: form.languagesState.to, errorMessage: 'Please select a language: to' },
        { field: form.word, errorMessage: 'Please enter a word' },
        { field: form.translate, errorMessage: 'Please enter a translation' },
        { field: form.addTo, errorMessage: 'Please select a direction' }
    ];

    fieldsToValidate.forEach(({ field, errorMessage }) => {
        let isEmpty = (typeof field.chosenValue === 'string' ? !field.chosenValue : !field.chosenValue?.longString) && !field.value;


        // Специальная проверка для addTo, так как chosenValue — строка
        if (field === form.addTo) {
            isEmpty = !form.addTo.chosenValue;
        }

        if (isEmpty) {
            isValid = false;
            alertStore.showAlert(errorMessage, 'alert--error');

            // Запись ошибки в объект ошибок
            if (field === form.languagesState.from) errors.languagesStateFromError = true;
            if (field === form.languagesState.to) errors.languagesStateToError = true;
            if (field === form.word) errors.wordError = true;
            if (field === form.translate) errors.translateError = true;
            if (field === form.addTo) errors.addToError = true;
        }
    });

    return isValid ? true : errors;
}
