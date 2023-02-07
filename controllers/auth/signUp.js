const { Conflict } = require("http-errors");
const { User } = require("../../models");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`${email} in use`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({ email, password: hashPassword });
  res.status(201).json({
    status: "success",
    code: 201,
    data: { user: { subscription: "starter", email } },
  });
};
module.exports = signUp;