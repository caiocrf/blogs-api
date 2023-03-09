const { userService } = require('../services');

const insertUser = async (req, res) => {
    const { body } = req;
    
    const { type, message } = await userService.insertUser(body);
    if (type) return res.status(type).json({ message });
    
    return res.status(201).json({ token: message });
    };

 module.exports = { insertUser };