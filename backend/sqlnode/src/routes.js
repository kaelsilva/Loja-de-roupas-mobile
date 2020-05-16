const express = require('express');
const UserController = require('./controllers/UserController');
const CustomerController = require('./controllers/CustomerController');
const ProductController = require('./controllers/ProductController');
const ProviderController = require('./controllers/ProviderController');
const SaleController = require('./controllers/SaleController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.destroy);
routes.put('/users/:id', UserController.update);

routes.post('/customers', CustomerController.store);
routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.delete('/customers/:id', CustomerController.destroy);
routes.put('/customers/:id', CustomerController.update);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.delete('/products/:id', ProductController.destroy);
routes.put('/products/:id', ProductController.update);

routes.post('/providers', ProviderController.store);
routes.get('/providers', ProviderController.index);
routes.get('/providers/:id', ProviderController.show);
routes.delete('/providers/:id', ProviderController.destroy);
routes.put('/providers/:id', ProviderController.update);

routes.post('/sales', SaleController.store);
routes.get('/sales', SaleController.index);
routes.get('/sales/:id', SaleController.show);
routes.delete('/sales/:id', SaleController.destroy);
routes.put('/sales/:id', SaleController.update);

module.exports = routes;