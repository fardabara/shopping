const passport = require('passport');
const LocalStrategy = require('passport-local');
let User = require('../models/User');


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function (req, email, password, done) {
  req.checkBody('email', 'Invalid email').notEmpty().isEmail();
  req.checkBody('password', 'Invalid password').notEmpty().isLength({ min: 4 });
  let errors = req.validationErrors();
  if(errors) {
    let messages = [];
    errors.forEach(err => {
      messages.push(err.msg);
    });
    return done(null, false, req.flash('error', messages));
  }
  User.findOne({ email: email }, function (err, user) {
    if(err) return done(err);
    if(!user) return done(null, false, { message: 'Email is not valid!' });
    if(!user.verifyPassword(password))
      return done(null, false, { message: 'Password Incorrect!' });
    return done(null, user);
  });
}));

