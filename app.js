const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();
const userController = require("./controllers/userController");
const behaviourController = require("./controllers/behaviourController");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.json("Get called");
});

app.use("/user", userController);

app.use("/behaviour", behaviourController);

mongoose.set('useCreateIndex', true)

mongoose.connect(config.DBConnectionString, { useNewUrlParser: true });

mongoose.connection.on("open", function() {
  console.log("Connect to database");
});

mongoose.connection.on("error", function(err) {
  console.log(err);
});

app.listen(config.port, () => {
  console.log("Server started on port "+ config.port);
});
