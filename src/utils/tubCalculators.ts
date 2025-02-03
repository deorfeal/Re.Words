import type { DocumentData } from 'firebase/firestore';
import type { TubInterface } from '../interfaces/tubInterface';

function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function calculateLanguagePairs(rawWords: DocumentData[]): TubInterface[] {
    const pairsMap: Record<string, { count: number; ids: string[] }> = {};
    rawWords.forEach(({ fromLanguage, toLanguage, id }) => {
        const pairKey = `${fromLanguage.trim()} - ${toLanguage.trim()}`;
        if (!pairsMap[pairKey]) {
            pairsMap[pairKey] = { count: 0, ids: [] };
        }
        pairsMap[pairKey].count++;
        pairsMap[pairKey].ids.push(id);
    });
    return Object.entries(pairsMap).map(([pair, { count, ids }]) => ({
        text: pair,
        count,
        ids,
    }));
}

export function calculateCategoryItems(rawWords: DocumentData[]): TubInterface[] {
    const categoriesMap: Record<string, { count: number; ids: string[] }> = {};
    rawWords.forEach(({ category, fromLanguage, toLanguage, id }) => {
        const categoryKey = `${category.trim().toLowerCase()}|${fromLanguage.trim()}-${toLanguage.trim()}`;
        if (!categoriesMap[categoryKey]) {
            categoriesMap[categoryKey] = { count: 0, ids: [] };
        }
        categoriesMap[categoryKey].count++;
        categoriesMap[categoryKey].ids.push(id);
    });
    return Object.entries(categoriesMap).map(([key, { count, ids }]) => {
        const [category] = key.split('|');
        return {
            text: capitalize(category),
            count,
            ids,
        };
    });
}
