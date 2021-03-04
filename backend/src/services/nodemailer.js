const nodemailer = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");
require("dotenv").config();

var transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve(__dirname, "..", "views", "email"),
    },
    viewPath: path.resolve(__dirname, "..", "views", "email"),
    extName: ".hbs",
  })
);

function sendConfirmationEmail(name, email, token) {
  transport
    .sendMail({
      to: email,
      subject: "Requisição para troca de senha!",
      template: "confirmationEmail",
      context: { token, name },
    })
    .then(() => console.log("E-mail enviado com sucesso! 📨"))
    .catch((err) => console.log(err));
}
module.exports = sendConfirmationEmail;
