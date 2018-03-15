let lib = require('../lib/lib');
let User = require('../models/User');
let _route = 'user/';

exports.signin = function (req, res) {
  let messages = req.flash('error');
  res.render(_route + 'signin', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasError: messages.length > 0,
  });
};

exports.signinPost = function (req, res) {
  res.redirect('/');
};

exports.signup = function (req, res) {
  console.log(req.flash());
  let messages = req.flash();
  res.render(_route + 'signup', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasError: lib._.isEmpty(messages)
  });
};

exports.signupPost = function (req, res) {
  let body = JSON.parse(JSON.stringify(req.body));
  User.findOne({ email: body.email }).then(user => {
    if(user) {
      req.flash('emailAlreadyTaken', 'Email Already Taken!');
      return res.redirect('/user/signup');
    }
    if(!body.password) {
      req.flash('passwordIsRequired', 'Password is Required!');
      return res.redirect('/user/signup');
    }
    if(body.password && body.password !== body.confirm_password) {
      req.flash('passwordNotMatch', 'Password Not Match!');
      return res.redirect('/user/signup');
    }

  });
};

exports.profile = function (req, res) {
  res.render(_route + 'profile', {
    user: req.user
  });
};

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};