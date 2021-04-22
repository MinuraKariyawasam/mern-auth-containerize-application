var express = require('express');
var router = express.Router();

var User = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user', async function(req, res, next) {
  try{
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
  }catch (error){
    console.log(error);
  }
});

module.exports = router;
