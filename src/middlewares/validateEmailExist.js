// const BAD_REQUEST = 400;
// const validateEmailExist = (req, res, next) => {
//     const { email } = req.body;
//     const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;

//     if (!regex.test(email)) {
//         return res.status(BAD_REQUEST)
//         .json({ message: '"email" must be a valid email' });
//     }
//     next();
// };

// module.exports = validateEmailExist;