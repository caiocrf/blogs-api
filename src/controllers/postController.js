const postService = require('../services/postService');

const STATUS_OK = 200;

const getAll = async (_req, res) => {
      const posts = await postService.getAll();
      return res.status(STATUS_OK).json(posts);
};

const getById = async (req, res) => {
    const { id } = req.params;

      const { type, message } = await postService.getById(id);
      if (type) { 
        return res.status(404).json({ message });
      }
      return res.status(STATUS_OK).json(message);
  };
module.exports = { getAll, getById };