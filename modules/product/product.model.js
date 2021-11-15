const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  id: String,
  foreignid: String,
  products:[
    {type: String, count: Number},
    {type: String, count: Number},

  ]
}, {
  timestamp: true
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;