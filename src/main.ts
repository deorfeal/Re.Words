import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 1. Сначала создаем экземпляр Pinia
const pinia = createPinia()

// 2. Создаем экземпляр приложения
const app = createApp(App)

// 3. Устанавливаем Pinia ПЕРВОЙ
app.use(pinia)

// 4. Затем импортируем роутер
import router from './router'

// 5. Устанавливаем роутер
app.use(router)

// 6. Инициализация Firebase ПОСЛЕ всех плагинов
import { initializeApp } from "firebase/app"
initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
})

// 7. Импортируем главный компонент
import App from './App.vue'

// 8. Монтируем приложение
app.mount('#app')