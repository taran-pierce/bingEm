var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var fs = require('fs-extra');
//var sass = require('node-sass');
var exec = require('child_process').exec;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//console.log(__dirname);

var filePath = 'public/stylesheets/base.scss';
var file = fs.readFileSync(filePath);

console.log('Initial File content : ' + file);

//fs.watch(filePath, function(event, filename) {
//  if(filename){
//    console.log('Event : ' + event);
//    console.log(filename + ' file Changed ...');
//    file = fs.readFileSync(filePath);
//    console.log('File content at : ' + new Date() + ' is \n' + file);
//
//    //console.log(filePath);
//    //console.log('this: ', this);
//    exec('npm run sass');
//
//    //exec('npm run browserSync');
//
//  }
//  else{
//    console.log('filename not provided')
//  }
//});

module.exports = app;
