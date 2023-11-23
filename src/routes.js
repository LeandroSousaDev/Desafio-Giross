const express = require('express')
const { regiterUser, loginUser } = require('./controllers/users');
const { queryCEP } = require('./controllers/queryCEP');
const validationLogin = require('./middlewares/validationLogin')


const routes = express()

routes.post('/sign-up', regiterUser);
routes.post('/sign-in', loginUser)

routes.use(validationLogin)

routes.get('/:cep', queryCEP)



module.exports = routes