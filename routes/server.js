var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
res.render("server", {title: "Express"})
});

module.exports = router;

