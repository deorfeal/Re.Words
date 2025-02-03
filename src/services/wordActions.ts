import { getFirestore, updateDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { generateUniqueId } from '@/utils/generateUniqueId';
import { useUserStore } from '@/stores/user';
import { useWordsStore } from '@/stores/wordsStore';
import type { PayloadInterface } from '@/interfaces/payloadInterface';
import type { WordsAddingFormInterface } from '@/interfaces/wordsAddingFormInterface';
import type { DocumentData } from 'firebase/firestore';
import { useAlertStore } from '@/stores/alert';

export async function addWord(form: WordsAddingFormInterface,): Promise<void> {
    const wordsStore = useWordsStore();
    const alertStore = useAlertStore();
    const userStore = useUserStore()
    const db = getFirestore();

    const payload: PayloadInterface = {
        id: generateUniqueId(),
        word: form.word.value,
        translate: form.translate.value,
        fromLanguage: form.languagesState.from.chosenValue.longString,
        fromLanguageCode: form.languagesState.from.chosenValue.shortString,
        toLanguage: form.languagesState.to.chosenValue.longString,
        toLanguageCode: form.languagesState.to.chosenValue.shortString,
        directions: {
            all: true,
            repeat: form.addTo.chosenValue === 'repeat words' ? true : false,
            learned: form.addTo.chosenValue === 'learned words' ? true : false
        },
        category: form.category.value !== '' ? form.category.value : 'Uncategorized',
        createdAt: new Date(),
    };

    if (userStore.userId) {
        try {
            await setDoc(doc(db, `users/${userStore.userId}/words`, payload.id), payload);
            alertStore.showAlert('Word added successfully!', 'alert--success');
            wordsStore.reloadWords();
        } catch (error: any) {
            alertStore.showAlert('Failed to add word: ' + error.message, 'alert--error');
        }
    } else {
        alertStore.showAlert('User not authenticated', 'alert--error');
    }
}

export async function deleteWord(words: DocumentData[]) {
    const wordsStore = useWordsStore();
    const alertStore = useAlertStore();
    const userStore = useUserStore()
    const db = getFirestore();


    if (!userStore.userId) {
        alertStore.showAlert('User not authenticated', 'alert--error');
        return;
    }

    try {
        const deletePromises = words.map(({ id }) =>
            deleteDoc(doc(db, `users/${userStore.userId}/words`, id))
        );

        await Promise.all(deletePromises);
        alertStore.showAlert('Words deleted successfully!', 'alert--success');
        wordsStore.reloadWords();
    } catch (error: any) {
        alertStore.showAlert('Failed to delete words: ' + error.message, 'alert--error');
    }
}

export async function updateWordData(words: DocumentData[], word: string, translate: string) {
    const wordsStore = useWordsStore();
    const alertStore = useAlertStore();
    const userStore = useUserStore()
    const db = getFirestore();


    if (!userStore.userId) {
        alertStore.showAlert('User not authenticated', 'alert--error');
        return;
    }

    try {
        const updatePromises = words.map(({ id }) =>
            updateDoc(doc(db, `users/${userStore.userId}/words`, id), { word, translate })
        );

        await Promise.all(updatePromises); // Делаем обновление всех слов параллельно
        alertStore.showAlert('Words updated successfully!', 'alert--success');
        wordsStore.reloadWords();
    } catch (error: any) {
        alertStore.showAlert('Failed to update words: ' + error.message, 'alert--error');
    }
}

export async function updateWordDirection(words: DocumentData[], key: string) {
    const wordsStore = useWordsStore();
    const alertStore = useAlertStore();
    const userStore = useUserStore()
    const db = getFirestore();


    if (!userStore.userId) {
        alertStore.showAlert('User not authenticated', 'alert--error');
        return;
    }

    const newValue = key === 'repeat'
        ? { 'directions.learned': false, 'directions.repeat': true }
        : { 'directions.repeat': false, 'directions.learned': true };

    try {
        const updatePromises = words.map(({ id }) =>
            updateDoc(doc(db, `users/${userStore.userId}/words`, id), newValue)
        );

        await Promise.all(updatePromises);
        alertStore.showAlert('Words updated successfully!', 'alert--success');
        wordsStore.reloadWords();
    } catch (error: any) {
        alertStore.showAlert('Failed to update words: ' + error.message, 'alert--error');
    }
}
