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

var login = require('./routes/login');

var home = require('./routes/home');

var movie_queries = require('./routes/movie_queries');

var personal_movie = require('./routes/personalMovie');

var update_movies = require('./routes/update_movies');
app.use('/',index);
app.use('/',login);
app.use('/',home);
app.use('/'  ,movie_queries);
app.use('/' , personal_movie);
app.use('/' , update_movies);
app.get('*', function(req , res){
	res.send("ERROR 404 FILE NOT FOUND");
})


app.listen(8000);
console.log('Server Running at localhost:8000');
