const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    accountName: String, 
	password: String,
    logInHistory: Date
});

module.exports = mongoose.model("User", UserSchema);