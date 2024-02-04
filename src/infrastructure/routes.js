import { createRouter, createWebHistory } from 'vue-router'

import AuthIndexPage from '../features/Auth/AuthIndexPage.vue'
import UserProfileViewPage from '../features/User/UserProfileViewPage.vue'
import UserProfileEditPage from '../features/User/UserProfileEditPage.vue'

const routes = [
    {
        path : "/",
        name: "UserProfileViewPage",
        component : UserProfileViewPage
    },
    {
        path : "/edit/me",
        name: "UserProfileEditPage",
        component : UserProfileEditPage
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

export default router;