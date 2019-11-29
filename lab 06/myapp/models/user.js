var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * - username
 * - password
 * - phone
 * - active
 */
const userSchema = new Schema({
  username: String,
  password: String,
  phone: Boolean,
  active: Boolean,
});

/**
 * Export user model
 */
module.exports = mongoose.model('User', userSchema);
