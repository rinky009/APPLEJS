var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/admin', function(req, res, next) {
  res.render('adminlogin',{errMsg:'',msg:''});
});

router.post('/AdminDetails', function(req, res, next) {
  res.render('adminshowregs');
});

module.exports = router;


