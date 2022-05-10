var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var BankRouter = require('./routes/BankRouter');
var Banksubmit = require('./routes/Banksubmit');
var authentication = require('./routes/authentication');
var banklogout = require('./routes/banklogout');
var Bankemail = require('./routes/Bankemail');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/BankForm', BankRouter);
app.post('/BankDetails', BankRouter);
app.post('/submitbank', Banksubmit);
app.get('/submitbank', Banksubmit);
app.post('/auth', authentication);
app.get('/welcome', authentication);
app.get('/banklogout',banklogout);
app.post('/Bankemail',Bankemail);
app.post('/checklogin',Bankemail);
app.post('/checkwelcome',Bankemail);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
