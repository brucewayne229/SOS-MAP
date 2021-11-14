const mongoose = require('mongoose');

const ReceiverSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamp: true
});

const ReceiverrModel = mongoose.model('Receiver', ReceiverSchema);

module.exports = ReceiverrModel;