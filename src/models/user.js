// sourdough app
// - users
// -- name/
// -- email/
// -- notes/
// -- recipes/
// -- events/

const Recipe = require('./recipe')
const Notes = require('./note')
const Event = require('./event')

class User {
    static list = []
    recipes = []
    events = []
    notes = []
    location = []
  
    constructor(name, email) {
      this.name = name
      this.email = email
    }
  
    static create(name, email) {
      const u = new User(name, email)
      User.list.push(u)
      return u
    }
  
    save() {
      User.list.push(this)
    }
  
    createRecipe(title, date, ...ingredients) {
      const newRecipe = Recipe.create(title, date, ...ingredients)
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

module.exports = User;