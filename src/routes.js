const { Router } = require('express');
const RoutesController = require('./controller/RoutesController')

const routes = Router();

routes.get('/', (req, res) => res.send('running from routes'));
routes.get('/oddPair', RoutesController.listOddPair);

module.exports = routes;