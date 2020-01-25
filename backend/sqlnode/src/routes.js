const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const CustomerController = require('./controllers/CustomerController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.destroy);
routes.put('/users/:id', UserController.update);

routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);
routes.delete('/users/:user_id/addresses/:id', AddressController.destroy);
routes.put('/users/:user_id/addresses/:id', AddressController.update);

routes.post('/customers', CustomerController.store);
routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.delete('/customers/:id', CustomerController.destroy);
routes.put('/customers/:id', CustomerController.update);

module.exports = routes;