var async = require('async');
// generate 5 users
async.times(5, function(n, next) {
	next(null, 'user' + (n + 1));
}, function(err, users) {
    // we should now have 5 users
	console.log(users);
});