var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/authe', function (req, res, next) {
    const privateKey = '!@#DFTbnhu*';
    const pool = require('../sqlconn');
    if (req.body.aid&&req.body.password) {
        pool.getPool().then(async (pool) => {
            let result = await pool.request()
             .input('aid', req.body.aid)
            .input('password', req.body.password)
             .query('SELECT * FROM admin WHERE aid = @aid AND password=@password');
            if (result.recordset.length) {
                try {
                const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' }); 
                        const info = {
                            username: result.recordset[0].uid,
                            code: token,
                            role: 'admin'
                        }
                        res.cookie('info', info);
                        
                        res.redirect('/welcomadmin')
                }catch(err) {
                    res.render('adminlogin', { errMsg: err});
                }

            } else {
                res.render('adminlogin', { errMsg: 'Record not found or invalid user name password'});
            }
        }).catch((e) => {
            console.error(e);
        })
    } else {
        res.render('adminlogin', { errMsg: 'Enter aid and password'});
    }
});



router.get('/welcomadmin', function (req, res) {
    res.render('welcomadmin',{msg: ''});
});

module.exports = router;