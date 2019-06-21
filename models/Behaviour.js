const mongoose = require("mongoose");
const Schema = mongoose.Schema;

BehaviourSchema = new Schema({
  accountName: String,
  event: String,
  category: String,
  content: String,
  timestamp: Date
});

module.exports = mongoose.model("Behaviour", BehaviourSchema);
