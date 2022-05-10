var express = require('express');
var router = express.Router();




router.get('/BankForm',function(req,res,next) {
res.render('Banklogin',{errMsg:'',msg:''});
    });
   
   
    router.post('/BankDetails',function(req,res,next) {
    res.render('submitbank');
      });
      
  
      
  module.exports = router;