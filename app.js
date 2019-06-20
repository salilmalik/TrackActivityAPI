var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    res.json("Get called");
});

app.listen(3000, () => {
	console.log("server started");
});
