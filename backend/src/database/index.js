const { Sequelize } = require("sequelize");
const dbConfig = require("./config/database");

const User = require("../models/User");
const Category = require("../models/Category");

const database = new Sequelize(dbConfig);

User.init(database);
Category.init(database);

const connection = async () => {
  try {
    await database.authenticate();
    console.log("Banco de dados conectado ✅");
  } catch (error) {
    console.log(`Erro ao conectar ao banco de dados: ${error}`);
  }
};
connection();

module.exports = database;
