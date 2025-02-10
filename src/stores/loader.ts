import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoaderStore = defineStore('loader', () => {
    const isLoading = ref(false)

    function showLoader() {
        isLoading.value = true
    }

    function hideLoader() {
        isLoading.value = false
    }

    return { isLoading, showLoader, hideLoader }
})
