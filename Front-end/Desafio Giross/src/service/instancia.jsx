import axios from 'axios';

export default axios.create({
    baseURL: 'http://viacep.com.br/ws/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});