import http from "@/tools/axios"
export const insertCart = (data) => {
    return http.post("/member/cart", data)
}
export const getCart = (data) => {
    return http.get("/member/cart", data)
}