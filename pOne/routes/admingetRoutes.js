var express = require('express');
const sql = require('mssql');
var router = express.Router();

router.get('/admingetRecord', function(req, res, next) {
    const pool = require('../sqlconn');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
   .query(`select * from admin`);
   console.dir(result)
    res.render('admingetRecord',{ student: result.recordset});

  }).catch((e) => {
    console.error(e);
})
});

router.get('/admindeleteRecord/:id', function(req, res, next) {
  const pool = require('../sqlconn');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
  .query(`DELETE FROM admin WHERE aid=${req.params.id}`);
    res.redirect('/admingetRecord');

  }).catch((e) => {
    console.error(e);
  })
});

router.get('/admingetRecordid/:id', function(req, res, next) {
  const pool = require('../sqlconn');
pool.getPool().then(async (pool) => {
  let result = await pool.request()
  .input('aid', sql.Int,req.params.id)
  .query(`select * from admin WHERE aid=@aid`);
  res.render('adminedit', { student: result.recordset[0]});
  
}).catch((e) => {
  console.error(e);
})
});

router.post('/adminupdateRecordbyid', function(req, res, next) {
  const pool = require('../sqlconn');
pool.getPool().then(async (pool) => {
  let result = await pool.request()
    .input('name', sql.VarChar,req.body.name)
   .input('email', sql.VarChar,req.body.email)
   .input('password', sql.VarChar,req.body.password)
   .input('panno', sql.Int,req.body.panno)
   .query(`UPDATE admin SET name=@name,password=@password,email=@email,panno=@panno
  WHERE aid=${req.query.id}`);
  res.redirect('admingetRecord')

}).catch((e) => {
  console.error(e);
 })
});

module.exports = router;