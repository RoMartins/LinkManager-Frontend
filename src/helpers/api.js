import axios from 'axios'

export const getApiUrl = (path) => {
    return `http://localhost:3003${path}`
}

export const getHeaders = () => {
    return {}
}

export const api = (path, data = {}) => {
    
    const url = getApiUrl(path);
    const options = {
        headers: getHeaders(),
    };
    return axios.post(url, data, options)
}

export default api ; 