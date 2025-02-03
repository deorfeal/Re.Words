import { ref } from 'vue';
import type { DocumentData } from 'firebase/firestore';

export function useMenuManager() {

    const wordsList = ref<DocumentData[]>([])

    const coutsData = ref<Record<string, number>>(
        {
            all: 0,
            repeat: 0,
            learned: 0
        }
    )

    function getCountByDirection(direction: string): number {
        return wordsList.value.filter(item => item.directions[direction] === true).length;
    };

    function getCounts(newWordsList: DocumentData[]): void {
        wordsList.value = newWordsList
        coutsData.value.all = getCountByDirection('all');
        coutsData.value.repeat = getCountByDirection('repeat');
        coutsData.value.learned = getCountByDirection('learned');
    }

    return {
        coutsData,
        getCounts
    }
}
