//Require Modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var fs = require('fs'); // File Management system

//Routes Create Route but dont use them Only Path
//The route we getting from indes.js will be Written to indexRouter
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Create App
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//set view engine to hoganjs
app.set('view engine', 'hjs');

//Lode Debugger and public stuff
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//Use Route and tell the Paths on Url // Tell were the route starts *1
app.use('/', indexRouter);
//app.use('/users', usersRouter);

//Connect
//mongoose.connect('mongoose://127.0.0.1/mongo');

//Loop trough all models directory and load files js
//load all files ind models dir
/*
fs.readdirSync(__dirname + '/models').forEach(function(file){
      if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
    }
);
*/
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
