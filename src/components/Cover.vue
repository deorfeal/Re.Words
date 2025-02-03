<script setup lang="ts">
const emit = defineEmits<{
    (e: 'touchstart'): void,
    (e: 'click'): void
}>()
</script>

<template>
    <div class="cover" @click="emit('click')" @touchstart="emit('touchstart')" key="word-cover"></div>
</template>
<style lang="scss">
.cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 50%);
    backdrop-filter: blur(25rem);
    z-index: 1;
}
</style>