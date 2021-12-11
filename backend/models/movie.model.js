const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   rating: {
      type: Number,
      required: true,
   },
   year: {
      type: Number,
      required: true,
   },
   age: {
      type: Number,
      required: true,
   },
});

module.exports = mongoose.model("Movie", movieSchema);
