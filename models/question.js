const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [
    {
      optionText: String,
      votes: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model('Question', questionSchema);
