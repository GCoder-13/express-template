import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'

import middlewares from 'middlewares'
import routes from 'routes'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(middlewares)
app.use(routes)

export default app
