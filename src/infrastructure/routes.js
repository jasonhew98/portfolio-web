import { createRouter, createWebHistory } from 'vue-router'

import AuthIndexPage from '../features/Auth/AuthIndexPage.vue'
import UserProfileIndexPage from '../features/User/UserProfileIndexPage.vue'
import UserProfileViewPage from '../features/User/UserProfileViewPage.vue'
import UserProfileEditPage from '../features/User/UserProfileEditPage.vue'

const routes = [
    {
        path : "/profile/me",
        name: "UserProfileViewPage",
        component : UserProfileViewPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path : "/",
        name: "UserProfileIndexPage",
        component : UserProfileIndexPage,
        props: true
    },
    {
        path : "/profile/me/edit",
        name: "UserProfileEditPage",
        component : UserProfileEditPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path : "/auth",
        name: "AuthIndexPage",
        component : AuthIndexPage
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('jwt');
        if (token) {
            next();
        } else {
            next('/auth');
        }
    } else {
        next();
    }
});

export default router;