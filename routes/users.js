const express = require('express');
const csrf = require('csurf');
let router = express.Router();


router.use(csrf());
/* GET users listing. */
router.get('/signin', function (req, res) {
  res.render('user/signin', {
    csrfToken: req.csrfToken()
  });
});
router.post('/signin', function (req, res) {
  console.log(req.body);
  res.redirect('/');
});
router.get('/signup', function (req, res) {
  res.render('user/signup');
});


module.exports = router;
