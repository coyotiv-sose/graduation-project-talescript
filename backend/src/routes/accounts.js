const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')

router.get('/session', async function (req, res, next) {
  console.log('the current user is', req.user)
  res.send(req.user)
})

// router.post('/', async function (req, res, next) {
//   const { name, email, password } = req.body
//   const user = await User.register({ name, email }, password)
//   res.send(user)
// })

router.post('/session', passport.authenticate('local', { failWithError: true }), function (req, res, next) {
  res.send(req.user)
  res.send(req.session)
})

router.delete('/session', async function (req, res) {
  req.logout(() => {
    res.sendStatus(200)
  })
})

module.exports = router
