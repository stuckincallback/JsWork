var fs=require('fs');
var pathM=require('path')

function filterDir(dir, extension, callbackFunction){
	fs.readdir(dir,function(err,list){
		var fileNames = [];
		if(err)	{
			//
			console.log(err);
			callbackFunction(err, null);
			return;
		}
		for(var i = 0 ;i < list.length; i++)	{	
			if(pathM.extname(list[i])=='.'+extension)	{
				fileNames.push(list[i]);
			}
		}
		callbackFunction(null, fileNames);
	});
}
module.exports = filterDir;