import { ref, computed } from 'vue';

import type { TubInterface } from '../interfaces/tubInterface';
import type { DocumentData } from 'firebase/firestore';

export function useTubsManager() {
    const rawWords = ref<DocumentData[]>([])
    const categoryWords = ref<DocumentData[]>()

    const categories = ref<TubInterface[]>([]);
    const langs = ref<TubInterface[]>([]);

    const activeLangTub = ref<number>(0);
    const activeCategoryTub = ref<number>(0);

    function changeActiveTub(index: number, type: 'langs' | 'categories'): void {
        if (type === 'langs') {
            activeLangTub.value = index;
            activeCategoryTub.value = 0
        } else {
            activeCategoryTub.value = index;
        }

        loadCategories();
        filterWordsByCategory(categories.value[activeCategoryTub.value]?.ids || []);
    }

    function capitalize(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const getLanguagePairs = computed(() => {
        const pairsMap: Record<string, { count: number; ids: string[] }> = {};
        rawWords.value.forEach(({ fromLanguage, toLanguage, id }) => {
            const pairKey = `${fromLanguage.trim()} - ${toLanguage.trim()}`;
            if (!pairsMap[pairKey]) {
                pairsMap[pairKey] = { count: 0, ids: [] };
            }
            pairsMap[pairKey].count++;
            pairsMap[pairKey].ids.push(id);
        });
        return Object.entries(pairsMap).map(([pair, { count, ids }]): TubInterface => ({
            text: pair,
            count,
            ids,
        }));
    });

    const getCategoryItems = computed(() => {
        const categoriesMap: Record<string, { count: number; ids: string[] }> = {};
        rawWords.value.forEach(({ category, fromLanguage, toLanguage, id }) => {
            const categoryKey = `${category.trim().toLowerCase()}|${fromLanguage.trim()}-${toLanguage.trim()}`;
            if (!categoriesMap[categoryKey]) {
                categoriesMap[categoryKey] = { count: 0, ids: [] };
            }
            categoriesMap[categoryKey].count++;
            categoriesMap[categoryKey].ids.push(id);
        });
        return Object.entries(categoriesMap).map(([key, { count, ids }]): TubInterface => {
            const [category, pair] = key.split('|');
            return { text: capitalize(category), count, ids };
        });
    });

    function loadCategories(): void {
        try {
            const rawCategories = getCategoryItems.value;
            const rawLangs = getLanguagePairs.value;

            if (activeLangTub.value >= rawLangs.length) {
                activeLangTub.value = Math.max(rawLangs.length - 1, 0);
            }

            const activeLangIds = new Set(rawLangs[activeLangTub.value]?.ids || []);

            categories.value = rawCategories.filter(item =>
                item.ids.some(categoryId => activeLangIds.has(categoryId))
            );

            langs.value = rawLangs;

            if (activeCategoryTub.value >= categories.value.length) {
                activeCategoryTub.value = Math.max(categories.value.length - 1, 0);
            }
        } catch (error) {
            console.error('Ошибка при загрузке категорий и языков:', error);
        }
    }

    function filterWordsByCategory(categoryIds: string[]): void {
        categoryWords.value = rawWords.value.filter(item =>
            categoryIds.some(id => item.id.includes(id))
        );
    }

    function loadCategoriesBySearchedWord(searchedWord: DocumentData): void {
        try {
            const rawCategories = getCategoryItems.value || [];
            const rawLangs = getLanguagePairs.value || [];

            const wordPair = `${searchedWord.fromLanguage.trim()} - ${searchedWord.toLanguage.trim()}`;
            const langIndex = rawLangs.findIndex(lang => lang.text === wordPair);
            if (langIndex !== -1) {
                activeLangTub.value = langIndex;
            }

            langs.value = rawLangs;

            const activeLangIds = new Set(rawLangs[activeLangTub.value]?.ids || []);
            categories.value = rawCategories.filter(category =>
                category.ids.some(id => activeLangIds.has(id))
            );

            const wordCategory = searchedWord.category.trim();
            const categoryIndex = categories.value.findIndex(category => category.text === wordCategory);
            if (categoryIndex !== -1) {
                activeCategoryTub.value = categoryIndex;
            }
        } catch (error) {
            console.error('Ошибка при загрузке категорий и языков:', error);
        }
    }

    function refreshCategoriesAndWords(newWords: DocumentData[], searchedWord?: DocumentData): void {
        if (newWords.length > 0) {
            rawWords.value = newWords;
    
            if (searchedWord && Object.keys(searchedWord).length > 0) {
                loadCategoriesBySearchedWord(searchedWord);
            } else {
                loadCategories();
            }
    
            // Убеждаемся, что activeCategoryTub не выходит за границы массива
            activeCategoryTub.value = categories.value.length > 0 ? activeCategoryTub.value : 0;
            activeLangTub.value = langs.value.length > 0 ? activeLangTub.value : 0;
    
            if (categories.value.length > 0) {
                filterWordsByCategory(categories.value[activeCategoryTub.value]?.ids || []);
            } else {
                categoryWords.value = [];
            }
    
        } else {
            rawWords.value = [];
            categories.value = [];
            langs.value = [];
            categoryWords.value = [];
    
            // Сброс табов, если нет данных
            activeLangTub.value = 0;
            activeCategoryTub.value = 0;
        }
    }
    
    
    return {
        categories,
        langs,
        loadCategories,
        activeLangTub,
        activeCategoryTub,
        changeActiveTub,
        categoryWords,
        refreshCategoriesAndWords
    };
}