<script setup lang="ts">
import { ref } from 'vue';
import type { TubInterface } from '../interfaces/tubInterface';
import Tub from '../components/Tub.vue';

const props = defineProps<{
    langs: Array<TubInterface>;
    categories: Array<TubInterface>;
    activeLangTub?: number;
    activeCategoryTub?: number;
}>();

const emit = defineEmits<{
    (e: 'updateActiveTub', index: number, type: 'langs' | 'categories'): void;
}>();
</script>

<template>
    <div class="tubs">
        <div class="tubs__section">
            <div class="tubs__list">
                <Tub v-for="(item, index) in langs" :key="index" :item="item" :index="index"
                    :isActive="index === activeLangTub" @updateActiveTub="emit('updateActiveTub', index, 'langs');" />
            </div>
        </div>
        <div class="tubs__section">
            <div class="tubs__list">
                <Tub v-for="(item, index) in categories" :key="index" :item="item" :index="index"
                    :isActive="index === activeCategoryTub"
                    @updateActiveTub="emit('updateActiveTub', index, 'categories');" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tubs {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    &__list {
        display: flex;
        align-items: center;
        gap: 10px;
        overflow-x: scroll;
        margin-left: -15px;
        margin-right: -15px;
        padding-left: 15px;
        padding-right: 15px;

        &::-webkit-scrollbar {
            display: none;
        }
    }

}
</style>
