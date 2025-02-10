<script setup lang="ts">
import { watch, onMounted, nextTick } from "vue";
import type { DocumentData } from "firebase/firestore";
import { useWordOptions } from "@/composables/useWordOptions";
import { useWordsSelect } from "@/composables/useWordsSelect";
import { useSearchStore } from '@/stores/searchStore';
import Word from "./Word.vue";
import WordOptions from "./WordOptions.vue";

const searchStore = useSearchStore();

const props = defineProps<{ wordsList: DocumentData[] }>();

const { handleOption } = useWordOptions();
const { withCheckboxes, selectedWords, resetSelect, updateSelect, checkboxesSelectedMap } = useWordsSelect();

watch(
    () => props.wordsList,
    () => {
        resetSelect();
    }
)

function handleUpdateActiveWordRef(wordRef: HTMLElement) {
    wordRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
    setTimeout(() => {
        searchStore.clearWord();
    }, 2000);
}
</script>

<template>
    <div class="words">
        <ul class="words__list words-list">
            <li v-for="(item, index) in wordsList" :key="index" class="words-list__item">
                <Word :word="item" :index="index" :id="+item.id" class="words-list__word"
                    :class="{ 'is-active': item.id === searchStore.selectedWord?.id }" @updateSelect="updateSelect"
                    :isSelected="checkboxesSelectedMap[index]?.state ?? false" :withCheckbox="withCheckboxes"
                    :isActive="item.id === searchStore.selectedWord?.id ? true : false"
                    @updateActiveWordRef="handleUpdateActiveWordRef" />
            </li>
        </ul>
        <WordOptions :isShow="withCheckboxes" @updateOption="handleOption($event, selectedWords)" variant="multiple" />
    </div>
</template>


<style lang="scss">
.words {
    display: flex;
    flex-direction: column;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        width: 5px;
        border-radius: 90px;
        height: 100%;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 2.5%);
    }

}

.words-list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: calc(100svh - 351px);
    overflow-y: auto;
    padding-right: 15px;

    &::-webkit-scrollbar {
        border-radius: 90px;
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 90px;
        background: unset;
    }

    &::-webkit-scrollbar-thumb {
        background: #fff;
        border-radius: 90px;
    }
}

.words-list__item {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}
</style>