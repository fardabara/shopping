const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
});

module.exports = mongoose.model('User', userSchema);