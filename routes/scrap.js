var express = require('express');
var fs = require('fs');
var request = require('request');
var router = express.Router();
var path = require('path');
var cheerio = require('cheerio');
var app     = express();
var i=0,j;
router.get('/scrape', function(req, res){
 
url = 'https://w...content-available-to-author-only...z.in/';
url1 = 'https://w...content-available-to-author-only...z.in/category/hollywood-news/';
url2= 'https://w...content-available-to-author-only...z.in/category/bollywood-news/';
 
request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);
 
    var title, release, rating,k=[];
    var json = { title : "", release : "", rating : ""};
 
    $('h2.grid-title').each(function(){
        var data = $(this);
        title = data.text();
        k.push(title);            
        //release = data.link();
        i++;
        json.title = title;
        json.release = release;
    })  
}
 
// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function
/*
fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
 
    console.log('File successfully written! - Check your project directory for the output.json file'+ i + k);
 
})*/
 
for(j=0;j<i;j++)
    	console.log(k[j]);
 
// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
res.render('wk.html',{k:k});
 
    }) ;
})
 
 
 exports = module.exports = router;
 
 