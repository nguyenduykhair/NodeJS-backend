const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchma = new Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
    minlength: [6, 'Must be at least 6 characters'],
    maxlength: [30, 'Must be less than 30 characters'],
  },

  description: String,
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchea);

module.exports = Todo;
