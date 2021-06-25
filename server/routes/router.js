const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add note
 *  @method GET /add-note
 */
route.get('/add-note', services.add_note)

/**
 *  @description for update note
 *  @method GET /update-note
 */
route.get('/update-note', services.update_note)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
route.get('/api/notetitle/:title', controller.findtitle);


module.exports = route