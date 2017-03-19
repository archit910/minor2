var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/minor_db');

// router.get('/login' , function(req , res , next){
// 	res.render('log2.html');
// });

router.get('/signup' , function(req , res , next){
	res.render('index.html');
});
var userSchema = mongoose.Schema({
	name : String,
	age : Number,
	country : String,
	password : String,
	username : String,
});
var User = mongoose.model("User" , userSchema);
router.post('/welcome' , function(req , res){
	var myUser = req.body;
	// res.send("Added");
	//res.send(myUser.userName);
	var newUser = new User({
		name : myUser.userName,
		age : myUser.userAge,
		country : myUser.userNation,
		password :myUser.userPassword,
		username :myUser.userUserName,
	});
	newUser.save(function(req , res){

	});
	res.render('show_message.html' , {msg : "Thankyou Mr / Mrs " + myUser.userName + " For Sigining Up " + "You user name will be " + myUser.userUserName})
});
router.post('/allusers' , function(req , res){
	User.find(function(err , response){
		res.json(response);
	})
});
router.get('/alljson' , function(req , res){
	User.find(function(err , response){
		res.json(response);
	});
});
module.exports = router;
