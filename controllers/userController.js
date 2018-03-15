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
  res.render(_route + 'signup');
};

exports.signupPost = function (req, res) {
  console.log(req.body);
  res.send(req.body);
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