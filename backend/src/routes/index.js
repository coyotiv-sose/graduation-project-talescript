const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // rendering the index view
  res.render('index', { title: 'SourdoughAPP' })
})

// return 404 if no route is found
router.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
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
