var rejectFunction =  function(err){
  console.log(err.message);
}

var promise = new Promise(function(fulfill, reject){
  setTimeout(function(){
    reject('REJECTED!');
  },300);
});

promise.then();
promise.catch(rejectFunction);