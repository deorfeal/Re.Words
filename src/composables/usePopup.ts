import { ref } from "vue";

export function usePopup() {
    const isPopupVisible = ref(false);

    function togglePopup() {
        isPopupVisible.value = !isPopupVisible.value;  
    }

    return { isPopupVisible, togglePopup };
}
