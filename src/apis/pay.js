import http from "@/tools/axios"
export const getPayInfo = (id) => {
    return http({
        url: `/member/order/${id}`
    })
}