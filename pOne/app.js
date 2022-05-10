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

const about=require('./routes/about');
const attendence=require('./routes/attendence.js');

const admin=require('./routes/admin');
const adminauth=require('./routes/adminauth.js');
const adminlogout=require('./routes/adminlogout');

const adminRouter = require('./routes/adminRouter');
const admingetRoutes = require('./routes/admingetRoutes')

const mgsRouter=require('./routes/mgsRouter');
const mgsgetRouter=require('./routes/mgsgetRouter');
const mgsdisplayRouter=require('./routes/mgsdisplayRouter');



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
app.get('/mainpage',authentication);
app.get('/logout',logout);
app.get('/contact',contact);
//app.post('/postloginDetails', loginRouter);
app.get('/about',about);
app.get('/updateAttendence',attendence);

app.get('/admin', admin);
app.post('/AdminDetails', admin);
app.post('/authe',adminauth);
app.get('/welcomadmin',adminauth);
app.get('/adminlogin',adminauth);
app.get('/adminlogout',adminlogout);

app.get('/Formadmin', adminRouter);
app.get('/adminForm', adminRouter);
app.post('/adminregsDetails', adminRouter);
app.get('/admingetRecord',admingetRoutes);
app.get('/admindeleteRecord/:id', admingetRoutes);
app.get('/admingetRecordid/:id', admingetRoutes);
app.post('/adminupdateRecordbyid', admingetRoutes);

app.get('/mgsshow',mgsRouter);
app.post('/mgssageSubmit',mgsRouter);
app.get('/mgsgetRecord',mgsgetRouter);
app.get('/mgsdeleteRecord/:id', mgsgetRouter);
app.get('/mgsgetRecordid/:id', mgsgetRouter);
app.post('/mgsupdateRecordbyid', mgsgetRouter);
app.get('/mgsdisplayRecord', mgsdisplayRouter);





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
