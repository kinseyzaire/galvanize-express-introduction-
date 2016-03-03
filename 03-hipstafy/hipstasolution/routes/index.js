var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hipstafy' });
});

/* hipsta-this-shit */
var formInfo;
router.post('/', function (req, res, next) {
  formInfo = req.body;
  console.log(formInfo);
});
/* GET solution page. */
router.get('/hipstasolution', function(req, res, next) {
  res.render('answers', formInfo);
});

module.exports = router;
