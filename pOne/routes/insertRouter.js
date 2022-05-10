const{query}=require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/insert', function(req, res, next) {
    const conn = require('../connmongo');    
    conn.connFun().then(async (db) => {
    const collection = db.collection('person');
    const findResult = await collection.insertmany([{name:'marry',age:22,address:'pune'},
    {name:'harry',age:44,address:'mumbai'}]).toArray();
    console.log(insertResult);
    res.render('insert', {student:insertResult});


        }).catch((e) => {
        console.log(e);
        })   
 });
 module.exports = router;
