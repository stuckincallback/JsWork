var fs=require('fs');
var path=process.argv[2];
function readFile(path){
	var data=fs.readFileSync(path);
	var str=data.toString();
	var count=str.split("\n");
	return count-1;
}
console.log(readFile(path));