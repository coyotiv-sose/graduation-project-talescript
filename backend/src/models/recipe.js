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

recipeSchema.plugin(autopopulate)
module.exports = mongoose.model('Recipe', recipeSchema)
