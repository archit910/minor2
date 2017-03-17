var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// app.use(logger('dev'));
app.set('views', __dirname + '/public');
app.set('view engine' , 'ejs');
app.engine('html' , require('ejs').renderFile);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

var index = require('./routes/index');
// var index2 = require('./routes/index2');



app.use('/',index);

app.listen(8000);
