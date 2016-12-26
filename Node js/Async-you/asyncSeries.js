var async = require('async');
var http = require('http');

async.series({
	requestOne : function(done){
		var body='';
		http.get(process.argv[2],function(res){
			
			res.on('data',function(data){
				body+=data.toString();
			});
			res.on('end',function(){
				done(null,body);
			});
		}).on('error',function(err){
		done(err);
		});
	},
	requestTwo : function(done){
		var body='';
		http.get(process.argv[3],function(res){
			res.on('data',function(data){
				body+=data.toString();
			});
			res.on('end',function(){
				done(null,body);
			});
		}).on('error',function(err){
			done(err);
		});
	}
},  function(err, result){
		if(err)
			console.log(err);
		console.log(result);
}

);