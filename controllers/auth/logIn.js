const { User } = require("../../models");
const { Unauthorized, BadRequest } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { SECRET_KEY } = process.env;

const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized(`email ${email} not found`);
  }
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized("Password is wrong");
  }
  if (!user.verify) {
    throw new BadRequest("Email not verify");
  }
  const payload = {
    id: user._id,
    email: user.email,
    subscription: user.subscription,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = logIn;
