var express = require('express');
var router = express.Router();
const db = require("../models/index.js");
const bcrypt = require('bcryptjs');
const { where } = require('sequelize');

/* GET users listing. */
router.get('/',  async function(req, res, next) {
  const u = await db.Auth.User.findAll();
  
  res.send(u);
});

router.put('/admin', function(req, res, next) {
  res.json({data : "user admin"});
});


const CreateUser = async (req,res)=>{
  console.log(req.body, req.params, req.query);
  const userData = req.body;
  
  db.Auth.User.create(userData).then(async(userObj) => {
    let salt = await bcrypt.genSalt(10)
    userObj.password = await bcrypt.hash(userObj.password,salt)
    userObj.save().then((data)=>{
      res.status(200).json(userObj);
    })
    

  })
    .catch((err) => {
      res.status(500).json(err);
    });
}

router.post('/', function(req, res, next) {
    CreateUser(req,res)
  })
  
  router.post('/login',async function(req, res, next) {
    console.log(req.body)
    const {email,password} = req.body;
    const u = await db.Auth.User.findAll({
      where:{
        email: email
      }
    })
    console.log(u)
    if(u.lenght == 0){
      return res.status(400).json({message: "Nincs ilyen felhasználó"})
    }
    let isMatch = await bcrypt.compare(password,u[0].password)
    if(!isMatch){
      return res.status(400).json({message: "Rossz jelszó"})
    }
    const payload = {
      user:{
        id: u[0].id,
        email: u[0].email,
        firstname: u[0].firstname,
        lastname: u[0].lastname,
      }
    }

  })


router.delete('/', function(req, res, next) {
  res.json({data : "user admin"});
});

module.exports = router;
