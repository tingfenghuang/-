import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { useUserStore } from "./user"
import { insertCart, getCart, deleteCart } from "@/apis/cart"
export const useCartStore = defineStore('Cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => {
        return userStore.userInfo.token
    })
    const cartList = ref([])
    const getNewCartList = () => {
        getCart().then(res => {
            cartList.value = res.result || []
        })
    }
    const addCart = (goods) => {
        if (isLogin.value) {
            const { skuId, count } = goods
            insertCart({ skuId, count }).then(
                res => {
                    getNewCartList()

                }
            )


        } else {
            const isInCartList = cartList.value.find((item) => {
                return goods.skuId === item.skuId
            })
            if (isInCartList) {
                isInCartList.count++
            } else {
                cartList.value.push(goods)
            }
        }


    }
    const delCart = (skuId) => {
        if (isLogin.value) {
            //TODO:删除购物车接口

            deleteCart([skuId]).then(res => {
                getNewCartList()
            })

        } else {
            const index = cartList.value.findIndex((item) => {
                return skuId === item.skuId
            })
            cartList.value.splice(index, 1)
        }
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
    const singleChecked = (skuId, selected) => {
        const isInCart = cartList.value.find((item) => {
            return skuId === item.skuId
        })
        isInCart.selected = selected
        console.log(isInCart)
    }
    const isAll = computed(() => {
        return cartList.value.every((item) => {
            return item.selected
        })
    })
    const selectAll = (selected) => {
        cartList.value.forEach((item) => {
            item.selected = selected
        })
    }
    const selectedCount = computed(() => {
        return cartList.value.filter((item) => {
            return item.selected
        }).reduce((p, c) => {
            return p + c.count
        }, 0)
    })
    const selectedPrice = computed(() => {
        return cartList.value.filter((item) => {
            return item.selected
        }).reduce((p, c) => {
            return p + c.count * c.price
        }, 0)

    })
    return {
        cartList,
        addCart, delCart, total, allPrice,
        singleChecked, isAll, selectAll, selectedCount
        , selectedPrice
    }


}, {
    persist: true
})