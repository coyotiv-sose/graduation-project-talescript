// ----------- SHARE RECIPES -------------
// From the recipes and the notes, Users can see how their breads are improving over time.
//getRecipes() // --> retrieves all recipes and notes
class Recipe {
  constructor(name, ingredients, instructions) {
    this.name = name
    this.ingredients = ingredients
    this.instructions = instructions
  }

  // Getters and setters for name, ingredients, and instructions
  get getName() {
    return this.name
  }

  set setName(name) {
    this.name = name
  }

  get getIngredients() {
    return this.ingredients
  }

  set setIngredients(ingredients) {
    this.ingredients = ingredients
  }

  get getInstructions() {
    return this.instructions
  }

  set setInstructions(instructions) {
    this.instructions = instructions
  }

  // Add an ingredient to the recipe's list of ingredients
  addIngredient(ingredient) {
    this.ingredients.push(ingredient)
  }

  // Add a step to the recipe's list of instructions
  addInstruction(instruction) {
    this.instructions.push(instruction)
  }

  // Return a formatted string with the recipe's name, ingredients, and instructions
  toString() {
    return `${this.name}\n\nIngredients:\n${this.ingredients.join('\n')}\n\nInstructions:\n${this.instructions.join(
      '\n'
    )}`
  }
}

export default Recipe
