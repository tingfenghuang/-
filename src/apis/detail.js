import http from '@/tools/axios/index.js'
export const getDetail = (id) => {
    return http({
        url: '/goods',
        method: 'get',
        params: {
            id
        }
    })
}
export const getDetailHot = ({ id, type, limit }) => {
    return http({
        url: '/goods/hot',
        method: 'get',
        params: {
            id,
            type,
            limit
        }
    })

}