const mongoose = require('mongoose');

const GiverSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamp: true
});

const GiverModel = mongoose.model('Giver', GiverSchema);

module.exports = GiverModel;