const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.put('/update', function(req, res, next) {
const conn = require('../connmongo');    
conn.connFun().then(async (db) => {
const collection = db.collection('person');
const updateResult = await collection.updateOne({ name: 'sam' }, { $set: { name: 'gori' } });
console.log( updateResult);
res.render('update',{student:updateResult});

        
    }).catch((e) => {
        console.log(e);
    })   
 
    
});
module.exports = router;