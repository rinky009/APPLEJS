const { query } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.delete('/delete', function(req, res, next) {
const conn = require('../connmongo');    
conn.connFun().then(async (db) => {
const collection = db.collection('person');
const deleteResult = await collection.deleteMany({ age: 16 });
console.log( deleteResult);
res.render('delete',{student:deleteResult});

        
    }).catch((e) => {
        console.log(e);
    })   
 
    
});
module.exports = router;