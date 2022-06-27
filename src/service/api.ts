import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export default api; 