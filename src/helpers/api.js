import axios from 'axios'
import { getToken } from './account'


export const getApiUrl = (path) => {
    return `http://localhost:3003${path}`
}

export const getHeaders = () => {
    const token = getToken();
    if(!token) return {}

    return {
        Authorization: `Bearer ${token}`
    }
}

export const api =  (path, data = {}) => {
 
        const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.post(url, data, options)
    .then(response =>  response)
    .catch(Error => {
        const erro = Error.response.data.message
        return erro

    })
}

export const apiPut = (path, data = {}) => {
    
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.put(url, data, options)
}

export const apiGet = (path) => {
    
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.get(url,options)
}

export const apiDelete = (path) => {
    
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.delete(url,options)
}
