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