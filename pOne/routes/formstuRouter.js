/*var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/studentForm', function (req, res, next) {
  const privateKey = '!@#DFTbnhu*';
  console.log(req.cookies.loggedIn.token);
  if (req.cookies.loggedIn) {
    jwt.verify(req.cookies.loggedIn.token, privateKey, { algorithm: 'HS256' }, function (err, decoded) {
      if (err) {
        res.render(401).send('Your session timedout, please login again');
      } else {
        console.log(decoded) 
        res.render('showregs');
      }
    });
  } 

});
var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/studentForm', function(req, res, next) {
  res.render('showregs');
});

//router.post('/postRegDetails', function(req, res, next) {
    
   // res.send(req.body);
  //});
router.post('/regsDetails', function(req, res, next) {
    const pool=require('../sqlconn');
    pool.getPool().then(async (pool)=>{
let result=await pool.request()
        .input('uid',sql.Int,req.body.uid)
        .input('name',sql.VarChar,req.body.name)
        .input('email',sql.VarChar,req.body.name)
        .input('password',sql.NVarChar,req.body.password)
        .input('gender',sql.VarChar,req.body.gender)
        .input('education',sql.VarChar,req.body.education)
        .input('pincode',sql.Int,req.body.pincode)
        .input('panno',sql.Int,req.body.panno)
        .query('INSERT INTO Userlogin values(@uid,@name,@email,@password,@gender,@education,@pincode,@panno)');
   console.dir(result)
  // res.send(req.body);
   res.redirect('/getRecord');

    }).catch((e)=>{
      console.error(e)
    })
    
  });

module.exports = router;*/

var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/studentForm', function (req, res, next) {
        res.render('showregs');
       
      });


router.post('/regsDetails', function (req, res, next) {
  const pool = require('../sqlconn');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
    .input('uid',sql.Int,req.body.uid)
    .input('name',sql.VarChar,req.body.name)
    .input('email',sql.VarChar,req.body.name)
    .input('password',sql.NVarChar,req.body.password)
    .input('gender',sql.VarChar,req.body.gender)
    .input('education',sql.VarChar,req.body.education)
    .input('pincode',sql.Int,req.body.pincode)
    .input('panno',sql.Int,req.body.panno)
    .input('attendenceCount', sql.Int, 0)
     .input('lastUpdatedDate', sql.DateTime, req.body.lastUpdatedDate)
     .input('presentDate', sql.DateTime, req.body.presentDate)
      .query(`INSERT INTO Userlogin Values(@uid,@name,@email,@password,@gender,@education,
        @pincode,@panno,@attendenceCount,@lastUpdatedDate,@presentDate)`);
    console.dir(result)
    res.redirect('/loginForm');

  }).catch((e) => {
    console.error(e);
  })

});

module.exports = router;