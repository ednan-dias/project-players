const User = require("../models/User");
const sendConfirmationEmail = require("../services/nodemailer");

function generateCode() {
  let token = [];

  for (let c = 0; c <= 5; c++) {
    let result = Math.floor(Math.random() * 10);
    token.push(result);
  }

  return token.join("");
}

module.exports = {
  async register(req, res, next) {
    const { name, email, password } = req.body;

    const email_exists = await User.findOne({ where: { email } });
    if (email_exists) {
      return res
        .status(400)
        .json({ error: "E-mail já cadastrado, insira um outro." });
    }

    try {
      const token = generateCode();

      const user = await User.create({
        name,
        email,
        password,
        confirmation_code: token,
      });

      sendConfirmationEmail(user.name, user.email, token);

      return res.status(201).json({
        success: "Sucesso, foi enviado um e-mail paar confirmar sua conta!",
        user,
      });
    } catch (error) {
      next(error);
    }
  },
  async verifyUser(req, res, next) {
    const { code } = req.params;
    try {
      const user = await User.findOne({ where: { confirmation_code: code } });

      if (!user)
        return res.status(400).json({ error: "Usuário não encontrado!" });

      await user.update({
        status: "ACTIVE",
      });

      return res
        .status(200)
        .json({ success: "E-mail verificado com sucesso!" });
    } catch (error) {
      next(error);
    }
  },
};
