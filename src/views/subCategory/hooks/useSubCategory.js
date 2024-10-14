import { getSubCategoryData, getSubCategoryList } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'


export const useSubCategory = () => {
    const subCategoryList = ref([])
    const id = useRoute().params.id
    const subCategoryData = ref({})
    const params = ref({
        categoryId: id,
        page: 1,
        pageSize: 20,
        sortField: 'publishTime'
    })
    const useGetSubCategoryData = async () => {
        const res = await getSubCategoryData(id)
        subCategoryData.value = res.result
    }
    const useGetSubCategoryList = async () => {
        const res = await getSubCategoryList(params.value)
        subCategoryList.value = res.result.items
        console.log(subCategoryList.value)
    }
    onMounted(() => {
        useGetSubCategoryData()
        useGetSubCategoryList()
    })
    return {
        subCategoryData,
        subCategoryList,
    }
}