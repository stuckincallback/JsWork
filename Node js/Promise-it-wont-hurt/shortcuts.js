var promise = Promise.resolve('SECRET VALUE');

promise.then(console.log);
promise.catch(function(err){
  console.log(err);
});