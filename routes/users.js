var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render(
    'users',
    {
      title: 'Brandon',
      name: 'Brandon'
    }
    );
});

router.get('/Jogn', function(req, res, next) {
  res.render(
    'users',
    {
      title: 'John',
      name: 'John'
    }
    );
});

module.exports = router;
//mongoDB username = dbuser pass = X1YOgD2dBQeX5LqC