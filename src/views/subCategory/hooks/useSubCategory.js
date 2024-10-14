import { getSubCategoryData, getSubCategoryList } from '@/apis/category'
import { ElMessage } from 'element-plus'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'


export const useSubCategory = () => {
    const disabled = ref(false)
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

    }
    const tabChange = () => {
        params.value.page = 1
        useGetSubCategoryList(params.value)
    }
    const load = () => {
        params.value.page++
        getSubCategoryList(params.value).then(res => {
            subCategoryList.value = [...subCategoryList.value, ...res.result.items]
            if (res.result.items.length === 0) {
                // 没有更多数据
                disabled.value = true
                ElMessage.success('Not more data')
            }
        })


    }
    onMounted(() => {
        useGetSubCategoryData()
        useGetSubCategoryList()
    })
    return {
        subCategoryData,
        subCategoryList,
        params,
        tabChange,
        load,
        disabled
    }
}