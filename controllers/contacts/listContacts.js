const Contact = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20, favorite = false } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(
    { owner: _id, favorite: favorite },
    "-createAt -updateAt",
    {
      skip,
      limit: Number(limit),
    }
  ).populate("owner");
  res.json(contacts);
};
module.exports = listContacts;
