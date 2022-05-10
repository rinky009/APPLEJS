
var express = require('express');
var router = express.Router();
const sql = require('mssql');

/* GET users listing. */
router.get('/mgsdisplayRecord', function(req, res, next) {
    const pool=require('../sqlconn');
    pool.getPool().then(async (pool)=>{
    let result=await pool.request()
   .query('select * from comment order by date desc');
    console.dir(result)
    res.render('mgsdisplayRecord',{student:result.recordset});
    }).catch((e)=>{
      console.error(e)
    });
    
  });

module.exports = router;

