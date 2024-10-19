import http from '@/tools/axios/index'
export const getCheckoutinfo = () => {
    return http.get('/member/order/pre')
}
export const addAddress = (data) => {
    return http.post('/member/address', data)
}
export const deleteAddress = (id) => {
    return http({
        url: `/member/address/${id}`,
        method: "delete",
    })
}
export const getPayOrder = (data) => http.post("/member/order", data)