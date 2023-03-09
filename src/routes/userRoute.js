const express = require('express');
const userController = require('../controllers/userController');
const validateName = require('../middlewares/validateName');
const validatePassword = require('../middlewares/validatePassword');
const validateEmailExist = require('../middlewares/validateEmailExist');

const userRouter = express.Router();

userRouter.post('/', validateEmailExist, validateName,
 validatePassword, userController.insertUser);

module.exports = userRouter;