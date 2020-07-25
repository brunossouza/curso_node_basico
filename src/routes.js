const { Router } = require('express');
const ExerciciosController = require('./controller/ExerciciosController')

const routes = Router();

routes.get('/', (req, res) => res.send('running from routes'));
routes.get('/oddPair', ExerciciosController.listOddPair);
routes.get('/orderNumbers', ExerciciosController.ordernarNumeros);

module.exports = routes;