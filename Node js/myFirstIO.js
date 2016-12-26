var fs=require('fs');
var path=process.argv[2];
function readFile(path){
	var data=fs.readFileSync(path);
	var str=data.toString();
	//console.log(str);
	var count=str.split("\n").length;
	//console.log(count);
	return count-1;
}
console.log(readFile(path));