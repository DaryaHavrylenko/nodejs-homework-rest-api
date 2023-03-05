const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "havrylenkoit@gmail.com" };
    console.log("email", email);
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
// const email = {
//   to: "daryahavrylenko20178909@gmail.com",
//   from: "havrylenkoit@gmail.com",
//   subject: "test send the letter",
//   html: "test is done",
// };
// sgMail
//   .send(email)
//   .then(() => console.log("email send success"))
//   .catch((error) => console.lor(error.message));
