var express = require('express');
const conn = require('../Mconnect');
var router = express.Router();




/* GET users listing. */
router.get('/submitbank',function(req,res,next) {
 res.render('submitbank');
  });


  router.post('/submitbank',function(req,res,next) {
  conn.connFun().then(async (db) => {
  const collection = db.collection('Banklogin');
  const insertResult = await collection.insertOne(req.body);
  console.log('Found documents=>',insertResult);
  console.log(insertResult);
  }).catch((e) => {
     console.log(e);
  }); 
  res.redirect('/BankForm');

});
   
  module.exports = router;

