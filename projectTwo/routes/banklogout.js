var express = require('express');
var router = express.Router();


router.get('/banklogout', function (req, res, next) {
    res.clearCookie('jwtToken')

    res.redirect('/bankForm')
});

module.exports = router;
