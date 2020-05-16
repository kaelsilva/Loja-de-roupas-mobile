'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      total_price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      is_finished: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      customer_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('sales');
  }
};
