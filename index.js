var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N�o sou seco n�o!' });
});

module.exports = router;
