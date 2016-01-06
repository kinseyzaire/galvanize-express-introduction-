var express = require('express');
var router = express.Router();

var verses = [{
   title: 'verse 1',
   words: 'This is the song that doesn\'t end',
   img: 'http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg',
   nextV: '/v2',
   prevV: '/v4',
   youTube: 'https://www.youtube.com/watch?v=HNTxr2NJHa0'
},{
   title: 'verse 2',
   words: 'It just goes on and on my friends',
   img: 'http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg',
   nextV: '/v3',
   prevV: '/',
   youTube: 'https://www.youtube.com/watch?v=HNTxr2NJHa0'
},{
   title: 'verse 3',
   words: 'Some people, started singing it not knowing what it was',
   img: 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg',
   nextV: '/v4',
   prevV: '/v2',
   youTube: 'https://www.youtube.com/watch?v=HNTxr2NJHa0'
},{
   title: 'verse 4',
   words: 'And they\'ll continue singing it forever just because',
   img: 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg',
   nextV: '/',
   prevV: '/v3',
   youTube: 'https://www.youtube.com/watch?v=HNTxr2NJHa0'
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', verses[0]);
});
router.get('/v2', function(req, res, next) {
  res.render('index', verses[1]);
});
router.get('/v3', function(req, res, next) {
  res.render('index', verses[2]);
});
router.get('/v4', function(req, res, next) {
  res.render('index', verses[3]);
});

module.exports = router;
