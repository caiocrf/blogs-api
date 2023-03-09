const express = require('express');
const userController = require('../controllers/userController');
const validateName = require('../middlewares/validateName');
const validatePassword = require('../middlewares/validatePassword');
const validateEmailExist = require('../middlewares/validateEmailExist');
const { validateToken } = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', validateEmailExist, validateName,
 validatePassword, userController.insertUser);

userRouter.get('/', validateToken, userController.getAllUsers);

userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;