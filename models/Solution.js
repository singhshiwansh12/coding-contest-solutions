const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  contestName: {
    type: String,
    required: true,
    trim: true
  },
  problemTitle: {
    type: String,
    required: true,
    trim: true
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard']
  },
  language: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  timeComplexity: {
    type: String,
    default: 'N/A'
  },
  spaceComplexity: {
    type: String,
    default: 'N/A'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Solution', solutionSchema);
