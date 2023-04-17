const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')


/*
Routes

create a new recipe -> post(/recipes)
get all recipes -> get(/recipes)
get a recipe -> get(/recipe/recipeId)
get notes for a recipe -> get(/recipes/:recipeId/notes)
create a new note -> post(/recipes/:recipeId/notes)

Creating classes
routes - api/URLS  -- test
axios - routes work
database           -- test
test - everything.

*/

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(Recipe.list)
})

router.post('/', async (req, res, next) => {
  const user = await User.findById(req.body.user)
  const newRecipe = await user.createRecipe(req.body.title, req.body.ingredients)
  res.send(newRecipe)
})

router.post('/:recipeId/notes', async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.recipeId)
  const user = await User.findById(req.body.user)

  const note = await user.addNote(req.body.note, recipe)

  res.send(note)

})


module.exports = router
