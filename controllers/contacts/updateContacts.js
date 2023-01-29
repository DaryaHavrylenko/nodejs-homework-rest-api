const Contact = require("../../models/contact");

const updateContacts = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};
module.exports = updateContacts;
