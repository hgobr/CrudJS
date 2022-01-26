const express = require('express');
const route = express.Router();

const services = require('../services/render');

// get root route
route.get('/', services.homeRoutes);

// get add user page
route.get('/add-user', services.add_user);

// get update user page
route.get('/update-user', services.update_user);

module.exports = route;
