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
const userSchema = new Schema({
  email: String,
  mobile: Number,
  username: String,
  password: String,
});
//model creation
var Userdata = mongoose.model("userdata", userSchema);
//exporting the model
module.exports = Userdata;
