const BAD_REQUEST = 400;
const validateLogin = (req, res, next) => {
 const { email, password } = req.body;
 if (!email || !password) {
    return res.status(BAD_REQUEST)
    .json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = validateLogin;