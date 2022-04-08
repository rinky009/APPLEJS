var express = require('express');
const sql = require('mssql');
var router = express.Router();

router.get('/getRecord', function(req, res, next) {
    const pool = require('../sqlconn');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
   .query(`select * from Userlogin`);
   console.dir(result)
    res.render('getRecord', { student: result.recordset});

  }).catch((e) => {
    console.error(e);
})
});

router.get('/deleteRecord/:id', function(req, res, next) {
  const pool = require('../sqlconn');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
  .query(`DELETE FROM Userlogin WHERE uid=${req.params.id}`);
    res.redirect('/getRecord');

  }).catch((e) => {
    console.error(e);
  })
});

router.get('/getRecordid/:id', function(req, res, next) {
  const pool = require('../sqlconn');
pool.getPool().then(async (pool) => {
  let result = await pool.request()
  .input('uid', sql.Int,req.params.id)
  .query(`select * from Userlogin WHERE uid=@uid`);
  res.render('edit', { student: result.recordset[0]});
  
}).catch((e) => {
  console.error(e);
})
});

router.post('/updateRecordbyid', function(req, res, next) {
  const pool = require('../sqlconn');
pool.getPool().then(async (pool) => {
  let result = await pool.request()
    .input('name', sql.VarChar,req.body.name)
   .input('password', sql.VarChar,req.body.password)
   .input('gender', sql.VarChar,req.body.gender)
   .input('education', sql.VarChar,req.body.education)
   .input('pincode', sql.Int, req.body.pincode)
   .input('panno', sql.Int,req.body.panno)
   .query(`UPDATE Userlogin SET name=@name,  password=@password, gender=@gender, education=@education, pincode=@pincode, panno=@panno
  WHERE uid=${req.query.id}`);
  res.redirect('getRecord')

}).catch((e) => {
  console.error(e);
 })
});

module.exports = router;