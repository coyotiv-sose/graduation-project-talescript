var express = require('express')
var router = express.Router()
var User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{ name: 'john' }]) // change url to /users
})

router.post('/', function (req, res, next) {
  const newUser = User.create(req.body.name, req.body.email);
  res.send(newUser)
})



module.exports = router
