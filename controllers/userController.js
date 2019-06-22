const express = require("express");
const userService = require("../services/userService");
const router = express.Router();

router.post("/register", userService.registerUser);
router.post("/login", userService.loginUser);

module.exports = router;