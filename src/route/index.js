import { createRouter, createWebHistory } from "vue-router"
import Layout from '@/views/layout/index.vue'
import Login from "@/views/login/index.vue"
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [{
                path: '',
                component: Home
            },
            {
                path: 'category',
                component: Category
            }]
        },
        {
            path: '/login',
            component: Login,
        }
    ]
})
export default router