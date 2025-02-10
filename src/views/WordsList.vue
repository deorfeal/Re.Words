<script setup lang="ts">
import { computed, onMounted, provide, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import Head from '@/components/Head.vue';
import Search from '@/components/Search.vue';
import Tubs from '@/components/Tubs.vue';
import Words from '@/components/Words.vue';
import Filters from '@/components/Filters.vue';
import AddWordButton from '@/components/AddWordButton.vue';
import Empty from '@/components/Empty.vue';

import { useTubsManager } from '@/composables/useTubsManager';
import { useFilterManager } from '@/composables/useFilterManager';

import { useWordsStore } from '@/stores/wordsStore';
import { useSearchStore } from '@/stores/searchStore';
import type { DocumentData } from 'firebase/firestore';

const route = useRoute();

const wordsStore = useWordsStore();
const searchStore = useSearchStore();

const category = computed(() => route.params.category as 'all' | 'repeat' | 'learned');

const rawWords = computed<DocumentData[]>(() => {
    return wordsStore.wordsList.filter(word => word.directions[category.value]);
});

const {
    changeActiveTub,
    activeLangTub,
    activeCategoryTub,
    langs,
    categories,
    categoryWords,
    refreshCategoriesAndWords
} = useTubsManager();

const { filteredWords, wordPair, resetFilter } = useFilterManager();

onMounted(() => {
    wordsStore.reloadWords();
});

watchEffect(
    () => {
        refreshCategoriesAndWords(rawWords.value, searchStore.selectedWord)
    }
);

watch(
    () => categoryWords.value,
    () => resetFilter(categoryWords.value!)
);

provide('optionsType', category.value);
</script>

<template>
    <div class="wordspage page">
        <div class="container">
            <div class="wordspage__inner">
                <Head :title="`${category[0].toUpperCase() + category.slice(1)} words`" :isBack="true"
                    class="wordspage__head" />
                    <Search class="wordspage__search" />
                <template v-if="rawWords.length > 0">
                    <Tubs class="wordspage__tubs" :langs="langs" :categories="categories" :activeLangTub="activeLangTub || 0"
                        :activeCategoryTub="activeCategoryTub || 0" @updateActiveTub="changeActiveTub" />
                    <Filters :withMix="category === 'repeat'" class="wordspage__filters" :wordPair="wordPair" />
                    <Words class="wordspage__words" :wordsList="filteredWords || []" />
                </template>
                <Empty v-else />
            </div>
        </div>
        <teleport to="body">
            <AddWordButton />
        </teleport>
    </div>
</template>

<style lang="scss">
.wordspage__inner {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: calc(100svh - 60px);
}
</style>
