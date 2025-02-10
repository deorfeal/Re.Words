<script setup lang="ts">
import { usePopup } from "@/composables/usePopup";
import Popup from './Popup.vue';
import AddWordForm from './AddWordForm.vue';

const { isPopupVisible, togglePopup } = usePopup(); 
</script>

<template>
    <div class="add" @click="togglePopup">
        <div class="add__icon filling filling--round">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1V13" stroke="white" stroke-width="2" stroke-linecap="round" />
                <path d="M1 7L13 7" stroke="white" stroke-width="2" stroke-linecap="round" />
            </svg>
        </div>
        <Popup :isShow="isPopupVisible">
            <template #header>Add word</template>
            <template #content>
                <AddWordForm @updatePopupVisibility="togglePopup" />
            </template>
        </Popup>
    </div>
</template>

<style lang="scss">
.add {
    position: absolute;
    right: 15px;
    bottom: 30px;
    cursor: pointer;
}
</style>