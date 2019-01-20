import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import apiRouter from 'routes/api'
import { errorHandler, notFoundErrorHandler } from 'middlewares'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(notFoundErrorHandler)

// error handler
app.use(errorHandler)

export default app
