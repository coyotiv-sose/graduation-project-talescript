/**
 * set DEBUG=myapp:* & npm start
 * windows only
 * npx nodemon filename.js
 */

// MongoDB Connection String
require('dotenv').config()
require('./database-connection')
//console.log(process.env.MONGODB_CONNECTION_STRING)
/* End MongoDB Connection String */

var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const cors = require('cors')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
const recipeRouter = require('./routes/recipes')

var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/recipes', recipeRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.createSocketServer = function (server) {
  const io = require('socket.io')(server, {
    cors: {
      origin: true,
      credentials: true,
    },
  })

  console.log('socket.io server created')

  io.on('connection', function (socket) {
    console.log('a user connected')

    socket.on('disconnect', function () {
      console.log('user disconnected')
    })
  })
}

module.exports = app
