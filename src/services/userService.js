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

module.exports = { insertUser };