import axios from 'axios'

import { getToken } from 'util/token'
import history from 'util/history'

const UNAUTHORIZED = 401;

const myAxios = axios.create({
    baseURL: process.env.REACT_APP_BFF_URL,
    timeout: 10000,
})

myAxios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
})

myAxios.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.log(error.response.data)
        if (error.response.data.status === UNAUTHORIZED) {
            history.push('/signIn')
        } else {
            return Promise.reject(error.response.data)
        }
    }
)




export const get = (url) => {
    return myAxios.get(url)
}

export const post = (url, data) => {
    return myAxios.post(url, data)
}