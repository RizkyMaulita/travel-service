'use strict';
const { hashPassword } = require("../utils/encryption");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
      {
        userName: 'superadmin',
        email: 'superadmin@gmail.com',
        password: hashPassword('12345'),
        RoleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'admin',
        email: 'admin@gmail.com',
        password: hashPassword('12345'),
        RoleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {})
  }
};
