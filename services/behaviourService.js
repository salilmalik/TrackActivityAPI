const express = require("express");
const Behaviour = require("../models/behaviour");

const getBehaviour = (req, res, next) => {
  Behaviour.find({}, function(err, behaviour) {
    res.json({ behaviour: behaviour });
  });
};

const getBehaviourForAccount = (req, res, next) => {
  var behaviour = new Behaviour();
  behaviour.accountName = req.params.accountName;
  behaviour.content = req.body.type.content;
  behaviour.category = req.body.type.category;
  behaviour.event = req.body.type.event;
  behaviour.timestamp = new Date();
  behaviour.save(function(err, objectToInsert) {
    if (err) {
      return res.json({
        success: false,
        message: "Behaviour not saved. "
      });
    }
    var objectId = objectToInsert._id;
    res.json({
      success: true,
      message: "Behaviour saved. ",
      returnCode: "0",
      behaviourID: objectId
    });
  });
};

module.exports = {
  getBehaviour: getBehaviour,
  getBehaviourForAccount: getBehaviourForAccount
};
