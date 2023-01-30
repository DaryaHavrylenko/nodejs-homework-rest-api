const Joi = require("joi");

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = updateFavoriteSchema;
