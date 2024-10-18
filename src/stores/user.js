import { defineStore } from "pinia"
import { ref } from "vue"
import { login } from "@/apis/user"
import { useCartStore } from "./cartStore"
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})

    const loginAction = (params) => {
        login(params).then(res => {
            if (res.code === '1') {
                userInfo.value = res.result
                useCartStore().getNewCartList()

            } else {
                // ElMessage.error(res.msg)
            }
        })
    }
    const logoutAction = () => {
        userInfo.value = {}
        useCartStore().clearCart()
    }
    return {
        userInfo, loginAction, logoutAction
    }
}, {
    persist: true
})