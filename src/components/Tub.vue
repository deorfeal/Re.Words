<script setup lang="ts">

import type { TubInterface } from '../interfaces/tubInterface';

const props = defineProps<{
    item: TubInterface;
    index: number,
    isActive: boolean
}>();

defineEmits<{
    (e: 'updateActiveTub', index: number): void
}>()
</script>

<template>
    <div class="tubs__tub tub filling" :class="{ 'tub--active': isActive }" @click="$emit('updateActiveTub', index)">
        <div class="tub__text">
            {{ item?.text }}
        </div>
        <div class="tub__quantity">
            {{ item?.count }}
        </div>
    </div>
</template>

<style lang="scss">
.tub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    &--active {
        color: #0A0416;
        background: #fff;
    }

    &__text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
}
</style>