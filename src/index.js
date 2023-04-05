// Sourdough app.
// A fast track learning experience done in community to learn and share knowledge.

// sourdough app
// - users
// -- name/
// -- email/
// -- notes/
// -- recipes/
// -- events/


class User {
  recipes = []
  events = []
  notes = []
  location = []

  constructor(name, email) {
    this.name = name
    this.email = email
  }

  createRecipe(title, date, ...ingredients) {
    const newRecipe = new Recipe(title, date, ...ingredients)
    this.recipes.push(newRecipe)
    return newRecipe
  }

  // do these methos belong to User or in their own classes?
  addNote(recipeNotes) {
    const note = new Notes(recipeNotes)
    this.notes.push(note)
    return note
  }

  displayNotes() {
    return this.notes
  }

  // anything that motifies the state goes into the user class
  createEvent(location, date) {
    const event = new Event(location, date)
    this.events.push(event)
    event.attendees.push(this)

    return event
  }

  joinEvent(event) {
    const join = this.events.push(event)
    const userJoin = event.attendees.push(this)
  }

  leaveEvent(event) {
    // Is this correct?
    //const found = array1.find(element => element > 10);

    // User.events = ['places 1', 'place 2'];

    const eventIndex = this.events.indexOf(event)
    this.events.splice(eventIndex, 1)

    // Events.{ attendees = ['user 1', 'user 2']}

    const removeAttendeeIndex = event.attendees.indexOf(this)
    event.attendees.splice(removeAttendeeIndex, 1)

    return eventIndex
  }

  eventLocation(event) {
    return this.event
  }
}

class Recipe {
  //date = new Date
  constructor(title, date, ...ingredients) {
    this.title = title
    this.date = date
    this.ingredients = ingredients
  }

  // demo of how to use getter in alexander.recipes[0].recipeDetails
  get recipeDetails() {
    return `
    recipe title: ${this.title}
    recipe date: ${this.date}
    recipe ingredients ${this.ingredients.map(ingredient => `${ingredient}\n`)}`

    // const map1 = array1.map(x => x * 2);
  }

  // edit recipe

  // delete recipe

  // share recipe
}

class Notes {
  constructor(recipeNotes) {
    this.recipeNotes = recipeNotes
  }

  // edit note

  // delete note

  // share notes
}

// - events
// -- can join event
// -- can leave event/
// -- can create event/
// -- location
// -- date and time of event

class Event {
  attendees = []

  // maybe add name
  constructor(location, date) {
    this.location = location
    this.date = date
  }

  // getUpcomingEvents
  // getters and setters
}

// User
const alexander = new User('Alexander', 'user@email.com')

// Recipes
// returns whenever we want store it in a variable.....
alexander.createRecipe('this savory title', '04-04-2024', 'flour', 'bread something', 'notes')
alexander.createRecipe('beer wheat honey', '04-04-2024', 'honey', 'salt', 'beer', 'yeast')

// Notes --- need to create a method and assign it to the recipe
alexander.notes.push('this is a savory bread')
alexander.addNote('this should work without a problem') // passs in the recipe to create a note for that recipe

// Events
const alexanderEvent = alexander.createEvent('patio sale', '04.04.2023')
const numan = new User('numan', 'email@email.com')
const numanEvent = numan.createEvent('another patio sale', '04-04-2024')
alexander.joinEvent(numanEvent)
console.log(alexander.events[1].attendees)
alexander.leaveEvent(numanEvent)
console.log('updated version: ', alexander)
// const alexanderLeaveEvent = alexander.evenLocation; // returning function

// --- Tests
// User
console.log('\n')
console.log('-----START OF PROGRAM-----')
console.log('\n')
console.log('-----USER-----')
/* console.log('user name: ', alexander.name);
console.log('user email: ', alexander.email); */
/* console.log(alexander);
console.log('\n') */

// Recipes
/* console.log('-----RECIPES-----')

console.log('user recipes: ', alexander.recipes, 'length: ', alexander.recipes.length);
console.log('\n') */

// Notes
/* console.log('-----NOTES-----')
console.log('add notes:', alexander.notes, 'length: ', alexander.notes.length);
console.log('Using display notes method: ', alexander.displayNotes())
console.log('\n') */

// Events
console.log('-----EVENTS-----')
/* console.log('event: ', alexanderEvent);
console.log('Remove Event:', alexanderLeaveEvent); */
console.log('Event Location:', alexander.location)
console.log('\n')

// using getters in recipe class
console.log(alexander.recipes[0].recipeDetails)

// first create the variables that hold the result / examples
//

// - calculator
// -- notes
// -- recipes
// -- ingredients

// - competition
// -- can create competition
// -- can leave competition
// -- scores

// - Extensions
// -- inventory
// -- schedule orders

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
