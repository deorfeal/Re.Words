<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

import { useMenuManager } from '@/composables/useMenuManager';

import type { MenuItem } from '../interfaces/menuItemInterface';
import type { DocumentData } from 'firebase/firestore';

import { useWordsStore } from '@/stores/wordsStore';

const wordsStore = useWordsStore();
const rawWords = computed<DocumentData[]>(() => wordsStore.wordsList)

const { coutsData, getCounts } = useMenuManager()

const menuItems = ref<MenuItem[]>([
    {
        icon: `${import.meta.env.BASE_URL}/images/all-icon.svg`,
        count: computed(() => coutsData.value.all),
        title: 'All',
        router: '/words/all'
    },
    {
        icon: `${import.meta.env.BASE_URL}/images/repeat-icon.svg`,
        count: computed(() => coutsData.value.repeat),
        title: 'Repeat',
        router: '/words/repeat'
    },
    {
        icon: `${import.meta.env.BASE_URL}/images/learned-icon.svg`,
        count: computed(() => coutsData.value.learned),
        title: 'Learned',
        router: '/words/learned'
    },
])

onMounted(async () => {
    await wordsStore.reloadWords()
    getCounts(rawWords.value)
})

watch(
    () => wordsStore.wordsList,
    () => {
        getCounts(rawWords.value)
    }
)
</script>

<template>
    <nav class="menu">
        <ul class="menu__list menu-list">
            <li v-for="(item, index) in menuItems" :key="index" class="menu-list__item">
                <router-link class="menu-list__link card filling" :to="item.router">
                    <div class="card__head card-head">
                        <div class="card-head__icon filling filling--round">
                            <img class="card-head__icon-img" :src="item.icon" alt="icon" />
                        </div>
                        <div class="card-head__digits digits">
                            <div class="digits__digit">
                                {{ item.count }}
                            </div>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.3148 4.9981L1.12138 8.36512C1.03345 8.45761 0.985075 8.58127 0.985075 8.71312C0.985075 8.84505 1.03345 8.96863 1.12138 9.06127L1.4012 9.35615C1.489 9.44893 1.60635 9.5 1.73141 9.5C1.85647 9.5 1.97369 9.44893 2.06155 9.35615L5.86383 5.34741C5.95204 5.25449 6.00035 5.13032 6 4.99832C6.00035 4.86573 5.95211 4.74171 5.86383 4.64871L2.06509 0.643854C1.97723 0.551074 1.86001 0.5 1.73488 0.5C1.60982 0.5 1.4926 0.551074 1.40467 0.643854L1.12492 0.938732C0.942879 1.13066 0.942879 1.4431 1.12492 1.63495L4.3148 4.9981Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </div>
                    <h2 class="card__title">
                        {{ item.title }}
                    </h2>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.menu {}

.menu-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    &__item {
        &:nth-child(3) {
            grid-area: 2 / 1 / 3 / 3;
        }
    }
}

.card {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:hover {
        .card-head__icon {
            background: rgba(255, 255, 255, 15%);
            border: 1px solid rgba(255, 255, 255, 15%);
        }
    }

    &:active {
        .card-head__icon {
            background: rgba(255, 255, 255, 15%);
            border: 1px solid rgba(255, 255, 255, 15%);
        }
    }

    &__title {}
}

.card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__icon {
        // background: unset;
        backdrop-filter: unset;

        &:hover {
            background: unset;
            border: 1px solid rgba(255, 255, 255, 2.5%);
        }

        &:active {
            background: unset;
            border: 1px solid rgba(255, 255, 255, 2.5%);
        }
    }

    &__icon-img {}
}

.digits {
    display: flex;
    align-items: center;
    gap: 3.5px;

    svg {
        width: 8px;
        height: 12px;
    }

    &__digit {
        font-size: 14px;
        line-height: 14px;
    }
}
</style>
