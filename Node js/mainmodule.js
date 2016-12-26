var moduleFilter = require('./modulefilter.js');

moduleFilter(process.argv[2], process.argv[3], function(err, list)	{
	if(err)	{
		console.log(err);
	}
	list.forEach(function(filename)	{
		console.log(filename);
	});
});