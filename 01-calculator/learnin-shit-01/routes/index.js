var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Calculator' });
});

// I tried to make it so that instead of add, sub, mult, or div
// I used :maths in the URL to then be able to pull the math functions out
// and call return c = maths() which accesses a separate calc func of the same name
// it didn't work. is there a way to use a variable that is a String
// as a trigger for a function with the same name?????

/* GET addition answer. */
router.get('/add/:a/:b', function(req, res, next) {
  var a = req.params.a*1, b = req.params.b*1, maths = req.params.maths;
  var c = a+b;
  c = String(c);
  res.send(c);
});

/* GET subtraction answer. */
router.get('/sub/:a/:b', function(req, res, next) {
  var a = req.params.a*1, b = req.params.b*1;
  var c = a-b;
  c = String(c);
  res.send(c);
});

/* GET multiplication answer. */
router.get('/mult/:a/:b', function(req, res, next) {
  var a = req.params.a*1, b = req.params.b*1;
  var c = a*b;
  c = String(c);
  res.send(c);
});

/* GET division answer. */
router.get('/div/:a/:b', function(req, res, next) {
  var a = req.params.a*1, b = req.params.b*1;
  var c = a/b;
  c = String(c);
  res.send(c);
});

module.exports = router;
