const User = require("../models/User");

module.exports = {
  async index(req, res, next) {
    const users = await User.findAll();
    return res.status(200).json(users);
  },

  async show(req, res, next) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    }
    return res.status(200).json(user);
  },
};
