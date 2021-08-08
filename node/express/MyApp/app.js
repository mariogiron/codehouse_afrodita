const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dayjs = require('dayjs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






/**
 * 
 * MIDDLEWARES
 * 
 */

app.use((req, res, next) => {
  console.log(new Date().toLocaleDateString());
  next();
});

// Recupero un número aleatorio
// si el número es mayor de 0.5 respondo con un error
// si el número es menor de 0.5 sigo hacia el manejador final
app.use((req, res, next) => {
  const randomNum = Math.random();
  console.log(randomNum);
  if (randomNum > 0.8) {
    res.end('El número es mayor de 0.8 ' + randomNum);
  } else {
    next();
  }
});

// Fecha UNIX
app.use((req, res, next) => {
  // console.log(dayjs().unix());
  req.unixTime = dayjs().unix();
  next();
});

// 

// FIN MIDDLEWARES

// GESTIÓN RUTAS
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
// FIN GESTIÓN RUTAS









// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
