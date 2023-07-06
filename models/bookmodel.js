const mongoose = require("mongoose")
const bookschema = mongoose.Schema({
    title: { type: String },
    author: { type: String },
    Genre: { type: String },
    description: { type: String },
  price:{ type: Number }
})

const bookmodel = mongoose.model("book", bookschema)

module.exports={bookmodel}