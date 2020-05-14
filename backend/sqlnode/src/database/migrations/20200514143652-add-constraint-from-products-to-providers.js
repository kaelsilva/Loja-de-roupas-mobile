'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('products', ['providers_id'], {
      type: 'foreign key',
      name: 'FK_products_providers',
      references: {
        table: 'providers',
        field: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeContraint('products', 'FK_products_providers');
  }
};
