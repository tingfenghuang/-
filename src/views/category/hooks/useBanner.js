//封装轮播图相关的代码
import { getBanner } from '@/apis/home'
import { ref, onMounted } from 'vue'
export const useBanner = () => {
    const bannerList = ref([])
    const params = {
        distributionSite: "2"
    }
    const useGetBanner = (params) => {
        getBanner(params).then(res => {
            bannerList.value = res.result
        })
    }
    onMounted(() => {
        useGetBanner(params)
    })
    return {
        bannerList, useGetBanner
    }

}