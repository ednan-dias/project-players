const Category = require("../models/Category");

module.exports = {
  async index(req, res) {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  },
};
