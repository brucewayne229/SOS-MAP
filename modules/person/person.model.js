const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: [
    { type: String, required: true}
  ],
  phoneNumber: {
    type: number,
    required: true
  }, 
  avatar: String,
  status: String,//Trạng thái là người gửi hay nhận?
  foreignid: String,//Id chung với sản phẩm và người nhận(gửi)
}, {
  timestamp: true
});

const PersonModel = mongoose.model('Person', PersonSchema);

module.exports = PersonModel;