var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/mobileDetails', function(req, res, next) {
  const privateKey = '!@#DFTbnhu*';
  console.log(req.cookies.loggedIn.token);
  // res.render('mobileDetails', { mobileData: {name:'Realme s3', model:2022, processor:req.query.processor} });
  if (req.cookies.loggedIn) {
    jwt.verify(req.cookies.loggedIn.token, privateKey,{ algorithm: 'HS256'}, function(err, decoded) {
      if (err) {
        res.status(401).send('Your session timedout, please login again');
      } else {
        console.log(decoded) // bar
        res.render('mobileDetails', { mobileData: {name:'Realme s3', model:2022, processor:req.query.processor} });
      }
    });
  } else {
    res.status(401).send('Your session timedout, please login again');
  }
  
});

router.get('/mobileDetails/:name', function(req, res, next) {
    res.render('mobileDetails', { mobileData: {name:'Realme s3', model:2022, type:req.params.name} });
});

module.exports = router;