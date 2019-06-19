import express, { Router, static as ss } from 'express'
import { join } from 'path';
import Logger from './logger';

const app = express()
const router = Router()

// Arguments
app.set('port', process.env.PORT || 80)
app.set('view engine', 'pug')

// Router
router.route('/').get((req, res) => {
  res.end('<h1>Hello World!</h1>')
})

// Registeration
app.use('/', ss(join(__dirname, '/public')))
app.use(router)

// Server
app.listen(app.get('port'), () => {
  Logger.success('Server is hosting on port ' + app.get('port'))
})