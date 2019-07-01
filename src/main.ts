import express, { Router, static as ss } from 'express'
import { join } from 'path';
import Logger from './logger';
import RouterManager from './routes/RouterManager';
import cookie from 'cookie-parser'
import session from 'express-session'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'

const app = express()

// Arguments
app.set('port', process.env.PORT || 80)
app.set('view engine', 'pug')
app.set('views', join(__dirname, '/public/views'))

// Router
RouterManager.init(app, Router())

// Registeration
app.use('/', ss(join(__dirname, '/public')))
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(cors())
app.use(cookie())
app.use(session({
  resave: true,
  secret: '@#$%@#%^#@$!@$!$',
  saveUninitialized: false
}))

// Server
app.listen(app.get('port'), () => {
  Logger.success('Server is hosting on port ' + app.get('port'))
})