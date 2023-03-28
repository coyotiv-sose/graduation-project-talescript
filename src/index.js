function BakersPercentageCalculator(
  totalWeight,
  waterPercent,
  saltPercent,
  sourdoughPercent,
  flourPercent,
  sourdoughHydration = 100
) {
  let optionalIngredients = []

  function addOptionalIngredient(name, percent) {
    optionalIngredients.push({ name, percent })
  }

  function calculateWeights() {
    const flourWeight = (flourPercent / 100) * totalWeight
    const waterWeight = (waterPercent / 100) * flourWeight
    const saltWeight = (saltPercent / 100) * flourWeight

    let sourdoughWeight
    if (sourdoughHydration === 100) {
      sourdoughWeight = (sourdoughPercent / 100) * flourWeight
    } else {
      const sourdoughFlourWeight = (sourdoughPercent / (100 + sourdoughHydration)) * flourWeight
      sourdoughWeight = (sourdoughHydration / 100) * sourdoughFlourWeight
    }

    const optionalIngredientsWeights = optionalIngredients.reduce((acc, { name, percent }) => {
      const weight = (percent / 100) * flourWeight
      acc[name] = weight.toFixed(2)
      return acc
    }, {})

    return {
      flour: flourWeight.toFixed(2),
      water: waterWeight.toFixed(2),
      salt: saltWeight.toFixed(2),
      sourdough: sourdoughWeight.toFixed(2),
      ...optionalIngredientsWeights,
    }
  }

  return {
    addOptionalIngredient,
    calculateWeights,
  }
}

// better to return a list
const calculator = BakersPercentageCalculator(1000, 70, 2, 20, 100, 80)
calculator.addOptionalIngredient('poppy seeds', 5)
calculator.addOptionalIngredient('sesame seeds', 5)
const weights = calculator.calculateWeights()
//console.log(weights)

// this is a bakers calculator app. It helps people calculate the sourdough recipes. Also known as bakers percentages.

// ----------- STORE RECIPES -------------
// With the recipes Users can calculate the weight of the ingredients they need to make the bread.
// From the bakers percentages, Users can store the recipes.
recipes = [
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

const user = {
  // users should have a unique id, email, and password.
  name: 'Alexander',
  recipes: {
    recipeId: {
      // better to return a list. Add a unique id for each recipe.
      flour: '1000.00',
      water: '700.00',
      salt: '20.00',
      sourdough: '88.89',
      'poppy seeds': '50.00',
      'sesame seeds': '50.00',
    },
  },
  // ----------- STORE NOTES -------------
  // Once Users have made the bread, Users can add notes about the baking process and the results.
  // Users can also add notes about the sourdough starter they used.
  notes: { recipeId: 'note about the bread' },
  // ----------- STORE PICTURES -------------
  pictures: { recipeId: 'picture of the bread' },
}

// Users can create a profile and share their recipes with other Users.

function createProfile(user) {
  return user
}

function editProfile(user) {
  return user
}

// Users can also see other Users recipes and notes.
function getProfile(user) {
  return user
}

function deleteUser(user) {
  return user
}

// ----------- SHARE RECIPES -------------
// From the recipes and the notes, Users can see how their breads are improving over time.
//getRecipes() // --> retrieves all recipes and notes
function createRecipe(user, recipeId, notes) {
  return user.recipes.recipeId, user.notes.recipeId
}

function getRecipes(user) {
  return user.recipes
}
function editRecipe(user, recipeId) {
  return user.recipes.recipeId
}

function deleteRecipe(user, recipeId) {
  return user.recipes.recipeId
}

// From the recipes and notes, Users can share the recipes with other people.
// shareRecipe(recipeId) // --> share recipe with other Users
function shareRecipe(user, recipeId, notes) {
  return user.recipes.recipeId, user.notes.recipeId
}

// findRecipe(recipeId) // --> find recipe from other Users
function findRecipe(user, recipeId) {
  return user.recipes.recipeId
}

// ----------- CHALLENGES -------------
// Users can also create their own challenges.
// Users can also join challenges from other people.
//createChallenge(recipeId) // --> create challenge from recipe
//joinChallenge(challengeId) // --> join challenge from other Users
// challenges should have a start and end date
// challenges should have a winner
// winners are determined by the number of votes or by the user who created the challenge
function createChallenge(user, recipeId, challenge) {
  return user.recipes.recipeId, challenge
}

function editChallenge(user, challengeId) {
  return user.challenges.challengeId
}

function removeChallenge(user, challengeId) {
  return user.challenges.challengeId
}

function joinChallenge(challengeId) {
  return user.challenges.challengeId
}

function leaveChallenge(challengeId) {
  return user.challenges.challengeId
}

// ----------- EVENTS -------------
// Users can create events and invite other Users to join them.
//createEvent() // --> create event and invite other Users
// events should have a date and time and place. Users can also add notes about the event.

function createEvent(user, eventId, event) {
  return user.events.eventId, event
}

function editEvent(user, eventId) {
  return user.events.eventId
}

function removeEvent(user, eventId) {
  return user.events.eventId
}

// Users can also join events created by other Users.
//joinEvent(eventId) // --> join event from other Users
function joinEvent(user, eventId) {
  return user.events.eventId
}

function leaveEvent(user, eventId) {
  return user.events.eventId
}

// Solutions: calculator, calendar / events, challenges, competition, recipes,
console.log(`--------------------`)
console.log(`name of user is ${user.name}, and the recipe is ${JSON.stringify(user.recipes.recipeId)},
and the note is ${user.notes.recipeId}, and the picture is ${user.pictures.recipeId}`)

console.log(`get user recipes: ${JSON.stringify(getRecipes(user))}`)
