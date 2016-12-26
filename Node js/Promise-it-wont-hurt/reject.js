var rejectFunction =  function(err){
  console.log(err.message);
}

var promise = new Promise(function(fulfill, reject){
  setTimeout(function(){
    reject(new Error('REJECTED!'));
  },300);
});

promise.then(function(){},rejectFunction);
