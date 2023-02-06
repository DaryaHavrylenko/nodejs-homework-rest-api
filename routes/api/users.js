const express = require("express");
const router = express.Router();
const { auth, ctrlWrapper } = require("../../middelwares");
const { users: ctrl } = require("../../controllers");

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch("/", auth, ctrlWrapper(ctrl.updateSubscription));

module.exports = router;
