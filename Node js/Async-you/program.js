var http = require('http');
var async = require('async');
var fs = require('fs');
async.waterfall([
	function(cb){
		var url = '';
		fs.readFile(process.argv[2],function(err,data){
			cb(null,data);		
		});
	},
	function(url,cb){
		var body = '';
		http.get(url.toString(),function(res){
			res.on('data',function(data){
				body+=data.toString();
			});
			res.on('end',function(){
				cb(null,body);
			});
		}).on('error',function(err){
			cb(err);
		});
	}],function(err,result){
		if(err)
			return console.log(err);
		console.log(result);
	}
);