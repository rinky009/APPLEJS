var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');
const verifyJwtAuth = require('../utils/authorization')

router.get('/about', function (req, res, next) {
    try {
        verifyJwtAuth(req.cookies.info.code).then((result) => {
            if (result === 'Verified Successfully') {
                res.render('about');
            } else {
                res.send('<h3>login please!</h3>')
            }
        })
    } catch (err) {
        console.log('incorrect token!');
        res.send('<h3>login please!</h3>')
    }
});
module.exports = router;