var express = require('express');
var router = express.Router();
let controllerIndex = require('../controllers/index.controller');

/* GET home page. */
router.get('/', controllerIndex.home);

router.get("/views/about", controllerIndex.about);

router.get("/views/projects", controllerIndex.projects);

router.get("/views/services", controllerIndex.services);

router.get("/views/contact", controllerIndex.contact);

module.exports = router;
