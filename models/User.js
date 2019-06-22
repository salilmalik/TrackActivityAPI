const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    accountName: {
        type: String,
        required : [ true, 'accountName is required'],
        unique : true,
        lowercase : true
    },
	password: String,
    logInHistory: Date
});

module.exports = mongoose.model("User", UserSchema);