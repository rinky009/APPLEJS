var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/loginForm', function(req, res, next) {
  res.render('login',{errMsg:'',msg:''});
});


module.exports = router;


