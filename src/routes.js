const express = require('express')
const regiterUser = require('./controllers/usuarios')


const routes = express()

routes.post('/sign-up', regiterUser)



module.exports = routes