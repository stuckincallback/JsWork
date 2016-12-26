var through=require('through2');

var write= function write(buffer, encoding, next){
	this.push(buffer.toString().toUpperCase());
	next();
}
var end=function end(done){
	this.push(null);
	done();
};
var stream = through(write,end);

process.stdin.pipe(stream).pipe(process.stdout);

