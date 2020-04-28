const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Customer = require('../models/Customer');
const Product = require('../models/Product');

const connection = new Sequelize(dbConfig);

User.init(connection);
Customer.init(connection);
Product.init(connection);

module.exports = connection;