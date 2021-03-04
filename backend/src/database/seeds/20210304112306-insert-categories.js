"use strict";

const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        id: v4(),
        name: "Ação",
      },
      {
        id: v4(),
        name: "Aventura",
      },
      {
        id: v4(),
        name: "Plataforma",
      },
      {
        id: v4(),
        name: "Corrida",
      },
      {
        id: v4(),
        name: "Esportes",
      },
      {
        id: v4(),
        name: "RPG",
      },
      {
        id: v4(),
        name: "Estratégia",
      },
      {
        id: v4(),
        name: "Simulação",
      },
      {
        id: v4(),
        name: "Terror",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories");
  },
};
