var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/minor_db');

var userSchema = mongoose.Schema({
	name : String,
	age : Number,
	country : String,
	password : String,
	username : String,
});
var User = mongoose.model("user" , userSchema);

router.get('/login' , function(req , res , next){
	res.render('log2.html');
});
router.post('/session' , function(req , res , next){
	console.log("We are " + req.body.userName + " and " + req.body.userPassword);
	var query1 = User.find({username: req.body.userName});
	//query1.select();
	query1.exec(function(err , userQ){
		if(err)
		{
			console.log("THERE IS SOME ERROR ARCHIT");
		}
		else{
			console.log("Dala hua password - " + req.body.userPassword);
			console.log(userQ);
			console.log("%s " ,  userQ[0].password );

		if(userQ[0].password != req.body.userPassword){
			res.render('alert.html');
			//	res.render('log2.html');

			//alert("Hello! I am an alert box!!");

;}
			else
			{
					res.send("You Are Connected " + req.body.userName);

			}
		}
	});
	// var query = User.find({name: "Archit Chauhan"});
	// query.exec(function(err , user){
	// 	if(err){
	// 		console.log("ERROR");
	// 	}
	// 	else
	// 	console.log(user[0].name);
		
	// })
	// User.find(function(err , response){
	// 	res.json(response);
	// });
})
module.exports = router;