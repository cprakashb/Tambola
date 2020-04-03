var express = require('express');
var router = express.Router();
var generateNumbers = require('./generateNumbers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getNumbers', function(req, res, next) {
  var numbers=generateNumbers();
 res.json({numbers})
});

module.exports = router;
