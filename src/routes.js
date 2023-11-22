const express = require('express')
const { regiterUser, loginUser } = require('./controllers/usuarios')


const routes = express()

routes.post('/sign-up', regiterUser);
routes.post('/sign-in', loginUser)


module.exports = routes