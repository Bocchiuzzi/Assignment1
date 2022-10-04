var express = require("express");
var app = express.Router();

app.get("/", (req, res) => {
    res.render("server", {title: "Express"})
    });
    
app.get("/server", function(req, res) {
    res.render("server");
});

app.get("/views/about", function(req, res) {
    res.render('about');
});

app.get("/views/projects", function(req, res) {
    res.render("projects");
});

app.get("/views/services", function(req, res) {
    res.render("services");
});

app.get("/views/contact", function(req, res) {
    res.render("contact");
});

module.exports = app;

