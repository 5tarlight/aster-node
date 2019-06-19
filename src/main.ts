import express, { Router, static as ss } from 'express'
import { join } from 'path';
import Logger from './logger';

const app = express()
const router = Router()

// Arguments
app.set('port', process.env.PORT || 80)
app.set('view engine', 'pug')
app.set('views', join(__dirname, '/public/views'))

// Router

// Registeration
app.use('/', ss(join(__dirname, '/public')))
app.use(router)

// Server
app.listen(app.get('port'), () => {
  Logger.success('Server is hosting on port ' + app.get('port'))
})