const { loginService } = require('../services');
const { generateToken } = require('../utils/jwtGenerate');

const STATUS_OK = 200;
const BAD_REQUEST = 400;
const login = async (req, res) => {
    const { email, password } = req.body;
  
    const { error, message, user } = await loginService.login(email, password);

    const token = generateToken({ data: user });
    
    if (error) { 
      return res.status(BAD_REQUEST).json({ message });
}
    return res.status(STATUS_OK).json({ message, token });
  };
  
  module.exports = {
    login,
  };