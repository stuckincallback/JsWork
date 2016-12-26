var async = require('async');
var http = require('http');

var hostname = process.argv[2];
var portname = process.argv[3];
var url = 'http://' +  hostname + ':' + portname;

async.series({
    one:function(done){
	async.times(5,function(n,next){
		repeat(++n,function(err){
			next(null,err);
		})
	},
	function(err, result){
		if(err){
			done(err);
		}
		else{
			done(null,'saved');
		}
	});
    },
	two:function(done){
		http.get(url + '/users', function(res){
			var body = "";
			res.on('data', function(chunk){
			body += chunk.toString();
			console.log(body);
		});

      res.on('end', function(){
        done(null, body);
      });
    }).on('error', done);
	}},
    function(err,result){
	 if (err) return console.log(err);
  console.log(result);		  
});

function repeat(id,callback){
	var postdata = JSON.stringify({'user_id': id});
	var opt = {
		hostname : hostname,
		port : portname,
		path : 'users/create',
		method : 'POST',
		headers: {
			'Content-Length': postdata.length
		}
	};
	var req = http.request(opt,function(res){
		res.on('data',function(data){});
		res.on('end',function(){
			callback(null);
		});
	});
	req.on('error',function(err){
		callback(err);
	});
	req.write(postdata);
	req.end();
}