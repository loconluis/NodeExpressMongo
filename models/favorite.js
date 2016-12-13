'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let favoriteSchema = Schema({
    title: String,
    description: String,
    url: String
});


module.exports = mongoose.model('Favorite', favoriteSchema);