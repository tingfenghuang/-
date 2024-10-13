import { ref, onMounted } from 'vue'
import { getCategoryData } from '@/apis/category'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
//封装分类数据的代码
export const useCategory = () => {

    const route = useRoute()//获取路由参数
    const categoryData = ref({})


    //路由缓存的原因：只有在路由参数变化时会导致组件服用，不会使组件的生命周期重新执行，
    //所以需要使用onBeforeRouteUpdate

    //在路由参数变化时可以重新发送请求
    onBeforeRouteUpdate((to, from) => {
        // to和from都是路由对象
        useGetCategoryData(to.params.id)
    })

    const useGetCategoryData = (id) => {
        getCategoryData(id).then(res => {
            categoryData.value = res.result
        })

    }

    onMounted(() => {
        useGetCategoryData(route.params.id)
    })
    return {
        categoryData
    }
}