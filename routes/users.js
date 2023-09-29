var express = require('express');
var router = express.Router();
const db = require("../models/index.js");

/* GET users listing. */
router.get('/',  async function(req, res, next) {
  const u = await db.Auth.User.findAll();
  
  res.send(u);
});

router.put('/admin', function(req, res, next) {
  res.json({data : "user admin"});
});

router.post('/', function(req, res, next) {
  console.log(req.body, req.params, req.query);
  const userData = req.body;
  db.Auth.User.create(userData).then((d) => {
    res.status(200).json(d);

  })
  .catch((err) =>{
    res.status(500).json(err);
  });
});

router.delete('/', function(req, res, next) {
  res.json({data : "user admin"});
});

module.exports = router;
