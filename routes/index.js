var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
  
router.get("/server", function(req, res, next) {
  res.render("server");
});

router.get("/views/about", function(req, res, next) {
  res.render('about');
});

router.get("/views/projects", function(req, res, next) {
  res.render("projects");
});

router.get("/views/services", function(req, res, next) {
  res.render("services");
});

router.get("/views/contact", function(req, res, next) {
  res.render("contact");
});

module.exports = router;
