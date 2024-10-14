import http from "@/tools/axios"
export const getCategoryData = (id) => {
    return http({
        url: "/category",
        method: "get",
        params: {
            id
        }
    })
}
export const getSubCategoryData = (id) => {
    return http({
        url: "/category/sub/filter",
        method: "get",
        params: {
            id
        }
    })
}
export const getSubCategoryList = (data) => {
    return http({
        url: '/category/goods/temporary',
        method: "post",
        data

    })
}