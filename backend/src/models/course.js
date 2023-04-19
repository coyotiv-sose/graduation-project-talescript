const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
)

class Course {}

module.exports = mongoose.model('Course', courseSchema)
