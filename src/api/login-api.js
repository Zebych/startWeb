import axios from 'axios';

/*const settings = {
    withCredentials: true,
 /!*   headers: {
        'API-KEY': 'aaa63ed6-139f-4a73-aa64-3185c5225bcd'
    }*!/
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})*/
export const API_URL = ''

const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

instance.interceptors.request.use((config) => {
    config.headers.Autorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default instance;

export const authAPI = {
    login(data) {
        debugger
        return instance.post('react-admin/login', data)
    },
    logout() {
        return instance.post('auth/logout')
    }
}