const dotenv = require("dotenv").config();
//accessing mongoose package
const mongoose = require("mongoose");
//database connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//schema definition
const Schema = mongoose.Schema;
//constructor
const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  image: String, //filename
  about: String,
});
//model creation
var Bookdata = mongoose.model("bookdata", bookSchema);
//exporting the model
module.exports = Bookdata;
