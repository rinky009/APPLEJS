var express = require('express');
const sql = require('mssql');
var router = express.Router();

router.get('/mgsgetRecord',function(req, res, next) {
const pool = require('../sqlconn');
  pool.getPool().then(async (pool) => {
 let result = await pool.request()
.query(`select * from comment order by date desc`);
console.dir(result)
res.render('mgsgetRecord',{ student: result.recordset});
 }).catch((e) => {
    console.error(e);
})
});

router.get('/mgsdeleteRecord/:id', function(req, res, next) {
  const pool = require('../sqlconn');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
  .query(`DELETE FROM comment WHERE mid=${req.params.id}`);
    res.redirect('/mgsgetRecord');

  }).catch((e) => {
    console.error(e);
  })
});

router.get('/mgsgetRecordid/:id', function(req, res, next) {
  const pool = require('../sqlconn');
pool.getPool().then(async (pool) => {
  let result = await pool.request()
  .input('mid', sql.Int,req.params.id)
  .query(`select * from comment WHERE mid=@mid`);
  res.render('mgsedit', {student: result.recordset[0]});
  
}).catch((e) => {
  console.error(e);
})
});

router.post('/mgsupdateRecordbyid', function(req, res, next) {
  const pool = require('../sqlconn');
pool.getPool().then(async (pool) => {
  let result = await pool.request()
    .input('massage', sql.VarChar,req.body.massage)
   .input('date', sql.DateTime,req.body.date)
   .query(`UPDATE comment SET massage=@massage,date=@date
  WHERE mid=${req.query.id}`);
  res.redirect('mgsgetRecord')

}).catch((e) => {
  console.error(e);
 })
});

module.exports = router;