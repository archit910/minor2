var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/minor_db');

router.get('/login' , function(req , res , next){
	res.render('log2.html');
});
router.post('/session' , function(req , res , next){
	res.send("You Are Connected " + req.body.userName);
})
module.exports = router;