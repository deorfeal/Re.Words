<script setup lang="ts">
const props = defineProps<{
    isShow: boolean
}>()
</script>

<template>
    <Teleport to="body">
        <Transition name="opacity"> 
            <div class="popup" key="addPopup" v-if="isShow">
                <div class="container">
                    <div class="popup__inner">
                        <h2 class="popup__title">
                            <slot name="header"></slot>
                        </h2>
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style lang="scss">
.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: linear-gradient(-168.857deg, #2A2A2E 11%, #2B125A 47%, #000000 100%);
}

.popup__title {
    margin-bottom: 15px;
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    line-height: 28px
}

.popup__inner {
    padding: 30px 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>