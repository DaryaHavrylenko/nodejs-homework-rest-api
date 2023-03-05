const Joi = require("joi");

const schemaSignUpUser = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

const schemaLogInUser = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

const updateSubscription = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});
const schemaVarifyEmail = Joi.object({
  email: Joi.string().required(),
});
module.exports = {
  schemaSignUpUser,
  schemaLogInUser,
  updateSubscription,
  schemaVarifyEmail,
};
