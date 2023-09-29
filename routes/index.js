var express = require('express');
var router = express.Router();
var db = require("../models/index.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/db', function(req, res, next) {
  db.checkDB();
  res.send();
});

module.exports = router;
