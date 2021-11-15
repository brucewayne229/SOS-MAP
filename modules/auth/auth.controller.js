const bcrypt = require('bcryptjs');
const UserModel = require('./user.model');
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      throw new Error('username không được để trống');
    }
    if (password?.length < 6) {
      throw new Error('password cần ít nhất 6 kí tự'); // promise reject => nhảy xuống catch
    }

    
    // check db tồn tại user nào có username này chưa
    const existedUser = await UserModel.findOne({ username });

    if (existedUser) {
     
      throw new Error('đăng ký thất bại')
    }

    const salt = await bcrypt.genSalt(10);
    
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = await UserModel.create({ username, password: hashPassword });

    res.send({ 
      success: 1, 
      data: {
        _id: newUser._id,
        username: newUser.username
      }}
    );
  } catch (err) {
    res.status(400).send({ success: 0, data: null, message: err.message || 'Something went wrong'})
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // validate user input
    const existedUser = await UserModel.findOne({ username });
    
    if (!existedUser) {
      throw new Error('đăng nhập thất bại (không có username)')
    }

    const hastPassword = existedUser.password;

    const matchedPassword = await bcrypt.compare(password, hastPassword);

    if (!matchedPassword) {
      throw new Error('đăng nhập thất bại (password ko đúng)')
    }

    const identityData = {
      userId: existedUser._id
    }
    const token = jwt.sign(identityData, 'web54',{
      expiresIn: 5000
    })

    res.send({ 
      success: 1, 
      data: {
        _id: existedUser._id,
        username: existedUser.username,
        token
      }}
    );
  } catch (err) {
    res.status(400).send({ success: 0, data: null, message: err.message || 'Something went wrong'})
  }
}

module.exports = {
  signUp,
  login
}