function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name =  "doido";
    callback(name);
  }
  
  processUserInput(greeting);