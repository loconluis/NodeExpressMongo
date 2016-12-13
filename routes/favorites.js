'use strict'

let express = require('express');
let ctrl_favorite = require('../controllers/ctrlfavorite');
let api = express.Router();

api.get('/prueba/:nombre?', ctrl_favorite.prueba);
api.get('/favorito/:id', ctrl_favorite.getFavorite);
api.get('/prueba/:nombre?', ctrl_favorite.getFavorites);
api.post('/favoritos', ctrl_favorite.saveFavorite);
api.put('/favorito', ctrl_favorite.updateFavorite);
api.delete('/favorito/:id', ctrl_favorite.deleteFavorite);

module.exports = api;