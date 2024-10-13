import http from '@/tools/axios/index.js'
export const getBanner = () => {
    return http.get('/home/banner')
}
