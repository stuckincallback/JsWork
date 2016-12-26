var express = require('express');
var app = express();
var fs = require('fs');

var data = '';
var obj;
data = fs.readFileSync(process.argv[3]);



  console.log(data.toString());
  obj = JSON.parse(data.toString());


app.get('/books',function(req, res){
  res.send(obj);
  res.end();
});

app.listen(process.argv[2]);