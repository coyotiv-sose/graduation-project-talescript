const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    ingredients: Array,
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
  },
  { timestamps: true }
)
class Recipe {
  // dont need this since we are using mongoose
  // notes = []

  // //date = new Date
  // constructor(title, date, ...ingredients) {
  //   this.title = title
  //   this.date = date
  //   this.ingredients = ingredients
  // }

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
}

recipeSchema.loadClass(Recipe)
module.exports = mongoose.model('Recipe', recipeSchema)
