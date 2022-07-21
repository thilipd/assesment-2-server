const express = require('express');
const movieControl = require('../controls/movieControl');

const movieRoute = express.Router();


movieRoute.get('/list', movieControl.list)
movieRoute.post('/create', movieControl.create)
movieRoute.put('/update/:id', movieControl.update)
movieRoute.delete('/delete/:id', movieControl.delete)
movieRoute.post('/list/:id', movieControl.listById)

module.exports = movieRoute