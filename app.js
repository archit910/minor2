var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
var upload = multer(); 

var app = express();
// // var Linkedin = require('node-linkedin')('app-id', 'secret', 'callback');
// var PlaceSearch = require("./lib/PlaceSearch.js");
//     var RadarSearch = require("./lib/RadarSearch.js");
//     var TextSearch = require("./lib/TextSearch.js");
//     var PlaceDetailsRequest = require("./lib/PlaceDetailsRequest.js");
//     var PlaceAutocomplete = require("./lib/PlaceAutocomplete.js");
//     var AddEvent = require("./lib/AddEvent.js");
//     var DeleteEvent = require("./lib/DeleteEvent.js");
//     var EventDetails = require("./lib/EventDetails.js");
//     var ImageFetch = require("./lib/ImageFetch.js");
//     var NearBySearch = require('./lib/NearBySearch.js');

app.use(express.static(path.join(__dirname ,'public')));
app.set('views', __dirname + '/public');
// app.use(logger('dev'));
app.set('views', __dirname + '/public');
app.set('view engine' , 'ejs');
app.engine('html' , require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload.array()); // for parsing multipart/form-data
// var places= require('./routes/googlePlace')

var index = require('./routes/index');
// var index2 = require('./routes/index2');
var check = require('./routes/checkRoute');
var login = require('./routes/login');

var home = require('./routes/home');

var scrape = require('./routes/scrap');

var movie_queries = require('./routes/movie_queries');

var personal_movie = require('./routes/personalMovie');

var update_movies = require('./routes/update_movies');
app.use('/',index);
app.use('/',login);
// app.use('/' , places);
// app.use('/' , check)
app.use('/',  home);
app.use('/'  ,movie_queries);
app.use('/' , personal_movie);
app.use('/' , update_movies);
app.use('/' , scrape);
app.get('*', function(req , res){
	res.send("ERROR 404 FILE NOT FOUND");
})


app.listen(8000);
console.log('Server Running at localhost:8000');
