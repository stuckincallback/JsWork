var promise = new Promise(function(fulfill, reject){
  fulfill('MANHATTAN');
}).then(attachTitle).then(console.log);

function attachTitle(text){
  text = 'DR. '+text;
  return text;
}
