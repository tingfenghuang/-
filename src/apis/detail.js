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