const express = require('express');
const csrf = require('csurf');
const passport = require('passport');

let router = express.Router();
let helpers = require('../lib/helpers');


router.use(csrf());
/* GET users listing. */

let userModule = require('../controllers/userController');
router.get('/signin', userModule.signin);
router.post('/signin', passport.authenticate('local', {
  failureRedirect: '/user/signin',
  failureFlash: true
}), userModule.signinPost);
router.get('/signup', userModule.signup);
router.post('/signup', userModule.signupPost);
router.get('/profile', helpers.isAuthenticated, userModule.profile);
router.get('/logout', helpers.isAuthenticated, userModule.logout);


module.exports = router;
