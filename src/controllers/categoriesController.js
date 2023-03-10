const categoriesService = require('../services/categoriesService');

const CREATED = 201;
const STATUS_OK = 200;

const insertCategories = async (req, res) => {
    const { body } = req;
    try {
      const { type, message } = await categoriesService.insertCategories(body);
      if (type !== CREATED) {
      return res.status(400).json({ message });
    } return res.status(201).json(message);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

const getAll = async (_req, res) => {
  try {
    const { type, message } = await categoriesService.getAll();
    if (type !== STATUS_OK) { 
      return res.status(400).json({ message });
   } 
   return res.status(STATUS_OK).json(message);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { insertCategories, getAll };