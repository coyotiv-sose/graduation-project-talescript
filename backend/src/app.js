/**
 * set DEBUG=myapp:* & npm start
 * windows only
 * npx nodemon filename.js
 */

// MongoDB Connection String
require('dotenv').config()
//require('./database-connection')
//console.log(process.env.MONGODB_CONNECTION_STRING)
/* End MongoDB Connection String */

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const mongoose = require('mongoose')
require('./database-connection')

const usersRouter = require('./routes/users')
const recipeRouter = require('./routes/recipes')
const indexRouter = require('./routes/index')
const accountsRouter = require('./routes/accounts')
const eventsRouter = require('./routes/events')
const coursesRouter = require('./routes/courses')

// requires the model with Passport-Local Mongoose plugged in
const User = require('./models/user')
const passport = require('passport')

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy())

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

const app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const clientPromise = mongoose.connection.asPromise().then(connection => (connection = connection.getClient()))

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // NODEnv returns undefined
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 15,
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      // domain: process.env.NODE_ENV === 'production' ? 'https://www.alexanderjacks.com' : 'localhost:3000',
    },
    //store: MongoStore.create({ mongoUrl: process.env.MONGODB_CONNECTION_STRING }),
    //ttl: 60 * 60 * 24 * 15, // 60sec * 60min * 24h * 15days
    store: MongoStore.create({ clientPromise, stringify: false }),
  })
)

app.use(passport.initialize())
app.use(passport.session())

// app.use(function (req, res, next) {
//   console.log(process.env.NODE_ENV) // undefined
//   next()
// })

// app.use(function (req, res, next) {
//   res.locals.session = req.session
//   req.session.history = req.session.history || []
//   req.session.history.push({ url: req.url, ip: req.ip })
//   req.session.ip = req.ip
//   console.log('session', req.session)
//   next()
// })

app.use(function (req, res, next) {
  const numberOfVisits = req.session.numberOfVisits || 0
  req.session.numberOfVisits = numberOfVisits + 1
  req.session.history = req.session.history || []
  req.session.history.push({ url: req.url, ip: req.ip })
  console.log('session', req.session)
  next()
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/recipes', recipeRouter)
app.use('/accounts', accountsRouter)
app.use('/events', eventsRouter)
app.use('/courses', coursesRouter)

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

  // app.set('io', io)
  // io.engine.use(passport.session())
  // console.log('socket.io server created')

  app.set('io', io)

  //io.engine.use(sessionMiddleware)
  io.engine.use(passport.session())

  console.log('socket.io server created')

  // io.on('connection', function (socket) {
  //   console.log('a user connected')

  //   socket.on('disconnect', function () {
  //     console.log('user disconnected')
  //   })
  // })
}

module.exports = app
