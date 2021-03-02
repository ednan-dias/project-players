const User = require("../models/User");

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
      const user = await User.create({
        name,
        email,
        password,
      });

      return res
        .status(201)
        .json({ success: "Usuário criado com sucesso!", user });
    } catch (error) {
      next(error);
    }
  },
};
