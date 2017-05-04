var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var levenshtein = require('levenshtein-edit-distance');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/minor_db');
var movie_sent = mongoose.Schema({
	movie_title : String , 
	neg_rev : Number , 
	pos_rev : Number , 
});

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
var senti = mongoose.model('movies_sentiments' , movie_sent);
router.get('/checkSenti' , function(req , res){
	var pneg , ppos ;
	pneg = ppos = 0;
	senti.find({movie_title : 'IronMan'}).exec(function(err , docs){
		console.log(docs);
		if(docs.length > 0){
			console.log("Checking Status " + docs[0].pos_rev + " " + docs[0].neg_rev);
		ppos = parseInt(docs[0].pos_rev);
		pneg = parseInt(docs[0].neg_rev); }
		console.log("Checking Status now " + ppos + " " + pneg);
		ppos += 1;
		pneg += 1;
	console.log("These " + ppos + " " + pneg);
	senti.update({movie_title : 'IronMan'} , { $set :{neg_rev :  pneg}}  , {upsert : true} ,  function(err , movieQ){
		if(err){
			console.log("Error in updation");
		}
		else{
			//res.send("Updated ho gaya bc");
		}
	});
	senti.update({movie_title : 'IronMan'} , { $set :{pos_rev :  ppos}}  , {upsert :true}  , function(err , movieQ){
		if(err){
			console.log("Error in updation");
		}
		else{
			res.send("Updated ho gaya bc");
		}
	});

	});
	
	

	//res.send((req.body.mname));
	
});
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
				var i;
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
router.post('/findMovie' , function(req , res){
	//res.send("Search");
	String.prototype.trimRight=function(){return this.replace(/\s+$/,'');}
	var input = String((req.body.searchMovie));
	console.log(input);
	input = input.trimRight();
	console.log(input);
	movie.find({movie_title : new RegExp(input , "i" )}).sort({imdb_score : -1}).exec(function(err , docs){
			if(err){
				console.log('ERORR bro')
			}
			else{
				//console.log(docs.length)
				var i ;
				if(docs.length == 0){
						//	console.log("This is yash chauhan");

						movie.find().exec(function(err , docs2){
							//console.log(docs2);
							for(var i = 0 ; i < docs2.length ; i ++){
								//console.log("Check Check Check ");
								var a = String(docs2[i].movie_title);
								var b = String(input);
								//console.log("A is " + a  + " " + b);
								if(true) {

									

								var dist = levenshtein(a , b);

								//console.log("A is " + a  + " " + b);
								//console.log("Distance " , dist);

								if(dist <= 3){
									console.log("OK " + docs2[i].movie_title);
									docs.push(docs2[i]);
								}}

							}
							res.render('jsonrend.html' , {somevar : JSON.stringify(docs) , movieType : "Search Results for " + input});
						});
							console.log("Docs ki le " + docs.length);

							
				}
				else{
				for(i = 0 ; i < docs.length && i < 10 ; i ++ ){

					console.log("Allright " + docs[i].movie_title);
				}
				res.render('jsonrend.html' , {somevar : JSON.stringify(docs) , movieType : "Search Results for " + input});
			}
			}
		});


});

///
router.post('/CheckMovie'  , function(req , res){
		// console.log("Ham yahan hai " + req.body.movieKaNaam);

		// res.send('id: ' + req.body.movieKaNaam);
		var name = req.body.movieKaNaam;
	 var query1 = movie.find({movie_title : name});
	 var pvar , nvar;
	 pvar = 0 ;
	 nvar = 0;
	 query1.exec(function (err , movieQ){
	 	if(err){
	 		console.log("Error in personelMov2");

	 	}
	 	else{
	 		 senti.find({movie_title : name}).exec(function(err , docs){
	 		 	console.log(docs);
	 	if(docs.length > 0 ){
	 		pvar = docs[0].pos_rev;
	 		nvar = docs[0].neg_rev;}
	 		else {pvar = nvar = 0;}
	 			 		res.render('movie_detail.html' , {poss : pvar , negg : nvar  , dirName : movieQ[0].director_name , imdbScore : movieQ[0].imdb_score , movName : movieQ[0].movie_title , actorOne : movieQ[0].actor_1_name , movCountry : movieQ[0].country , movYear : movieQ[0].title_year , movLanguage : movieQ[0].language , movRev : movieQ[0].num_user_for_reviews});


	 		});
	 		console.log(movieQ[0].director_name + "<br>" + movieQ[0].country + "<br>"  + movieQ[0].imdb_score + "<br>" + movieQ[0].title_year  +"<br> " +   movieQ[0].num_user_for_reviews);
	 		

	 	}

	 });
	 	
	 

});




module.exports = router;
