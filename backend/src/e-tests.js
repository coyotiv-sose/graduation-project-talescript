// Sourdough app.
// A fast track learning experience done in community to learn and share knowledge.

const User = require('./models/user')
const Event = require('./models/event')
const Recipe = require('./models/recipe')
const Note = require('./models/note')

const axios = require('axios')

// avoids adding the url to axios methods
axios.defaults.baseURL = 'http://api:3000'

async function main() {
  const newUser = await axios.post('/users', { name: 'alex', email: 'some@ermail.com' })
  //console.log(newUser.data)

  const anotherOne = await axios.post('/users', { name: 'alex555', email: 'some@ermail.com' })

  const createRecipe = await axios.post('/recipes', {
    title: 'this savory title',
    ingredients: ['flour', 'bread something', 'notes'],
    user: newUser.data._id,
  })
  //console.log(createRecipe.data)

  const users = await axios.get('/users?view=json')
  //console.log(users.data)
  console.log(users.data[0].recipes[0])
}

main().catch(error => {
  console.log(error.message ? error.message : error)
})

//return

// // User
// // console.log('user list start', User.list)
// const alexander = new User('Alexander', 'user@email.com')
// alexander.save()

// const alexander2 = User.create('Alexander2', 'user2@email.com')
// // const alexander3 = new User('Alexander3', 'user3@email.com')
// // const alexander4 = new User('Alexander4', 'user4@email.com')
// // console.log('user list', User.list)

// // Recipes
// // returns whenever we want store it in a variable.....
// const firstRecipe = alexander.createRecipe('this savory title', '04-04-2024', 'flour', 'bread something', 'notes')

// alexander.createRecipe('beer wheat honey', '04-04-2024', 'honey', 'salt', 'beer', 'yeast')
// alexander2.createRecipe('beer wheat honey salt', '04-04-2024', 'honey', 'salt', 'beer', 'yeast')
// alexander.addNote('somethings savory', firstRecipe)
// console.log(alexander.notes)
// console.log(alexander.recipes[0])

// // const recipesWithBeerInTitle = User.list.map(u => u.recipes).flat().filter(r => r.title.includes('beer'))
// const recipesWithBeerInTitle = Recipe.list.filter(r => r.title.includes('beer'))

// console.log('Recipes with beer in title:', recipesWithBeerInTitle)

// /* return; */

// // Notes --- need to create a method and assign it to the recipe
// alexander.notes.push('this is a savory bread')
// alexander.addNote('this should work without a problem') // passs in the recipe to create a note for that recipe

// // Events
// const alexanderEvent = alexander.createEvent('patio sale', '04-04-2023')
// const numan = new User('numan', 'email@email.com')
// const numanEvent = numan.createEvent('another patio sale', '04-04-2024')
// alexander.joinEvent(numanEvent)
// console.log('updated version: ', alexander)
// console.log(numan)

// alexander.leaveEvent(numanEvent)
// console.log('updated version: ', alexander)
// // const alexanderLeaveEvent = alexander.evenLocation; // returning function

// // --- Tests
// // User
// console.log('\n')
// console.log('-----START OF PROGRAM-----')
// console.log('\n')
// console.log('-----USER-----')
// /* console.log('user name: ', alexander.name);
// console.log('user email: ', alexander.email); */
// /* console.log(alexander);
// console.log('\n') */

// // Recipes
// /* console.log('-----RECIPES-----')

// console.log('user recipes: ', alexander.recipes, 'length: ', alexander.recipes.length);
// console.log('\n') */

// // Notes
// /* console.log('-----NOTES-----')
// console.log('add notes:', alexander.notes, 'length: ', alexander.notes.length);
// console.log('Using display notes method: ', alexander.displayNotes())
// console.log('\n') */

// // Events
// console.log('-----EVENTS-----')
// /* console.log('event: ', alexanderEvent);
// console.log('Remove Event:', alexanderLeaveEvent); */
// console.log('Event Location:', alexander.location)
// console.log('\n')

// // using getters in recipe class
// console.log(alexander.recipes[0].recipeDetails)

// // first create the variables that hold the result / examples
// //

// // - calculator
// // -- notes
// // -- recipes
// // -- ingredients

// // - competition
// // -- can create competition
// // -- can leave competition
// // -- scores

// // - Extensions
// // -- inventory
// // -- schedule orders

// // ----------- STORE RECIPES -------------
// // With the recipes Users can calculate the weight of the ingredients they need to make the bread.
// // From the bakers percentages, Users can store the recipes.
// const recipes = [
//   {
//     // better to return a list. Add a unique id for each recipe.
//     flour: '1000.00',
//     water: '700.00',
//     salt: '20.00',
//     sourdough: '88.89',
//     'poppy seeds': '50.00',
//     'sesame seeds': '50.00',
//   },
// ]
