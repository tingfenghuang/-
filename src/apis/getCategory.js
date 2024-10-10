import http from '@/tools/axios/index.js'
export const getCategoryHead = () => {
    return http({
        url: '/home/category/head',
        method: 'get'
    })
}