import { createRouter, createWebHistory } from 'vue-router'

import UserProfileViewPage from '../features/User/UserProfileViewPage.vue'

const routes = [
    {
        path : "/",
        name: "UserProfileViewPage",
        component : UserProfileViewPage
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

export default router;