var promise = new Promise(function(fullfill, reject){
  setTimeout(function(promise){
    
    fullfill('FULFILLED!');
  },300,promise);
  
});

promise.then(console.log);

promise.catch(console.log);