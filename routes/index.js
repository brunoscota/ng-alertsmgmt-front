const express = require('express');
const router = express.Router();
const passport = require('passport');
const requireLogin = require('../passport/requireLogin');

/* GET home page. */
router.get('/', requireLogin, function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

var opts = {
  failWithError: true,
  session: true
}

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('ActiveDirectory', opts), function (req, res) {
  //console.log(req.user);
  res.redirect('/')
}, function (err) {
  res.status(401).send('Not Authenticated')
})

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
