import axios from 'axios'

import { getToken } from 'util/token'
import history from 'util/history'

const UNAUTHORIZED = 401;

var config = {
    baseURL: process.env.REACT_APP_BFF_URL,
    headers: { 'Authorization': `Bearer ${getToken()}` },
};

axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response.data.status === UNAUTHORIZED) {
            history.push('/signIn')
        } else {
            return Promise.reject(error.response.data)
        }
    }
)

export const get = (url) => {
    return axios.get(url, config)
}

export const post = (url, data) => {
    return axios.post(url, data, config)
}