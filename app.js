const express = require("express");
const bodyparser = require("body-parser");
const userRoute = require("./routes/userapi");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();
const userapi = require("./routes/userapi");
const behaviourapi = require("./routes/behaviourapi");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.json("Get called");
});

app.use("/user", userapi);

app.use("/behaviour", behaviourapi);

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
