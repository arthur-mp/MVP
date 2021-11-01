import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2607'
})

export default api;