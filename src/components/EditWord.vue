<script setup lang="ts">

import { ref } from 'vue';

import { useAlertStore } from '@/stores/alert';
const alertStore = useAlertStore();

const emit = defineEmits<{
    (e: 'updatePopupVisibility'): void // Emit on click
    (e: 'updateWord', formData: Record<string, string>): void // Emit on click
}>()

const formData = ref<Record<string, string>>({
    word: '',
    translation: ''
})

const errors = ref<Record<string, boolean>>({
    wordError: false,
    translateError: false
})

function checkErrors() {
    if (formData.value.word.length === 0) {
        errors.value.wordError = true
        alertStore.showAlert('Word is empty', 'alert--error')
    } else {
        errors.value.wordError = false;
    }

    if (formData.value.translation.length === 0) {
        errors.value.translateError = true
        alertStore.showAlert('Translation is empty', 'alert--error')
    } else {
        errors.value.translateError = false;
    }

    return errors.value.wordError || errors.value.translateError
}

function updateWord() {
    const errors = checkErrors()
    if (!errors) {
        emit('updateWord', formData.value);
        emit('updatePopupVisibility');
    }
}

</script>

<template>
    <div class="edit">
        <form class="edit__form form">
            <div class="form__box form-box">
                <input class="form-box__input filling filling--input filling--notblured"
                    :class="{ 'filling--error': errors.wordError }" type="text" placeholder="New word"
                    v-model="formData.word">
            </div>
            <div class="form__box form-box">
                <input class="form-box__input filling filling--input filling--notblured"
                    :class="{ 'filling--error': errors.translateError }" type="text" placeholder="New translation"
                    v-model="formData.translation">
            </div>
            <div class="form__buttons buttons">
                <div class="buttons__btn btn btn--transparent filling--notblured"
                    @click="emit('updatePopupVisibility')">
                    Cancel
                </div>
                <button class="buttons__btn btn btn--white" type="button" @click.prevent="updateWord">
                    Apply
                </button>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
.edit {
    width: 100%;
}
</style>