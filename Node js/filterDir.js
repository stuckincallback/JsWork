var fs=require('fs');
var pathM=require('path')
var path=process.argv[2];
function filterDir(path){
	fs.readdir(path,function(err,list){
		list.forEach(function(filename){
			if(pathM.extname(filename)=='.'+process.argv[3])
				console.log(filename);
		});
	});
}
filterDir(path);