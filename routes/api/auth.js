const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers");
const { auth, validation, ctrlWrapper } = require("../../middelwares");
const {
  schemaSignUpUser,
  schemaLogInUser,
  schemaVarifyEmail,
} = require("../../schemas");
const validateUser = validation(schemaSignUpUser);
const validateLogIn = validation(schemaLogInUser);
const validateVerifyEmail = validation(schemaVarifyEmail);
// register
router.post("/signup", validateUser, ctrlWrapper(ctrl.signUp));
// login
router.post("/login", validateLogIn, ctrlWrapper(ctrl.logIn));
// logaut
router.get("/logout", auth, ctrlWrapper(ctrl.logOut));
// verify
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.post(
  "/verify",
  validateVerifyEmail,
  ctrlWrapper(ctrl.resendVerifyEmail)
);
module.exports = router;
