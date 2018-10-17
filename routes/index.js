const express = require('express');
const router = express.Router();
const passport = require('passport');
const requireLogin = require('../passport/requireLogin');
const winston = require('../config/winston');

/* GET home page. */
router.get('/', requireLogin, function (req, res, next) {
  res.render('catalog', {
    title: 'Dashboard'
  });
});

var opts = {
  failWithError: true,  
  successRedirect: '/catalog',
  failureRedirect: '/login',
}

router.get('/login', (req, res) => {
  if (req.user) {
    return res.redirect('/catalog')      
  } else {
    res.render('login');
  }
});

router.post('/login', passport.authenticate('ActiveDirectory', opts));


// if (!res.user) {
//   winston.error(`${req.ip} tried to login with as ${req.user.displayName} but the access was denied.`);
//   return res.status(401);
// }
// if (req.user) {    
//   return res.redirect('/catalog');
// }
// winston.info(`${req.user.displayName} connected with IP ${req.ip}`);
// return res.status(200);

router.get('/logout', (req, res) => {
  winston.info(`${req.user.displayName} disconnected`);
  req.session = null;
  res.redirect('/');
});

router.get('/terms', (req, res) => {
  res.render('terms', {title: 'Terms and conditions'})
});


module.exports = router;