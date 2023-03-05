const schemaContacts = require("./contact");
const updateFavoriteSchema = require("./updateFavoriteSchema");
const {
  schemaSignUpUser,
  schemaLogInUser,
  updateSubscription,
  schemaVarifyEmail,
} = require("./user");
module.exports = {
  schemaContacts,
  updateFavoriteSchema,
  schemaSignUpUser,
  schemaLogInUser,
  updateSubscription,
  schemaVarifyEmail,
};
