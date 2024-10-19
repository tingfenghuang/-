import http from "@/tools/axios"
export const insertCart = (data) => {
    return http.post("/member/cart", data)
}
export const getCart = (data) => {
    return http.get("/member/cart", data)
}
export const deleteCart = (ids) => {
    return http({
        url: "/member/cart",
        method: "delete",
        data: {
            ids
        }
    })
}
export const mergeCart = (data) => {
    return http.post("/member/cart/merge", data)
}

