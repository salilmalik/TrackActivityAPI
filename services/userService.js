const express = require("express");
const User = require("../models/user");

const registerUser = (req, res, next) => {
  try {
    let user = new User();
    user.accountName = req.body.accountName;
    user.password = req.body.password;
    user.logInHistory = new Date();
    user.save(function(err, objectToInsert) {
      if (err) {
        console.error(err);
        return res.json({
          success: false,
          message: "The user's details were not saved.",
          returnCode: "1"
        });
      }
      var objectId = objectToInsert._id;
      res.json({
        success: true,
        message: "The user's details were saved",
        returnCode: "0",
        objectId: objectId
      });
    });
  } catch (error) {
    return res.status(500).json({
      description: "Something went wrong, Please try again"
    });
  }
};

const loginUser = (req, res, next) => {
  User.findOne({
    accountName: req.body.accountName,
    password: req.body.password
  })
    .select("accountName logInHistory")
    .exec(function(err, user) {
      if (err) {
        logger.error(err);
        throw err;
      }
      if (!user) {
        res.json({
          success: false,
          message: "Authentication failed. User not found.",
          returnCode: "401"
        });
      } else if (user) {
        res.json({
          success: true,
          message: "User details fetched successfully!",
          returnCode: "0",
          userID: user._id,
          accountName: user.accountName
        });
        user.logInHistory = new Date();
        user.save(function(err) {});
      }
    });
};

module.exports = {
  registerUser: registerUser,
  loginUser: loginUser
};
