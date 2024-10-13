import http from '@/tools/axios/index.js'
export const getBanner = () => {
    return http.get('/home/banner')
}
export const getNew = () => {
    return http.get('/home/new')

}
export const getHot = () => {
    return http({
        url: '/home/hot',
        method: 'get'
    })
}
export const getGoods = () => {
    return http.get('/home/goods')
}