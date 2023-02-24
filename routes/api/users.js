const express = require("express");
const router = express.Router();
const { auth, ctrlWrapper, upload } = require("../../middelwares");
const { users: ctrl } = require("../../controllers");

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch("/", auth, ctrlWrapper(ctrl.updateSubscription));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
module.exports = router;
