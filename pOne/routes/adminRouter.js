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

});*/
var express = require('express');
var router = express.Router();
const sql = require('mssql');
const jwt = require('jsonwebtoken');


/* GET users listing. */
router.get('/adminForm', function(req, res, next) {
  res.render('adminlogin',{errMsg:'',msg:''});
});

router.get('/Formadmin', function(req, res, next) {
  res.render('adminshowregs');
    });

    router.post('/adminregsDetails', function(req, res, next) {
    const pool=require('../sqlconn');
    pool.getPool().then(async (pool)=>{
let result=await pool.request()
        .input('aid',sql.Int,req.body.aid)
        .input('name',sql.VarChar,req.body.name)
        .input('email',sql.VarChar,req.body.email)
        .input('password',sql.NVarChar,req.body.password)
         .input('panno',sql.Int,req.body.panno)
        .query('INSERT INTO admin values(@aid,@name,@email,@password,@panno)');
   console.dir(result)
  // res.send(req.body);
   res.redirect('/adminForm');

    }).catch((e)=>{
      console.error(e)
    })
    
  });

module.exports = router;

