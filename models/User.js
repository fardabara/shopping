const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
});

userSchema.pre('save', function (next) {
  let user = this;
  if(!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.verifyPassword = function (_password) {
  return bcrypt.compareSync(_password, this.password);
};

module.exports = mongoose.model('User', userSchema);