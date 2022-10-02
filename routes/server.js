var express = require("express");
var app = express.Router();

app.get("/", (req, res) => {
res.render("server", {title: "Express"})
});

app.get("/server", function(req, res) {
    res.render("server");
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get("/projects", function(req, res) {
    res.render("projects");
});

app.get("/services", function(req, res) {
    res.render("services");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});


module.exports = app;

