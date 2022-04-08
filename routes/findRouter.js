
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/find', function(req, res, next) {
    const conn = require('../connmongo');    
    conn.connFun().then(async (db) => {
    const collection = db.collection('person');
    const findResult = await collection.find({}).toArray();
    console.log( findResult);
    res.render('find',{student:findResult});
    
                    
    }).catch((e) => {
        console.log(e);
        })   
                     
    });
    
   module.exports = router;