<script setup lang="ts">
import { useSearch } from '@/composables/useSearch';

const {
    searchValue,
    filteredWords,
    isOpen,
    dropdownRef,
    toggleDropdown,
    handleSubmit,
    handleWordClick,
} = useSearch();

</script>

<template>
    <div class="search" :class="{ 'search--active': isOpen }">
        <form class="search__form search-form" ref="dropdownRef" action="#" method="post" @click="toggleDropdown">
            <input class="search-form__input filling filling--without-focus" type="text" placeholder="Search"
                v-model="searchValue" />
            <button class="search-form__btn" type="button" @click="handleSubmit">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.74626 12.4959C3.56372 12.4959 1 9.93141 1 6.74794C1 3.56446 3.56372 1 6.74626 1C9.9288 1 12.4925 3.56446 12.4925 6.74794C12.4925 9.93141 9.9288 12.4959 6.74626 12.4959ZM6.74626 1.8843C4.04994 1.8843 1.88404 4.05083 1.88404 6.74794C1.88404 9.44505 4.04994 11.6116 6.74626 11.6116C9.44258 11.6116 11.6085 9.44505 11.6085 6.74794C11.6085 4.05083 9.44258 1.8843 6.74626 1.8843Z"
                        fill="white" />
                    <path d="M11.0313 10.4062L15.0006 14.3767L14.3756 15.0019L10.4062 11.0314L11.0313 10.4062Z"
                        fill="white" />
                </svg>
            </button>
        </form>
        <div class="search__results search-results filling filling--without-focus">
            <ul v-if="filteredWords.length" class="search-results__list results-list">
                <li v-for="(word, index) in filteredWords" :key="index" class="results-list__item">
                    <div class="results-list__link" :to="'/words/all'" @click="handleWordClick(word)">
                        <span>
                            {{ word.word }}
                        </span>
                        <span>
                            {{ word.direction + ' ' + 'words' }}
                        </span>
                    </div>
                </li>
            </ul>
            <p v-else class="search-results__no-results no-results">
                Nothing found
            </p>
        </div>
        <Teleport to="body">
            <Transition name="opacity">
                <div class="search__cover cover" v-if="isOpen" @click="toggleDropdown" key="search-cover"></div>
            </Transition>
        </Teleport>
    </div>
</template>


<style lang="scss">
.search {
    position: relative;

    &--active {
        z-index: 2;

        .search-form__input {
            border-radius: 8px 8px 0 0;
            border-bottom: 1px solid transparent;
        }

        .search-results {
            opacity: 1;
            pointer-events: unset;
        }
    }
}

.search-form {
    position: relative;

    &__input {
        transition: border-radius 0.3s, border-bottom 0.3s;
        max-height: 42px;
    }

    &__btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 16px;
            height: 16px;
        }
    }
}

.search-results {
    position: absolute;
    max-height: 200px;
    overflow-y: auto;
    z-index: 1;
    border-radius: 0 0 8px 8px;
    transition: opacity 0.3s;
    padding: 0;
    opacity: 0;
    pointer-events: none;
    display: block !important;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 2.5%);
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #FFF;
        border-radius: 8px;
    }

    .selected {
        color: #9966CC;
    }
}

.results-list {
    &__item {
        border-bottom: 1px solid rgba(255, 255, 255, 2.5%);
        transition: background 0.3s;

        &:active {
            background: rgba(255, 255, 255, 15%);
        }

        &:hover {
            background: rgba(255, 255, 255, 15%);
        }

        &:last-child {
            border-bottom: unset;
        }
    }

    &__link {
        padding: 12px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        transition: color 0.3s;
        gap: 30px;
        cursor: pointer;

        span {
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 50%;
        }
    }
}

.no-results {
    padding: 12px;
}
</style>
