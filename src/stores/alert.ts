import { defineStore } from 'pinia';
import { ref } from 'vue';
import { generateUniqueId } from '../utils/generateUniqueId';

interface Alert {
  id: string;
  isVisible: boolean;
  message: string;
  class: string;
}

export const useAlertStore = defineStore('alert', () => {
  const alerts = ref<Alert[]>([]);

  function showAlert(message: string, alertClass: string) {
    const alertId = generateUniqueId();
    const newAlert: Alert = { id: alertId, isVisible: true, message, class: alertClass };

    alerts.value.push(newAlert);

    // Авто-скрытие через 3 сек
    setTimeout(() => hideAlert(alertId), 2500);
  }

  function hideAlert(alertId: string) {
    const alert = alerts.value.find(a => a.id === alertId);
    if (alert) {
      alert.isVisible = false; // Запускаем анимацию исчезновения

      setTimeout(() => {
        alerts.value = alerts.value.filter(a => a.id !== alertId);
      }, 300); // Должно совпадать с временем анимации в CSS
    }
  }

  return { alerts, showAlert, hideAlert };
});
