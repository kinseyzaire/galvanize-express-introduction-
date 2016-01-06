var express = require('express'),
  app = express();

var addition = function(a,b){
   a = a * 1;
   b = b * 1;
   var answer = a + b;
   return String(answer);
};

  app.get("/add/:a/:b", function (req, res) {
     var a = req.params.a;
     var b = req.params.b;
     var answer = addition(a,b);
    res.send( answer );
  });

  // Start the server and make our web app available on http://localhost:3000
  app.listen(3000, function () {
    console.log("Starting a server on localhost:3000");
  });
