import { defineStore } from "pinia"
import { ref, computed } from "vue"
export const useCartStore = defineStore('Cart', () => {
    const cartList = ref([])
    const addCart = (goods) => {
        const isInCartList = cartList.value.find((item) => {
            return goods.skuId === item.skuId
        })
        if (isInCartList) {
            isInCartList.count++
        } else {
            cartList.value.push(goods)
        }

    }
    const delCart = (skuId) => {
        const index = cartList.value.findIndex((item) => {
            return skuId === item.skuId
        })
        cartList.value.splice(index, 1)
    }
    const total = computed(() => {
        return cartList.value.reduce((p, c) => {
            return p + c.count
        }, 0)
    })
    const allPrice = computed(() => {
        return cartList.value.reduce((p, c) => {
            return p + c.count * c.price
        }, 0)
    })
    return {
        cartList,
        addCart, delCart, total, allPrice
    }


}, {
    persist: true
})