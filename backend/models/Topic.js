const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  visualizations: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Topic', topicSchema);
