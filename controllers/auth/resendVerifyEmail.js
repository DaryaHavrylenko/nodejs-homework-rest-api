const { User } = require("../../models/user");
const { NotFound, BadRequest } = require("http-errors");
const { sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFound("Not found verification token");
  }
  if (user.verify) {
    throw BadRequest("User already verify");
  }
  const mail = {
    to: email,
    subject: "confirm your registration on this website",
    html: `<a href="http://localhost:3000/api/auth/verify/${user.verificationToken}">Confirm your registration</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Email verify resend",
  });
};
module.exports = resendVerifyEmail;
