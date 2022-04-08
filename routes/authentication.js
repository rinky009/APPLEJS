var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/auth', function (req, res, next) {
    const privateKey = '!@#DFTbnhu*';
    const pool = require('../sqlconn');
    if (req.body.uid&&req.body.password) {
        pool.getPool().then(async (pool) => {
            let result = await pool.request()
             .input('uid', req.body.uid)
            .input('password', req.body.password)
             .query('SELECT * FROM Userlogin WHERE uid = @uid AND password=@password');
            if (result.recordset.length) {
                try {
                const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' }); 
                        const info = {
                            username: result.recordset[0].uid,
                            code: token,
                            role: 'Userlogin'
                        }
                        res.cookie('info', info);
                        
                        res.redirect('/mainPage')
                }catch(err) {
                    res.render('login', { errMsg: err});
                }

            } else {
                res.render('login', { errMsg: 'Record not found or invalid user name password'});
            }
        }).catch((e) => {
            console.error(e);
        })
    } else {
        res.render('login', { errMsg: 'Enter uid and password'});
    }
});



router.get('/mainPage', function (req, res) {
    res.render('mainPage');
});

module.exports = router;