const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const cookieSession = require('cookie-session');
const initPassport = require('./passport/init');
const winston = require('./config/winston');

//importing routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');

var app = express();

app.use(bodyParser.json());

// Cookie session configuration
var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(
  cookieSession({
    name: 'userSession',
    maxAge: expiryDate,
    keys: ['as8d3jk2rf', 'sadjs7dlas'],
    unset: 'destroy'
  }),
);

//Initializing Passport Auth method
initPassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // add this line to include winston logging
  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
