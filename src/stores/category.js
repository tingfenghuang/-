//引入pinia
import { defineStore } from 'pinia'
//引入接口
import { getCategoryHead } from '../apis/getCategory'
import { ref } from 'vue'
//定义一个pinia 
export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])
    const getCategoryList = () => {
        getCategoryHead().then(res => {
            if (res.code === '1') {
                categoryList.value = res.result
            }
        })
    }
    return {
        categoryList, getCategoryList
    }
})