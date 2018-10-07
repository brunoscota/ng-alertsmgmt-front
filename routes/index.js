const express = require('express');
const router = express.Router();
const passport = require('passport');
const requireLogin = require('../passport/requireLogin');

/* GET home page. */
router.get('/', requireLogin, function (req, res, next) {
  res.render('index', {
    title: 'Dashboard'
  });
});

var opts = {
  failWithError: false,
  successRedirect: '/',
  failureRedirect: '/login',
  failureMessage: 'error'
}

router.get('/login', (req, res) => {
  if (req.user) {
    return res.redirect('/')      
  } else {
    res.render('login');
  }
});

router.post('/login', passport.authenticate('ActiveDirectory', opts), function (req, res, error) {
  // if (error) {
  //   return res.status(500).json(error);
  // }
  // if (!res.user) {
  //   return res.status(401).json(info.message);
  // }
  // return res.status(200);  

  if (req.user) {
    return res.redirect('/')      
  }
  next();
})

router.get('/current_user', (req, res) => {

});

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

router.get('/terms', (req, res) => {
  res.render('terms', {title: 'Terms and conditions'})
});


module.exports = router;