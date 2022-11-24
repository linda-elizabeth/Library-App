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
const authorSchema = new Schema({
  name: String,
  place: String,
  genre: String,
  image: String, //filename
  about: String,
});
//model creation
var Authordata = mongoose.model("authordata", authorSchema);
//exporting the model
module.exports = Authordata;
