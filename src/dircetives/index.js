import { useIntersectionObserver } from '@vueuse/core'


//定义懒加载插件
export const lazyLoad = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el:指令绑定的元素
                //binding.value:指令绑定的值
                // console.log(binding.value, el)
                const { stop } = useIntersectionObserver
                    (el, ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    })


            }

        })

    }
}