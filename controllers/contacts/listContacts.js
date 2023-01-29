const Contact = require("../../models/contact");

const listContacts = async (req, res) => {
  const contacts = await Contact.find({}, "-createAt -updateAt");
  res.json(contacts);
};
module.exports = listContacts;
