var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.createConnection('mongodb://localhost/minor_db');

router.post('/home' , function(req  , res ){
	res.render('wk.html');
});

module.exports = router;