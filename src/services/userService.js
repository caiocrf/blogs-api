const { User } = require('../models');
const { generateToken } = require('../utils/jwtGenerate');

const insertUser = async (body) => {
    const { displayName, email, password, image } = body;
    const user = await User.findOne({ where: { email, password } });
  
    if (user) return { type: 409, message: 'User already registered' };
  
    await User.create({ displayName, email, password, image });
  
    const token = generateToken(body);
  
    return { type: null, message: token };
  };

  const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
  
    return { type: 200, message: users };
  };

  const getById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
    if (!user) return { type: 404, message: 'User does not exist' };
  
    return { type: 200, message: user };
  };
module.exports = { insertUser, getAll, getById };