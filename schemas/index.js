const schemaContacts = require("./contact");
const updateFavoriteSchema = require("./updateFavoriteSchema");
const {
  schemaSignUpUser,
  schemaLogInUser,
  updateSubscription,
} = require("./user");
module.exports = {
  schemaContacts,
  updateFavoriteSchema,
  schemaSignUpUser,
  schemaLogInUser,
  updateSubscription,
};
