const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  type: ['send', 'receiver'],
  cord: [], // Tọa độ vị trí trên bản đồ
  products:[
    {type: String, count: Number},
    {type: String, count: Number},
  ],
  name: String,
  address: String,
  phoneNumber: String,
  imageUrls: [],
  status: ['',''], // Trạng thái kiểm duyệt bài
  isCancel: false,
  isFinished: false 
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;