const { Sequelize } = require("sequelize");
const dbConfig = require("./config/database");

const database = new Sequelize(dbConfig);

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
