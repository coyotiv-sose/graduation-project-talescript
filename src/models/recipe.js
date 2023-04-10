class Recipe {
    notes = []
  
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
      recipe ingredients: ${this.ingredients.join(' ')}`
  
      // const map1 = array1.map(x => x * 2);
    }
  
    // edit recipe
  
    // delete recipe
  
    // share recipe`

    static create(title, date, ...ingredients) {
      const newRecipe = new Recipe(title, date, ...ingredients)
      Recipe.list.push(newRecipe)
      return newRecipe
    }

    static list = []
  }
  
  module.exports = Recipe;