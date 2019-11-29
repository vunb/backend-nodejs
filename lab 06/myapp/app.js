var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var passportConfig = require('./config/passport');
var startDbServerDev = require('./tasks/db-connection');
var initDefaultData = require('./tasks/db-init');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todo.router');

var app = express();
var isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  // Tạo db server dev
  startDbServerDev('TodoApp').then(async (uri) => {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Kết nối db thành công: ', uri)

    await initDefaultData();
    console.log('Khởi tạo dữ liệu ban đầu thành công!');

  })
} else {
  // Đọc file cấu hình mode production
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

// config passport before route
passportConfig(app);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo', todoRouter);

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
