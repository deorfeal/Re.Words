<script setup lang="ts">
import { useAlertStore } from '../stores/alert';
const alertStore = useAlertStore();

const icons = <Record<string, string>>{
    'alert--error': `${import.meta.env.BASE_URL}/images/error-icon.svg`,
    'alert--warning': `${import.meta.env.BASE_URL}/images/warning-icon.svg`,
    'alert--success': `${import.meta.env.BASE_URL}/images/success-icon.svg`
};
</script>

<template>
    <div class="alert">
        <div class="alert__inner">
            <TransitionGroup name="fade">
                <div v-for="(alert, index) in alertStore.alerts" :key="alert.id" class="alert__item alert-item"
                    :class="alert.class" :style="{ transitionDelay: `${index * 50}ms` }">
                    <span class="icon">
                        <img :src="icons[alert.class]" alt="icon" />
                    </span>
                    <span class="message">{{ alert.message }}</span>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<style lang="scss">
.alert {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 9999;

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-end;
        position: relative;
        min-height: 20px;
        /* Убирает скачки при удалении */
    }
}

.alert-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    padding: 12px;
    border-radius: 8px;
    min-width: max-content;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease, transform 0.3s ease;

    .icon {
        display: block;
        width: 16px;
        height: 16px;
        min-width: 20px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

/* Цвета уведомлений */
.alert--error {
    border: 1px solid #B51F5E;
    color: #fff;
    background: rgba(181, 31, 94, 2.5%);
    backdrop-filter: blur(5px);
}

.alert--warning {
    background: rgba(181, 31, 94, 2.5%);
    border: 1px solid #F46717;
    color: #fff;
    backdrop-filter: blur(5px);
}

.alert--success {
    background: rgba(181, 31, 94, 2.5%);
    border: 1px solid #1FA956;
    color: #fff;
    backdrop-filter: blur(5px);
}

.fade-move,
/* застосувати перехід до рухомих елементів */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* переконайтеся, що кінцеві елементи вилучено з потоку, щоб перемістити
  анімації можна правильно розрахувати. */
.fade-leave-active {
    position: absolute;
}
</style>
