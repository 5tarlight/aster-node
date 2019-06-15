import express, { Router, static as ss } from 'express'
import { join } from 'path';

const app = express()
const router = Router()

// Arguments
app.set('port', process.env.PORT || 80)
app.set('view engine', 'pug')

// Router
router.route('/').get((req, res) => {
  res.end('<h1>Hello World!</h1>')
})

// Register
app.use('/', ss(join(__dirname, '/public')))
app.use(router)

// Server
app.listen(app.get('port'), () => {
  console.log('server on')
})