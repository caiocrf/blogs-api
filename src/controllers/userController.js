const { userService } = require('../services');

const STATUS_OK = 200;
const insertUser = async (req, res) => {
    const { body } = req;
    
    const { type, message } = await userService.insertUser(body);
    if (type) return res.status(type).json({ message });
    
    return res.status(201).json({ token: message });
    };

const getAllUsers = async (_req, res) => {
 const { type, message } = await userService.getAll();
 return res.status(type).json(message);
  };

  const getUserById = async (req, res) => {
    const { id } = req.params;
    
    const { type, message } = await userService.getById(id);
    
    if (type !== STATUS_OK) return res.status(404).json({ message });
    
    return res.status(200).json(message);
    };
 module.exports = { insertUser, getAllUsers, getUserById };