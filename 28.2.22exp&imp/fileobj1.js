const fs=require('fs');
fs.readFile('./sample.text','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data)
});
console.log(12345);