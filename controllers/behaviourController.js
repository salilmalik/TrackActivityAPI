const express = require("express");
const behaviourService = require("../services/behaviourService");
const router = express.Router();

router.get("/", behaviourService.getBehaviour);
router.post("/:accountName", behaviourService.getBehaviourForAccount);

module.exports = router;