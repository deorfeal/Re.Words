import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getFirestore, collection, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { useUserStore } from '@/stores/user';
import { useLoaderStore } from '@/stores/loader'
import type { DocumentData } from 'firebase/firestore';

export const useWordsStore = defineStore('wordsStore', () => {
    const loaderStore = useLoaderStore()
    const userStore = useUserStore()
    const db = getFirestore()

    const wordsList = ref<DocumentData[]>([])

    let isDataLoaded = ref<boolean>(false);

    async function getAllIWords(): Promise<void> {
        if (isDataLoaded.value) return;
    
        if (!navigator.onLine) {
            console.error('No internet connection.');
            return;
        }
    
        try {
            const getData = query(collection(db, `users/${userStore.userId}/words`), orderBy('createdAt', 'desc'));
            const listDocs = await getDocs(getData);
            wordsList.value = listDocs.docs.map((doc) => doc.data());
            isDataLoaded.value = true;
            loaderStore.hideLoader();
        } catch (error) {
            console.error('Error fetching data from Firestore:', error);
        }
    }

    async function reloadWords(): Promise<void> {
        isDataLoaded.value = false;
        loaderStore.showLoader()
        await getAllIWords();
    }

    return {
        wordsList,
        getAllIWords,
        reloadWords,
        isDataLoaded,
    }
});
