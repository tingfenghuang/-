import http from '@/tools/axios/index.js'
export const login = ({ account, password }) => {
    return http({
        url: '/login',
        method: 'POST',
        data: { account, password }
    })
}