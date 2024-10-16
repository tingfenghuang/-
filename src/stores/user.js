import { defineStore } from "pinia"
import { ref } from "vue"
import { login } from "@/apis/user"
export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})
    const isLoggedIn = ref(false)
    const loginAction = (params) => {
        login(params).then(res => {
            if (res.code === '1') {
                userInfo.value = res.result
                isLoggedIn.value = true

            } else {
                // ElMessage.error(res.msg)
            }
        })
    }
    return {
        userInfo, loginAction, isLoggedIn
    }
}, {
    persist: true
})