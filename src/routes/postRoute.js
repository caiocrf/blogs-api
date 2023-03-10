const express = require('express');
const postController = require('../controllers/postController');
 const { validateToken } = require('../middlewares/validateToken');
//  const validatePost = require('../middlewares/validatePost');

const postRoute = express.Router();

postRoute.get('/', validateToken, postController.getAll);
postRoute.get('/:id', validateToken, postController.getById);

module.exports = postRoute;