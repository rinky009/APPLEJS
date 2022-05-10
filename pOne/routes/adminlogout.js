var express = require('express');
const sql = require('mssql');
var router = express.Router();


router.get('/adminlogout', function (req, res, next) {
    res.clearCookie('jwtToken')

    res.redirect('/admin')
});

module.exports = router;
