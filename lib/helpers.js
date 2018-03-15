let isAuthenticated = function (req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/user/signin');
};

module.exports = {
  isAuthenticated
};