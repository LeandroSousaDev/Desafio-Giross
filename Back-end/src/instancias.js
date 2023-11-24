const axios = require('axios')

const instancia = axios.create({
    baseURL: 'http://viacep.com.br/ws/',
});

module.exports = instancia