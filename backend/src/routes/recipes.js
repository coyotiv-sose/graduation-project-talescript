const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const Note = require('../models/note')

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

// From the recipes we can get the notes

/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await Recipe.find())
})

// get a single recipe
router.get('/:recipeId', async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.recipeId)
  res.send(recipe)
})

// createRecipe
router.post('/', async (req, res, next) => {
  // const user = await User.findById(req.body.user)
  try {
    if (!req.user) {
      return next({ status: 401, message: 'Unauthorized' })
    }
    const newRecipe = await req.user.createRecipe(req.body.name, req.body.ingredients)
    res.send(newRecipe)
  } catch (error) {
    next(error)
  }
})

// edit a recipe
router.put('/:recipeId', async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.recipeId)
  recipe.title = req.body.title
  recipe.ingredients = req.body.ingredients
  await req.recipe.save()
  res.send(recipe)
})

// delete a recipe
router.delete('/:recipeId', async (req, res, next) => {
  const recipe = await Recipe.findById(req.params.recipeId)
  await req.recipe.remove()
  res.send(recipe)
})

// copy a recipe
router.post('/:recipeId/copy', async (req, res, next) => {
  const recipe = await Recipe.findById({ _id: req.params.recipeId })
  const user = await User.findById(req.body.user)
  const newRecipe = await req.user.createRecipe(recipe.title, recipe.ingredients)
  res.send(newRecipe)
})

// create a note
router.post('/:recipeId/notes', async (req, res, next) => {
  const recipe = await Recipe.findById({ _id: req.params.recipeId })
  const user = await User.findById(req.body.user)

  const note = await req.user.addNote(req.body.note, recipe)
  await req.recipe.save()
  await req.note.save()

  res.send(note)
})

// edit note for a recipe
router.put('/:recipeId/notes/:noteId', async (req, res, next) => {
  const note = await Note.findById(req.params.noteId)
  note.recipeNotes = req.body.note
  await req.note.save()
  res.send(note)
})

// delete note for a recipe
router.delete('/:recipeId/notes/:noteId', async (req, res, next) => {
  const note = await Note.findById(req.params.noteId)
  await req.user.deleteNote(note)
  await Note.findByIdAndDelete(req.params.noteId)
  res.send(200)
})

module.exports = router
