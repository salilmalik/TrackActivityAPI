const mongoose = require("mongoose");
const UserSchema = mongoose.Schema;

UserSchema = new Schema({
    accountName: String, 
	password: String,
    logInHistory: Date
});

module.exports = mongoose.model("User", UserSchema);