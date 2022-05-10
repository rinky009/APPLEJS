var express = require('express');
const sql = require('mssql');
var router = express.Router();


router.get('/logout', function (req, res, next) {
    res.clearCookie('jwtToken')

    res.redirect('/loginForm')
});

module.exports = router;
