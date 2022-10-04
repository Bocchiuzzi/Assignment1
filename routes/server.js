var express = require("express");
var app = express.Router();

app.get("/", (req, res) => {
    res.render("server", {title: "Express"})
    });

app.get("/server", function(req, res) {
    res.render("server");
});

app.get("D:/Centennial/Semester 3/WebAppDev/Assignment1/views/about", function(req, res) {
    res.render('about');
});

app.get("file:/Centennial/Semester 3/WebAppDev/Assignment1/views/projects", function(req, res) {
    res.render("projects");
});

app.get("D:/Centennial/Semester 3/WebAppDev/Assignment1/views/services", function(req, res) {
    res.render("services");
});

app.get("D:/Centennial/Semester 3/WebAppDev/Assignment1/views/contact", function(req, res) {
    res.render("contact");
});


module.exports = app;

