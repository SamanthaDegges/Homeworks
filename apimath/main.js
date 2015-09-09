var http = require('http');
//var request = require('request');

var PORT = 3000;


var server = http.createServer(function(req, res){
  //This function is a request handler. It calls requests that its given. Then, handles the response.

  var ifMath = req.url.split('/')[1];
  if (ifMath === "math") {
    var operator = req.url.split('/')[2];
    var num1 = parseInt(req.url.split('/')[3]);
    var num2 = parseInt(req.url.split('/')[4]);
    var result = 0;

  switch(operator){
    case 'add':
      { result = num1 + num2;
      res.write("The sum is "+result);
      console.log("The sum is: "+result);
      break;}
    case 'subtract':
      { result = num1 - num2;
      res.write("The difference is: "+result);
      var difference = 'difference';
      break;}
    case 'divide':
      { result = num1 / num2;
      res.write('The quotient is: '+result);
      var quotient = 31;
      break;}
    case 'multiply':
      { result = num1 * num2;
      res.write("The product is: "+result);
      break;}
    default:
      res.end("You've reached the default end of this request.");
  } res.end();
} else {
  res.end("You didn't enter 'math'.");
  }
});

server.listen(PORT, function(){
console.log("Server now listening on port"+PORT+' ! ;)');
  //listen is a asynchronous method so it takes time.
  //a server has to listen after it is turned on and ready. So, set this handlers callback function to happen within this listen function so that the server is on first, then listens.
});

console.log('returned end of file');
