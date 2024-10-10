import http from '@/tools/axios/index'

export function getCategoryAPI() {
    return http({
        url: 'home/category/head'
    })
}