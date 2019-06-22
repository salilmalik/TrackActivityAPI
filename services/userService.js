const express = require("express");
const User = require("../models/user");

const createUser = (req, res, next) => {
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

module.exports = {
  createUser: createUser
};
