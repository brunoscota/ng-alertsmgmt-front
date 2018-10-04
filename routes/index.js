var express = require('express');
var router = express.Router();
var passport = require('passport');
var initPassport = require('../passport/init');
initPassport(passport);

var opts = { failWithError: true }


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});



router.post('/login', passport.authenticate('ActiveDirectory', opts), function(req, res) {
  res.render('login', { title: 'Login' });
  res.json(req.user)
}, function (err) {
  console.log(err);
  //res.status(401).send('Not Authenticated')
})

module.exports = router;
