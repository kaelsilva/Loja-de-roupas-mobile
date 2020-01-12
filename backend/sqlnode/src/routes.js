const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.destroy);
routes.put('/users/:id', UserController.update);

routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);

module.exports = routes;