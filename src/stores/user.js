import { defineStore } from "pinia"
import { ref } from "vue"
import { login } from "@/apis/user"
import { useCartStore } from "./cartStore"
import { mergeCart } from "@/apis/cart"
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})

    const loginAction = (params) => {
        login(params).then(res => {
            if (res.code === '1') {
                userInfo.value = res.result
                mergeCart(useCartStore().cartList.map(item => {
                    return {
                        skuId: item.skuId,
                        count: item.count,
                        selected: item.selected
                    }
                })).then(res => {

                    // console.log(res)


                })




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