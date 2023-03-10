const express = require('express');
 const categoriesController = require('../controllers/categoriesController');
 const { validateToken } = require('../middlewares/validateToken');

 const categoriesRoute = express.Router();

 categoriesRoute.post('/', validateToken, categoriesController.insertCategories);
 categoriesRoute.get('/', validateToken, categoriesController.getAll);

 module.exports = categoriesRoute;