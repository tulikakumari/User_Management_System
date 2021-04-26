const express = require('express');
const route = express.Router(); // allows us to create different router in a seperate file
const services = require('../services/render');
const controller = require('../controller/controller');

// @description Root Route
// @method GET
route.get('/',services.homeRoutes);

// @description add_user Route
// @method GET for add-user
route.get('/add-user',services.add_user);

// @description update_user Route
// @method GET for update user
route.get('/update-user',services.update_user);


// API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route;