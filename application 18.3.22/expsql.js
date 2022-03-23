const express = require('express');
const bodyParser=require(`body-parser`);
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/insert',(req,res)=> {
const sql = require('mssql');
const pool = require('./expsql');
pool.getPool().then(async (pool) => {
let result = await pool.request()
.input('pid',sql.Int,22)
.input('name',sql.VarChar,'maths')
.input('price',sql.Int, 250)
.input('issueno',sql.Int,46)
.query('insert into book values(@pid,@name,@price,@issueno)');
 console.dir(result)
 res.send({status:200,message:'inserted successfully',employee:result});


  }).catch((e) => {
   console.log(e);
  })   


    });

  app.post('/update',(req,res)=> {
  const sql = require('mssql');
  const pool = require('./expsql');
  pool.getPool().then(async (pool) => {
  let result1 = await pool.request()
  .input('pid',sql.Int, 6)
 .query('update  book  set price=1000 where pid=@pid')
  console.dir(result1)
  res.send({status:200,message:'updated successfully',employee:result1});

  }).catch((e) => {
  console.log(e);
    })   

        });


app.post('/delete',(req,res)=> {
const sql = require('mssql');
const pool = require('./expsql');
pool.getPool().then(async (pool) => {
let result = await pool.request()
.input('pid',sql.Int, 7)
 .query('delete from  book  where pid=@pid')
 console.dir(result)
res.send({status:200,message:'deleted successfully',employee:result});

 }).catch((e) => {
console.log(e);
 })   

   });

  app.post('/getrecord',(req,res)=> {
  const sql = require('mssql');
  const pool = require('./expsql');
  pool.getPool().then(async (pool) => {
  let result = await pool.request()
  .query('select * from  book  ')
  console.dir(result)
  res.send({status:200,message:'get details successfully',employee:result});


  }).catch((e) => {
  console.log(e);
 })   

       });
       app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    }); 