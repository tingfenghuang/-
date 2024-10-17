import { defineStore } from "pinia"
import { ref } from "vue"
export const useCartStore = defineStore('Cart', () => {
    const cartList = ref([])
    const addCart = (goods) => {
        const isInCartList = cartList.value.find((item) => {
            goods.skuId === item.skuId
        })
        if (isInCartList) {
            isInCartList.count++
        } else {
            cartList.value.push(goods)
        }

    }
    return {
        cartList,
        addCart
    }


}, {
    persist: true
})