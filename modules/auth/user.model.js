const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
      type: String,
      require: true
  },
  password: {
      type: String,
      require: true
  },
  role:"admin"
},{
    timestamp: true
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;