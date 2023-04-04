// this is a bakers calculator app. It helps people calculate the sourdough recipes. Also known as bakers percentages.
import User from './user.js'
import Recipe from './recipes.js'
import Event from './event.js'
import Challenge from './challenge.js'
import BakersPercentageCalculator from './calculator.js'

//axios fetch users with axios

// ----------- STORE RECIPES -------------
// With the recipes Users can calculate the weight of the ingredients they need to make the bread.
// From the bakers percentages, Users can store the recipes.
const recipes = [
  {
    // better to return a list. Add a unique id for each recipe.
    flour: '1000.00',
    water: '700.00',
    salt: '20.00',
    sourdough: '88.89',
    'poppy seeds': '50.00',
    'sesame seeds': '50.00',
  },
]

// Usage:
// --------------------TESTS--------------------
// Solutions: calculator, calendar / events, challenges, competition, recipes,
/* console.log(`--------------------`)
console.log(`name of user is ${user.name}, and the recipe is ${JSON.stringify(user.recipes.recipeId)},
and the note is ${user.notes.recipeId}, and the picture is ${user.pictures.recipeId}`)
console.log(`get user recipes: ${JSON.stringify(getRecipes(user))}`) */
// Creating a new user
const user1 = new User('John', 'Doe', 'john.doe@example.com', 'password123')
console.log(user1)
// Creating a new recipe
const recipe1 = new Recipe('Pancakes', ['flour', 'eggs', 'milk', 'sugar', 'baking powder'])
console.log(recipe1)
// Creating a new challenge
const challenge1 = new Challenge('Pancake Challenge', [recipe1])
console.log(challenge1)
// Creating a new event
const event1 = new Event('Cooking Competition', '2023-04-01', [challenge1], '123 Main St')
console.log(event1)

// create a new user and add a recipe
const user = new User('Alice', 'alice@example.com', 'password')
const recipe = recipes // assume `weights` is defined in the previous code
const recipeId = 'recipe1'
user.createRecipe(recipeId, recipe)
console.log(user.recipes) // should output `{recipe1: {...}}`

// add notes to the recipe
user.addNote(recipeId, 'This bread turned out great!')
user.addNote(recipeId, 'I should have baked it a bit longer.')
console.log(user.getNotes(recipeId)) // should output `['This bread turned out great!', 'I should have baked it a bit longer.']`

// add picture URLs to the recipe
user.addPictureUrl(recipeId, 'https://example.com/bread1.jpg')
user.addPictureUrl(recipeId, 'https://example.com/bread2.jpg')
console.log(user.getPictureUrls(recipeId)) // should output `['https://example.com/bread1.jpg', 'https://example.com/bread2.jpg']`

// delete a note by ID
const [noteToDelete] = user.getNotes(recipeId)
user.deleteNoteById(recipeId, noteToDelete.id)
console.log(user.getNotes(recipeId)) // should output `['I should have baked it a bit longer.']`

// delete a picture URL by ID
const [pictureUrlToDelete] = user.getPictureUrls(recipeId)
user.deletePictureUrlById(recipeId, pictureUrlToDelete.id)
console.log(user.getPictureUrls(recipeId)) // should output `['https://example.com/bread2.jpg']`

// delete a recipe
user.deleteRecipe(recipeId)
console.log(user.recipes) // should output `{}`

console.log(user.fullName) // John Doe
console.log(user.age) // 30

user.age = 40
console.log(user.age) // 40

console.log(user.address) // undefined

user.address = '123 Main St'
console.log(user.address) // 123 Main St

delete user.address
console.log(user.address) // undefined

console.log(user) // { firstName: 'John', lastName: 'Doe', age: 40 }

console.log(Object.keys(user)) // [ 'firstName', 'lastName', 'age' ]
console.log(Object.values(user)) // [ 'John', 'Doe', 40 ]
console.log(Object.entries(user)) // [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 40 ] ]
