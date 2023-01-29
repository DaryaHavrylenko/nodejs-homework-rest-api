const Joi = require("joi");

const schemaContacts = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.number().positive().required(),
});

// const updateFavoriteSchema = Joi.object({
//   favorite: Joi.bool().required(),
// });

module.exports = schemaContacts;