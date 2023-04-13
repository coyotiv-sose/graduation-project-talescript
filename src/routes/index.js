const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // rendering the index view
  res.render('index', { title: 'SourdoughAPP' })
})

module.exports = router
