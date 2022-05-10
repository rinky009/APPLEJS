
var express = require('express');
var router = express.Router();
const sql = require('mssql');

/* GET users listing. */
router.get('/mgsshow', function(req, res, next) {
  res.render('mgsEnter');
});

//router.post('/postRegDetails', function(req, res, next) {
    
   // res.send(req.body);
  //});
router.post('/mgssageSubmit', function(req, res, next) {
    const pool=require('../sqlconn');
    pool.getPool().then(async (pool)=>{
    let result=await pool.request()
    .input('mid',sql.Int,req.body.mid)
    .input('massage',sql.VarChar,req.body.massage)
    .input('date',sql.DateTime,req.body.date)
    .query('INSERT INTO comment values(@mid,@massage,@date)');
    console.dir(result)
    res.redirect('/welcomadmin');
    }).catch((e)=>{
      console.error(e)
    })
    
  });

module.exports = router;

