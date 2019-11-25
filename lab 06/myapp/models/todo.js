var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * - name
 * - description
 * - isDone
 * - active
 */
const todoSchema = new Schema({
  name: String,
  description: String,
  isDone: Boolean,
  active: Boolean,
});

/**
 * Export todo model
 */
module.exports = mongoose.model('ToDo', todoSchema);
