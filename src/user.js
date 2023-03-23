class User {
  constructor(name) {
    this.name = name
    this.recipes = []
  }

  addRecipe(recipe) {
    this.recipes.push(recipe)
  }

  removeRecipe(recipe) {
    this.recipes = this.recipes.filter(r => r !== recipe)
  }

  editRecipe(recipe) {
    this.recipes = this.recipes.map(r => {
      if (r === recipe) {
        return recipe
      }
      return r
    })
  }

  getRecipes() {
    return this.recipes
  }

  getProfile() {
    return {
      name: this.name,
      recipes: this.recipes,
    }
  }
}
