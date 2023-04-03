class User {
    recipes = [];
    events = [];

    constructor(name) {
        this.name = name;       
    }

    createRecipe(ingredients, names, notes) {
        const recipe = new Recipe(ingredients, names, notes)
        this.recipes.push(recipe)    
        return recipe;
    }

    // first create a method
    createEvent(location, date) {
        const event = new Event(location, date)
        this.events.push(event);
        return event; 
    } 
}

class Event {

    constructor(location, date) {
        this.location = location;
        this.date = date;
    }
}

class Recipe {

    constructor(ingredients, name, notes) {
        this.ingredients = ingredients;
        this.name = name;
        this.notes = notes;
    }
}



const alexander = new User('alexander')
const alex = alexander.createRecipe('flour', 'bread something', 'notes')
const alexanderEvent = alexander.createEvent('patio sale', '04.04.2023');

//console.log(alex);
console.log('user: ', alexander);
console.log('event: ', alexanderEvent);

// first create the variables that hold the result / examples
// 