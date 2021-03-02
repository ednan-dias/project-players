"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Ednan Dias",
          email: "ednan.741@gmail.com",
          password: "eusouonan65",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /*
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
