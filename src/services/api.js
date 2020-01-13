import axios from 'axios';

// Possibilita o GET, POST, DELETE... da api através do axios.
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api;