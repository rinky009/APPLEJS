var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/studentDetails', function(req, res, next) {
  res.render('studentDetails', { studentData: {name:'Oppo',age:22,salary:10000,name1:'Ranoli',
  age1:55,salary1:300000,name2:'Sakti',age2:34,salary2:40000}});
});

module.exports = router;
