var express = require('express');
var pug = require('jade');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'templates') || process.argv[3]);
app.set('view engine', 'jade');

app.get('/home', function(req,res){
	res.render('test.jade', {date: new Date().toDateString()});
})
app.listen(process.argv[2]);