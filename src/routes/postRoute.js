const express = require('express');
const postController = require('../controllers/postController');
 const { validateToken } = require('../middlewares/validateToken');
//  const validatePost = require('../middlewares/validatePost');

const postRoute = express.Router();

postRoute.post('/', validateToken, postController.insertPost);

module.exports = postRoute;