const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')

const blogsRouter = require('./controllers/blogsRouter')
const loginRouter = require('./controllers/loginRouter')
const usersRouter = require('./controllers/usersRouter')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
