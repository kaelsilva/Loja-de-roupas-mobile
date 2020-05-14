'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'price', Sequelize.DOUBLE);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products', 'price');
  }
};
