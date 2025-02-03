import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import GreetingView from '@/views/GreetingView.vue'
import EntranceView from '@/views/EntranceView.vue'
import MenuView from '@/views/MenuView.vue'
import WordsList from '@/views/WordsList.vue'

const checkAuth = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
    let isAuth = false

    onAuthStateChanged(getAuth(), (user) => {
        if (user && !isAuth) {
            isAuth = true
            next()
        } else if (!user && !isAuth) {
            isAuth = true
            next('/entrance')
        }
    })
}

// Добавляем проверку авторизации для маршрута '/'
const checkGreeting = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            next('/menu'); // Если пользователь авторизован, перенаправляем на /menu
        } else {
            next(); // Иначе остаемся на текущей странице / (greeting)
        }
    });
};

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'greeting',
        component: GreetingView,
        beforeEnter: checkGreeting,
    },
    {
        path: '/menu',
        name: 'menu',
        component: MenuView,
        beforeEnter: checkAuth
    },
    {
        path: '/entrance',
        name: 'entrance',
        component: EntranceView,
    },
    {
        path: '/words/:category',
        name: 'words-list',
        component: WordsList,
        beforeEnter: checkAuth,
        props: true  // ✅ Передаёт `category` как пропс в компонент
    }
]

const router = createRouter({
    history: createWebHashHistory('/Re.Words/'),
    routes: routes
})

export default router
