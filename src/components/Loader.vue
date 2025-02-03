<script setup lang="ts">
import { useLoaderStore } from '@/stores/loader'
import { computed } from 'vue'

const loaderStore = useLoaderStore()
const isLoading = computed(() => loaderStore.isLoading)
</script>

<template>
    <Transition name="opacity">
        <div v-if="isLoading" class="loader">
            <div class="loader__inner">
                <div class="loader__circle"></div>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss">
.loader {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background: rgba(#000000, 50%);
    backdrop-filter: blur(25px);
}

.loader__circle {
    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #fff;
    --_m:
        conic-gradient(#0000 10%, #000),
        linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
}

@keyframes l3 {
    to {
        transform: rotate(1turn);
    }
}
</style>