var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render("server", {title: "Home"})
    });
    
router.get("/server", function(req, res) {
res.render("server");
});

router.get("/views/about", function(req, res) {
    res.render('about');
});

router.get("/views/projects", function(req, res) {
    res.render("projects");
});

router.get("/views/services", function(req, res) {
    res.render("services");
});

router.get("/views/contact", function(req, res) {
    res.render("contact");
});

module.exports = router;

