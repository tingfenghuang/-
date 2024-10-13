import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import '@/styles/common.scss'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)
app.use(createPinia())

app.use(router)
app.mount('#app')
//定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        //el:指令绑定的元素
        //binding.value:指令绑定的值
        // console.log(binding.value, el)
        const { stop } = useIntersectionObserver
            (el, ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    console.log('进入可视区域')
                    el.src = binding.value
                    stop()
                }
            })


    }

})
