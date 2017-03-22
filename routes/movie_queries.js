var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/minor_db');


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

var movie = mongoose.model('movies' , movieSchema);

router.get('/horror' , function(req , res ){
		var input = 'Horror'
		movie.find({genres : new RegExp(input , "i" )}).sort({imdb_score : -1}).exec(function(err , docs){
			if(err){
				console.log('EROR bro')
			}
			else{
				var i ;
				for(i = 0 ; i < docs.length ; i ++ ){

				//	console.log(docs[i].imdb_score);
				}
				res.render('jsonrend.html' , {somevar : JSON.stringify(docs) , movieType : input});

			}
		});

			
			
		});

/******/
router.get('/movie_page' , function(req , res ){
		var input = req.body.name;
		movie.find({genres : new RegExp(input , "i" )}).sort({imdb_score : -1}).exec(function(err , docs){
			if(err){
				console.log('EROR bro')
			}
			else{
				var i ;
				for(i = 0 ; i < docs.length ; i ++ ){

				//	console.log(docs[i].imdb_score);
				}
				res.render('jsonrend.html' , {somevar : JSON.stringify(docs) , movieType : input});

			}
		});
		

			
			
		});
router.get('/action' , function(req , res ){
		var input = 'Action'
		movie.find({genres : new RegExp(input , "i" )}).sort({imdb_score : -1}).exec(function(err , docs){
			if(err){
				console.log('EROR bro')
			}
			else{
				var i ;
				for(i = 0 ; i < docs.length ; i ++ ){

				//	console.log(docs[i].imdb_score);
				}
				res.render('jsonrend.html' , {somevar : JSON.stringify(docs) , movieType : input});

			}
		});

			
			
		});
/*****/
router.get('/SciFi' , function(req , res ){
		var input = 'Sci-fi'
		movie.find({genres : new RegExp(input , "i" )}).sort({imdb_score : -1}).exec(function(err , docs){
			if(err){
				console.log('EROR bro')
			}
			else{
				var i ;
				for(i = 0 ; i < docs.length ; i ++ ){

				//	console.log(docs[i].imdb_score);
				}
				res.render('jsonrend.html' , {somevar : JSON.stringify(docs) , movieType : input});

			}
		});
		

			
			
		});

/*****/

router.get('/comedy' , function(req , res ){
		var input = 'Comedy'
		movie.find({genres : new RegExp(input , "i" )}).sort({imdb_score : -1}).exec(function(err , docs){
			if(err){
				console.log('EROR bro')
			}
			else{
				var i ;
				for(i = 0 ; i < docs.length ; i ++ ){

				//	console.log(docs[i].imdb_score);
				}
				res.render('jsonrend.html' , {somevar : JSON.stringify(docs) , movieType : input});

			}
		});
			
			
		});
	

/******** NOW THERE ARE QUERIES TO FETCH DATA **********/





module.exports = router;
