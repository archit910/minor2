var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/minor_db');
var movie_sent = mongoose.Schema({
	movie_title : String , 
	neg_rev : Number , 
	pos_rev : Number , 
});
var senti = mongoose.model('movies_sentIents' , movie_sent);

var movieSchema = mongoose.Schema({
		color : String,
	director_name : String,
	num_critic_for_reviews : Number,
	duration : Number,
	director_facebook_likes : Number,
	actor_3_facebook_likes : Number,
	actor_2_name : String,
	actor_1_facebook_likes : Number,
	gross : Number,
	genres : String,
	actor_1_name : String,
	movie_title : String,
	num_voted_users : Number,
	cast_total_facebook_likes : Number,
	actor_3_name : String,
	facenumber_in_poster : Number,
	plot_keywords : String,
	movie_imdb_link : String,
	num_user_for_reviews : Number,
	language : String , 
	country : String,
	content_rating : String,
	budget : Number,
	title_year : Number,
	actor_2_facebook_likes : Number,
	imdb_score : Number,
	aspect_ratio : Number,
	movie_facebook_likes : Number , 

});

var movie = mongoose.model('Movies' , movieSchema);



module.exports = router;



// DIRECTOR  , COUNRTY , GENERE , YEAR , DURATION , ACTOR 1-2 NAME , IMDB_LINK , LANGUAGE , BUDGET , IMDBSCORE ,
