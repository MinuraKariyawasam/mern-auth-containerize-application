var express = require('express');
var router = express.Router();

var User = require('../model/user');

/* GET users listing. */
router.get('/user', async function(req, res, next) {
  try{
    const result = await User.find();
    res.send(result);
  }catch (err){
    console.log(err.message);
  }
});

router.get('/user/:username', async function(req, res, next) {
    const username = req.params.username;
    try{
      const result = await User.find({"username": username});
      res.send(result);
    }catch (err) {
      console.log(err.message);
    }
});

router.post('/user', async function(req, res, next) {
  try{
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
    console.log(result);
  }catch (error){
    console.log(error.message);
  }
});

module.exports = router;
