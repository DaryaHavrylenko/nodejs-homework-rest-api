const { Conflict } = require("http-errors");
const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const sendEmail = require("../../helpers");
const { v4: uuidv4 } = require("uuid");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`${email} in use`);
  }
  const avatarURL = gravatar.url(email);
  const verificationToken = uuidv4();
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "confirm your registration on this website",
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}">Confirm your registration</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    data: { user: { subscription: "starter", email, avatarURL } },
  });
};
module.exports = signUp;
