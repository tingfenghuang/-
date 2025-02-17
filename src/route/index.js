import { createRouter, createWebHistory } from "vue-router"
import Layout from '@/views/layout/index.vue'
import Login from "@/views/login/index.vue"
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
import SubCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/detail/index.vue'
import CartList from '@/views/cartList/index.vue'
import Checkout from '@/views/checkout/index.vue'
import Pay from '@/views/pay/index.vue'
import Member from '@/views/member/index.vue'
import UserInfo from "@/views/member/components/UserInfo.vue"
import UserOrder from "@/views/member/components/UserOrder.vue"


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
            }, {
                path: 'detail/:id',
                component: Detail
            }, {
                path: 'cartList',
                component: CartList
            }, {
                path: 'checkout',
                component: Checkout
            }, {
                path: 'pay',
                component: Pay
            }, {
                path: 'member',
                component: Member,
                children: [{
                    path: '',
                    component: UserInfo

                }, {
                    path: 'order',
                    component: UserOrder
                }]
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