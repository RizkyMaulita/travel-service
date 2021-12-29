'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('TravelPackages', {
      fields: ['typeId'],
      type: 'foreign key',
      name: 'fk_type_in_travel',
      references: {
        table: 'Types',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('TravelPackages', 'fk_type_in_travel', {})
  }
};
