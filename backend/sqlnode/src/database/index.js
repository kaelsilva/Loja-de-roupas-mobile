const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Provider = require('../models/Provider');
const Sale = require('../models/Sale');

const connection = new Sequelize(dbConfig);

User.init(connection);
Customer.init(connection);
Product.init(connection);
Provider.init(connection);
Sale.init(connection);

module.exports = connection;