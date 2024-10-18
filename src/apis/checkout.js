import http from '@/tools/axios/index'
export const getCheckoutinfo = () => {
    return http.get('/member/order/pre')
}