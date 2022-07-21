const express = require('express');

const authRouter = express.Router();

const userControl = require('../controls/userControl');


authRouter.post('/register', userControl.register);
authRouter.post('/login', userControl.login);


module.exports = authRouter

