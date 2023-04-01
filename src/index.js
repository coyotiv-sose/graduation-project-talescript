// Sourdough app.
// A fast track learning experience done in community to learn and share knowledge.


// sourdough app
// - users
// -- name
// -- email
// -- notes
// -- recipes

class User {
  notes = [];
  recipes = [];

  constructor(name, email) {
    this.name = name,
    this.email = email
  }
}

const alexander = new User('Alexander', 'user@email.com');

// --- Tests
// User tests
console.log('user name: ', alexander.name);
console.log('user email: ', alexander.email);
console.log('user notes: ', alexander.notes, alexander.notes.length);
console.log('user recipes: ', alexander.recipes, alexander.recipes.length);
console.log('add recipe: ', alexander.recipes.push('flour', 'salt', 'notes'));
console.log('add notes:', alexander.notes.push('this is a savory bread'));
console.log(alexander);

// - calculator
// -- notes
// -- recipes 
// -- ingredients

// - events
// -- can join event
// -- can leave event
// -- can create event
// -- location
// -- date and time of event

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


