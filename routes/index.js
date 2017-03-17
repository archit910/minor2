express = require('express');
router = express.Router();
var path = require('path');

router.get('/home' , function(req , res , next){
	res.render('index.html');
});
router.get('/home2' , function(req , res , next){
	res.render('test.html');
});

module.exports = router;