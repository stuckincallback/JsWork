var fs=require('fs');
var path=require('path')
var path=process.argv[2];
function asynIO(path){
	fs.readFile(path,function(err,data){
		var string=data.toString();
			
		var count=string.split("\n").length;
		console.log(count-1);
			});
}
asynIO(path);