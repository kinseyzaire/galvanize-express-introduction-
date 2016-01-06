var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Baby\'s First Express',
     namey: 'Kinsey'
  });
});

module.exports = router;
