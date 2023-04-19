const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    ingredients: [{ quantity: Number, name: String }],

    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note', autopopulate: true }],
  },
  { timestamps: true }
)
// class Recipe {
//   // demo of how to use getter in alexander.recipes[0].recipeDetails
//   get recipeDetails() {
//     return `
//       recipe title: ${this.title}
//       recipe date: ${this.date}
//       recipe ingredients: ${this.ingredients.join(' ')}`
//   }
// }

//recipeSchema.loadClass(Recipe)
recipeSchema.plugin(autopopulate)
module.exports = mongoose.model('Recipe', recipeSchema)
