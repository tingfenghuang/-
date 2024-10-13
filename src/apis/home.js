import http from '@/tools/axios/index.js'
export const getBanner = (params = {}) => {
    const { distributionSite = '1' } = params
    return http({
        url: '/home/banner',
        method: 'get',
        params: {
            distributionSite
        }
    })
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