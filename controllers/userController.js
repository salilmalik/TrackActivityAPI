const express = require("express");
const userService = require("../services/userService");
const router = express.Router();

router.post("/register", userService.createUser);

module.exports = router;