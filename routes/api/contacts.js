const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middelwares");
const { schemaContacts, updateFavoriteSchema } = require("../../schemas");

const validateMiddelware = validation(schemaContacts);
const validateFavorite = validation(updateFavoriteSchema);

router.get("/", ctrlWrapper(ctrl.listContacts));

router.post("/", validateMiddelware, ctrlWrapper(ctrl.addContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validateMiddelware, ctrlWrapper(ctrl.updateContacts));

router.patch(
  "/:contactId/favorite",
  validateFavorite,
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
