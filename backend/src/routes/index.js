const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // rendering the index view
  res.render('index', { title: 'SourdoughAPP' })
})

// login
router.post('/login', function (req, res, next) {
  // check if user exists
  // if user exists, check if password is correct
  // if password is correct, send back user
  // if password is incorrect, send back error
  // if user does not exist, send back error
})

module.exports = router
