const { Category, User, BlogPost } = require('../models');

const getAll = async () => {
    const allPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
  
    });
  
    return allPosts;
  };

  const getById = async (id) => {
    const result = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
  
    if (!result) return { type: 404, message: 'Post does not exist' };
  
    return { type: null, message: result };
  };
module.exports = { getAll, getById };