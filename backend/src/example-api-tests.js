// Sourdough app.
// A fast track learning experience done in community to learn and share knowledge.
const axios = require(`axios`)

const User = require(`./models/user`)
const Recipe = require(`./models/recipe`)
const Event = require(`./models/event`)
const Note = require(`./models/note`)

require(`./database-connection`)

// avoids adding the url to axios methods
axios.defaults.baseURL = `http://api:3000`

async function main() {
  await User.deleteMany()
  await Recipe.deleteMany()

  const newUser = await axios.post(`/users`, {
    name: `alex`,
    email: `alex54@email.com`,
    password: `123456`,
  })
  const secondUser = await axios.post(`/users`, { name: `alex5455`, email: `alex52342@email.com`, password: `123456` })

  const createRecipe = await axios.post(`/recipes`, {
    name: `this savory title`,
    ingredients: [
      { quantity: 400, name: `flour` },
      { quantity: 1, name: `bread something` },
    ],
    user: newUser.data._id,
  })
  console.log(`createRecipe.data`, createRecipe.data)

  const createRecipe2 = await axios.post(`/recipes`, {
    name: `Sourdough Nuts`,
    ingredients: [
      { quantity: 20, name: `salt` },
      { quantity: 1, name: `bread nuts` },
      { quantity: 100, name: `water` },
      { quantity: 80, name: `sourdough` },
      { quantity: 800, name: `flour` },
    ],
    user: secondUser.data._id,
  })

  /***
   * Note Routes
   */
  // create a note
  const createNote = await axios.post(`recipes/${createRecipe.data._id}/notes`, {
    note: `this is a note`,
    user: `645cd9bfd2c40a2b0fa59217`,
    //user: secondUser.data._id,
  })
  console.log(`createNote.data`, createNote.data)

  // // edit a note
  const editNote = await axios.put(`recipes/${createRecipe.data._id}/notes/${createNote.data._id}`, {
    note: `this is an edited note`,

    user: secondUser.data._id,
  })
  console.log(`editNote.data`, editNote.data)

  // // delete a note
  const deleteNote = await axios.delete(`recipes/${createRecipe.data._id}/notes/${createNote.data._id}`, {
    note: `this is a note`,
    recipe: createRecipe.data._id,
    user: secondUser.data._id,
  })
  console.log(`deleteNote.data`, deleteNote.data)
  /***
   * END OF Note Routes
   */

  const users = await axios.get(`/users?view=json`)
  console.log(users.data[0].recipes[0])

  /***
   * User Routes
   */
  // update a user
  const updateUser = await axios.put(`/users/${newUser.data._id}`, {
    user: newUser.data._id,
    name: `I am changing my name`,
    email: `its a new email @gmail.com`,
  })
  console.log(`updateUser.data`, updateUser.data)

  // delete a user
  const deleteUser = await axios.delete(`/users/${newUser.data._id}`, {
    user: newUser.data._id,
  })
  console.log(`deleteUser.data`, deleteUser.data)

  // get all users
  const getAllUsers = await axios.get(`/users`)
  console.log(`getAllUsers.data`, getAllUsers.data)

  // get a single user
  const getSingleUser = await axios.get(`/users/${newUser.data._id}`)
  console.log(`getSingleUser.data`, getSingleUser.data)
  /***
   * END of User Routes
   */

  /***
   * Event Routes
   */
  // create an event
  // user model / createevent method
  const createEvent = await axios.post(`/events`, {
    title: `this is an event`,

    description: `this is a description`,
    location: `this is a location`,
    date: `04-04-2024`,
    user: newUser.data._id,
  })
  console.log(`createEvent.data`, createEvent.data)

  // edit an event
  const editEvent = await axios.put(`/events/${createEvent.data._id}`, {
    title: `this is an edited event`,
    date: `04-04-2024`,
    description: `this is a new description`,
    user: newUser.data._id,
  })
  console.log(`editEvent.data`, editEvent.data)

  // join an event
  const joinEvent = await axios.post(`/events/${createEvent.data._id}/join`, {
    title: `this is an event`,
    date: `04-04-2024`,
    description: `this is a description`,
    user: newUser.data._id,
  })

  const UserLeaveEvent = await axios.post(`/users`, {
    name: `alexander`,
    email: `alex333ander@email.com`,
    password: `123456`,
  })

  // leave an event
  const leaveEvent = await axios.delete(`/events/${createEvent.data._id}/attendees`, {
    user: '64601ba6dddc18f1184e8022',
  })

  // delete an event
  const deleteEvent = await axios.delete(`/events/${createEvent.data._id}`, {
    title: `this is an event`,
    date: `04-04-2024`,
    description: `this is a description`,
    user: newUser.data._id,
  })

  // get all events
  const getAllEvents = await axios.get(`/events`)
  console.log(`getAllEvents.data`, getAllEvents.data)

  /***
   * END of Event Routes
   */

  /***
   * Courses Routes
   */
  // create a course
  const createCourse = await axios.post(`/courses`, {
    title: `this is a course`,
    date: `04-04-2024`,
    description: `this is a description`,
    user: newUser.data._id,
  })
  console.log(`createCourse.data`, createCourse.data)

  // edit a course
  const editCourse = await axios.put(`/courses/:${createCourse.data._id}`, {
    title: `this is an edited course`,
    date: `04-04-2024`,
    description: `this is a new description`,
    user: newUser.data._id,
  })

  // join a course
  const joinCourse = await axios.post(`/courses/${createCourse.data._id}/join`, {
    title: `this is a course`,
    date: `04-04-2024`,
    description: `this is a description`,
    user: newUser.data._id,
  })

  // leave a course
  const leaveCourse = await axios.delete(`/courses/${createCourse.data._id}/attendees`, {
    title: `this is a course`,
    date: `04-04-2024`,
    description: `this is a description`,
    user: newUser.data._id,
  })
  console.log(`leaveCourse.data`, leaveCourse.data)

  // delete a course
  const deleteCourse = await axios.delete(`/courses/${createCourse.data._id}`, {
    title: `this is a course`,
    date: `04-04-2024`,
    description: `this is a description`,
    user: newUser.data._id,
  })

  // get all courses
  const getAllCourses = await axios.get(`/courses`)
  console.log(`getAllCourses.data`, getAllCourses.data)

  /***
   * END of Courses Routes
   */

  /** Create a new user passpor */
  const newUserPassport = await axios.post(`/accounts`, {
    name: `alex`,
    email: `alex1234@passport.com`,
    password: `123456`,
  })
  console.log(`newUserPassport.data`, newUserPassport.data)

  const loggedInNewUserPassport = await axios.post(`/accounts/session`, {
    email: `alex123456@passport.com`,
    password: `123456`,
  })
} // end of main

main().catch(error => {
  console.log(error.message ? error.message : error)
})

//return

// // User
// // console.log(`user list start`, User.list)
// const alexander = new User(`Alexander`, `user@email.com`)
// alexander.save()

// const alexander2 = User.create(`Alexander2`, `user2@email.com`)
// // const alexander3 = new User(`Alexander3`, `user3@email.com`)
// // const alexander4 = new User(`Alexander4`, `user4@email.com`)
// // console.log(`user list`, User.list)

// // Recipes
// // returns whenever we want store it in a variable.....
// const firstRecipe = alexander.createRecipe(`this savory title`, `04-04-2024`, `flour`, `bread something`, `notes`)

// alexander.createRecipe(`beer wheat honey`, `04-04-2024`, `honey`, `salt`, `beer`, `yeast`)
// alexander2.createRecipe(`beer wheat honey salt`, `04-04-2024`, `honey`, `salt`, `beer`, `yeast`)
// alexander.addNote(`somethings savory`, firstRecipe)
// console.log(alexander.notes)
// console.log(alexander.recipes[0])

// // const recipesWithBeerInTitle = User.list.map(u => u.recipes).flat().filter(r => r.title.includes(`beer`))
// const recipesWithBeerInTitle = Recipe.list.filter(r => r.title.includes(`beer`))

// console.log(`Recipes with beer in title:`, recipesWithBeerInTitle)

// /* return; */

// // Notes --- need to create a method and assign it to the recipe
// alexander.notes.push(`this is a savory bread`)
// alexander.addNote(`this should work without a problem`) // passs in the recipe to create a note for that recipe

// // Events
// const alexanderEvent = alexander.createEvent(`patio sale`, `04-04-2023`)
// const numan = new User(`numan`, `email@email.com`)
// const numanEvent = numan.createEvent(`another patio sale`, `04-04-2024`)
// alexander.joinEvent(numanEvent)
// console.log(`updated version: `, alexander)
// console.log(numan)

// alexander.leaveEvent(numanEvent)
// console.log(`updated version: `, alexander)
// // const alexanderLeaveEvent = alexander.evenLocation; // returning function

// // --- Tests
// // User
// console.log(`\n`)
// console.log(`-----START OF PROGRAM-----`)
// console.log(`\n`)
// console.log(`-----USER-----`)
// /* console.log(`user name: `, alexander.name);
// console.log(`user email: `, alexander.email); */
// /* console.log(alexander);
// console.log(`\n`) */

// // Recipes
// /* console.log(`-----RECIPES-----`)

// console.log(`user recipes: `, alexander.recipes, `length: `, alexander.recipes.length);
// console.log(`\n`) */

// // Notes
// /* console.log(`-----NOTES-----`)
// console.log(`add notes:`, alexander.notes, `length: `, alexander.notes.length);
// console.log(`Using display notes method: `, alexander.displayNotes())
// console.log(`\n`) */

// // Events
// console.log(`-----EVENTS-----`)
// /* console.log(`event: `, alexanderEvent);
// console.log(`Remove Event:`, alexanderLeaveEvent); */
// console.log(`Event Location:`, alexander.location)
// console.log(`\n`)

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
//     flour: `1000.00`,
//     water: `700.00`,
//     salt: `20.00`,
//     sourdough: `88.89`,
//     `poppy seeds`: `50.00`,
//     `sesame seeds`: `50.00`,
//   },
// ]
