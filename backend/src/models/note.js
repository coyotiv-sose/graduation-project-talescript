const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
  {
    recipeNotes: String,
  },
  { timestamps: true }
)

//class Note {}

module.exports = mongoose.model('Note', noteSchema)
