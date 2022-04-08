var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/addname', function(req, res, next) {
    const details={model:2022,processor:req.processor};//put body here
    details.name=req.body.name;
  res.render('Details', { mobileData: details});//pass the detail
});

module.exports = router;
