var promise = new Promise(function(resolve,reject){
 
  var jsondata = parsePromised(process.argv[2]);
   resolve(jsondata);
  
});

promise.then(function(jsondata){
  console.log(jsondata);
}).then(null,function(err){
  console.log(err);
});

function parsePromised(file){

  var jsonData = JSON.parse(file);
  return jsonData;
 
}