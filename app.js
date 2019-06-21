const express = require("express");
const bodyparser = require("body-parser");
const userRoute = require('./routes/userapi');
const cors = require("cors");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.json("Get called");
});

app.listen(3000, () => {
  console.log("server started");
});
