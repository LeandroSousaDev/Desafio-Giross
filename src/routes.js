const express = require('express')
const { regiterUser, loginUser } = require('./controllers/usuarios');
const { queryCEP } = require('./controllers/queryCEP');


const routes = express()

routes.post('/sign-up', regiterUser);
routes.post('/sign-in', loginUser)

routes.get('/:cep', queryCEP)



module.exports = routes