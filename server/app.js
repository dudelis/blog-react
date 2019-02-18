const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const v1 = require('./routes/v1');
const db = require('./db');
const CONFIG = require('./config');

const app = express();

console.log('Environment:', CONFIG.app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//  TODO: Add cors section and passport authentication.

app.use('/v1', v1);

app.use('/', (req, res) => {
    res.statusCode = 200; // send the appropriate status code
    res.json({ status: 'success', message: 'Api Data', data: {} });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
