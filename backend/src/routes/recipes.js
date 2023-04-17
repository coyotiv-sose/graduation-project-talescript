const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(Recipe.list)
})

router.post('/', async (req, res, next) => {
  const user = await User.findById(req.body.user)
  const newRecipe = await user.createRecipe(req.body.title, req.body.ingredients)
  res.send(newRecipe)
})

module.exports = router
