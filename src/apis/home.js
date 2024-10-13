import http from '@/tools/axios/index.js'
export const getBanner = () => {
    return http.get('/home/banner')
}
export const getNew = () => {
    return http.get('/home/new')

}