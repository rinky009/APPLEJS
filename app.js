var createError = require('http-errors');
const sql=require('mssql')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mobileRouter=require('./routes/mobileRouter.js');
const postRouter=require('./routes/postRouter');

const findRouter=require('./routes/findRouter.js');
const insertRouter=require('./routes/insertRouter.js');
const updateRouter=require('./routes/updateRouter');
const deleteRouter=require('./routes/deleteRouter');
const studentRouter=require('./routes/studentRouter.js');

const formRouter = require('./routes/formRouter.js');

const formstuRouter = require('./routes/formstuRouter');
const getRouter=require('./routes/getRouter');

const loginRouter = require('./routes/loginRouter.js');
const authentication=require('./routes/authentication');
const logout=require('./routes/logout');
const contact=require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/mobileDetails', mobileRouter);
app.get('/mobileDetails/:name', mobileRouter);
app.post('/addName',postRouter);
app.get('/studentDetails', studentRouter);

app.get('/find', findRouter);
app.post('/insert', insertRouter);
app.put('/update', updateRouter);
app.put('/delete', deleteRouter);

app.get('/getForm', formRouter);
app.post('/postRegDetails', formRouter);

app.get('/studentForm', formstuRouter);
app.post('/regsDetails', formstuRouter);
app.get('/getRecord', getRouter);
app.get('/deleteRecord/:id', getRouter);
app.get('/getRecordid/:id', getRouter);
app.post('/updateRecordbyid', getRouter);

app.get('/loginForm', loginRouter);
app.post('/auth',authentication);
app.get('/mainPage',authentication);
app.get('/logout',logout);
app.get('/contact',contact);
//app.post('/postloginDetails', loginRouter);




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
