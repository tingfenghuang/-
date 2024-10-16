import axios from "axios"
import { useUserStore } from "@/stores/user"
import router from "@/route"


const http = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000,
})

// 请求拦截器
http.interceptors.request.use((config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (err) => {
    return Promise.reject
})

// 响应拦截器
http.interceptors.response.use((res) => {
    return res.data
}, (err) => {

    //统一错误提示
    ElMessage({
        message: err.response.data.message,
        type: 'error'
    })
    //token过期
    if (err.response.status === 401) {
        const userStore = useUserStore()
        userStore.logoutAction()
    }
    //跳转到登录页
    router.push('/login')

    return Promise.reject

})
export default http