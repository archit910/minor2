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

var movie = mongoose.model('Movies' , movieSchema);

router.get('/mov1'  , function(req , res){
	var name = 'Inception';
	 var query1 = movie.find({movie_title : name});

	 query1.exec(function (err , movieQ){
	 	if(err){
	 		console.log("Error in personelMov1");

	 	}
	 	else{
	 		console.log(movieQ[0].director_name + "<br>" + movieQ[0].country + "<br>"  + movieQ[0].imdb_score + "<br>" + movieQ[0].title_year );
	 	
	 		res.render('movie_detail.html' , {dirName : movieQ[0].director_name , imdbScore : movieQ[0].imdb_score , movName : movieQ[0].movie_title , actorOne : movieQ[0].actor_1_name , movCountry : movieQ[0].country , movYear : movieQ[0].title_year , movLanguage : movieQ[0].language , movRev : movieQ[0].num_user_for_reviews});
	 		
	 	}

	 });
	 	


	// movie.find(function(err , response){
	//  			res.json(response);
	//  		})

});

router.get('/mov2'  , function(req , res){
	var name = 'The Dark Knight';
	 var query1 = movie.find({movie_title : name});

	 query1.exec(function (err , movieQ){
	 	if(err){
	 		console.log("Error in personelMov2");

	 	}
	 	else{
	 		console.log(movieQ[0].director_name + "<br>" + movieQ[0].country + "<br>"  + movieQ[0].imdb_score + "<br>" + movieQ[0].title_year  +"<br> " +   movieQ[0].num_user_for_reviews);
	 	
	 		res.render('movie_detail.html' , {dirName : movieQ[0].director_name , imdbScore : movieQ[0].imdb_score , movName : movieQ[0].movie_title , actorOne : movieQ[0].actor_1_name , movCountry : movieQ[0].country , movYear : movieQ[0].title_year , movLanguage : movieQ[0].language , movRev : movieQ[0].num_user_for_reviews});
	 		
	 	}

	 });
	 	


	// movie.find(function(err , response){
	//  			res.json(response);
	//  		})

});

router.get('/mov5'  , function(req , res){
	var name = 'Alien';
	 var query1 = movie.find({movie_title : name});

	 query1.exec(function (err , movieQ){
	 	if(err){
	 		console.log("Error in personelMov2");

	 	}
	 	else{
	 		console.log(movieQ[0].director_name + "<br>" + movieQ[0].country + "<br>"  + movieQ[0].imdb_score + "<br>" + movieQ[0].title_year  +"<br> " +   movieQ[0].num_user_for_reviews);
	 	
	 		res.render('movie_detail.html' , {dirName : movieQ[0].director_name , imdbScore : movieQ[0].imdb_score , movName : movieQ[0].movie_title , actorOne : movieQ[0].actor_1_name , movCountry : movieQ[0].country , movYear : movieQ[0].title_year , movLanguage : movieQ[0].language , movRev : movieQ[0].num_user_for_reviews});
	 		
	 	}

	 });
	 	



	// movie.find(function(err , response){
	//  			res.json(response);
	//  		})

});


router.get('/mov4'  , function(req , res){
	var name = 'The Honeymooners';
	 var query1 = movie.find({movie_title : name});

	 query1.exec(function (err , movieQ){
	 	if(err){
	 		console.log("Error in personelMov2");

	 	}
	 	else{
	 		console.log(movieQ[0].director_name + "<br>" + movieQ[0].country + "<br>"  + movieQ[0].imdb_score + "<br>" + movieQ[0].title_year  +"<br> " +   movieQ[0].num_user_for_reviews);
	 	
	 		res.render('movie_detail.html' , {dirName : movieQ[0].director_name , imdbScore : movieQ[0].imdb_score , movName : movieQ[0].movie_title , actorOne : movieQ[0].actor_1_name , movCountry : movieQ[0].country , movYear : movieQ[0].title_year , movLanguage : movieQ[0].language , movRev : movieQ[0].num_user_for_reviews});
	 		
	 	}

	 });
	 	



	// movie.find(function(err , response){
	//  			res.json(response);
	//  		})

});


module.exports = router;



// DIRECTOR  , COUNRTY , GENERE , YEAR , DURATION , ACTOR 1-2 NAME , IMDB_LINK , LANGUAGE , BUDGET , IMDBSCORE ,
