import { createRouter, createWebHistory } from "vue-router"
import Layout from '@/views/layout/index.vue'
import Login from "@/views/login/index.vue"
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import SubCategory from '@/views/subCategory/index.vue'


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
                path: 'category/:id',
                component: Category
            }, {
                path: 'category/sub/:id',
                component: SubCategory
            }]
        },
        {
            path: '/login',
            component: Login,
        }
    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }
})
export default router