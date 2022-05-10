var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const privateKey = '!@#DFTbnhu*';
  const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' });
  jwt.sign({ foo: 'bar' }, privateKey, function(err, token) {
    if (err) {
      console.log(err);
      res.status(500).send('Something went wrong');
    } else {
      console.log(token);
      const cookieValue = {
        userName : 'Ram',
        role : 'student',
        token : token
      }
      res.cookie('loggedIn', cookieValue, {maxAge: 150000, secure:false, httpOnly:false}); //Sets name = express
      res.render('index', { title: 'Express' });
    }
    
  });
  
});

module.exports = router;
