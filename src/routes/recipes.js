const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')

/* GET users listing. */
router.get('/', function (req, res, next) {

    res.send(Recipe.list) 
  
  })

  
  module.exports = router