var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var sentiment = require('sentiment');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/minor_db');
var pre_imdb  = 0 ; 
var numUser  = 0;
var movie_sent = mongoose.Schema({
	movie_title : String , 
	neg_rev : Number , 
	pos_rev : Number , 
});
var senti = mongoose.model('movies_sentIments' , movie_sent);
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

var movie = mongoose.model('MoVies' , movieSchema);

router.post('/movieupdate' , function(req , res){
	// console.log('OK ' + req.body)
	String.prototype.trimRight=function(){return this.replace(/\s+$/,'');}
	var mTitle = String((req.body.mname));
	mTitle = mTitle.trimRight();
	var comment = String((req.body._comment));
	var Score_ = sentiment(comment);
	var pos , neg;
	pos = neg = 0;
	if(Score_.score >= 0){
		pos += 1;
	}
	else {
		neg += 1;
	}
	
	console.log(comment)
	if(mTitle === "Inception ")
	{
		console.log("True");
	}
	else{
		console.log(mTitle + " and " + "Inception");
	}
	console.log("This is Mtitiel " + mTitle);
	
	var query1 = movie.find({movie_title : mTitle});
		var pneg , ppos ;
	pneg = ppos = 0;
	senti.find({movie_title : mTitle}).exec(function(err , docs){
		
		if(docs.length > 0){
			console.log("Checking Status " + docs[0].pos_rev + " " + docs[0].neg_rev);
		ppos = parseInt(docs[0].pos_rev);
		pneg = parseInt(docs[0].neg_rev); }

		console.log("Checking Status now " + ppos + " " + pneg);
		ppos += pos;
		pneg += neg;
	console.log("These " + ppos + " " + pneg);
	senti.update({movie_title : mTitle} , { $set :{neg_rev :  pneg}}  , {upsert : true} ,  function(err , movieQ){
		if(err){
			console.log("Error in updation");
		}
		else{
			//res.send("Updated ho gaya bc");
		}
	});
	senti.update({movie_title : mTitle} , { $set :{pos_rev :  ppos}}  , {upsert :true}  , function(err , movieQ){
		if(err){
			console.log("Error in updation");
		}
		else{
			//res.send("Updated ho gaya bc");
		}
	});

	});
	
	
	query1.exec(function(err , mQ){
		pre_imdb = mQ[0].imdb_score;
		
		numUser = mQ[0].num_user_for_reviews + 1;
		console.log("This is " + pre_imdb + " and " + numUser);
		var Rating = parseInt((req.body.Rating));
	var newImdb = (((numUser - 1) * pre_imdb ) + Rating) / (numUser) ;
	newImdb = newImdb.toPrecision(2);
	console.log(pre_imdb + " and " + newImdb) ;
	movie.update({movie_title : mTitle} , {$inc :{num_user_for_reviews: 1} , $set :{imdb_score :  newImdb}} , function(err , movieQ){
		if(err){
			console.log("Error in updation");
		}
		else{
			res.send("Updated Sir/Madam");
		}
	});
	//res.send((req.body.mname));
	});

	
	// movie.update({movie_title : mTitle} , {$inc :{num_user_for_reviews: 1} , $set :{imdb_score :  9}} , function(err , movieQ){
	// 	if(err){
	// 		console.log("Error in updation");
	// 	}
	// 	else{
	// 		res.send("Updated Sir/Madam");
	// 	}
	// });
	// res.send((req.body.mname));
});

module.exports = router;