var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
var upload = multer(); 
var app = express();
app.use(express.static(path.join(__dirname ,'public')));
app.set('views', __dirname + '/public');
// app.use(logger('dev'));
app.set('views', __dirname + '/public');
app.set('view engine' , 'ejs');
app.engine('html' , require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload.array()); // for parsing multipart/form-data

var index = require('./routes/index');
// var index2 = require('./routes/index2');



app.use('/',index);

app.listen(8000);
