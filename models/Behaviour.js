const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var BehaviourSchema = new Schema({
  accountName: String,
  event: String,
  category: String,
  content: String,
  timestamp: Date
});

module.exports = mongoose.model("Behaviour", BehaviourSchema);
