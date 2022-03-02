const fs=require('fs');
fs.readFile('./sample.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data)
const dataToBeAppend='i am doing program';
fs.appendFile('sample.txt',dataToBeAppend,(errA)=>{
    if(errA){
        console.error(errA);
        return;
    }
    /*fs.readFile('./sample.txt','utf8',(errR,dataR)=>{
if(errR){
    console.error(errR);
    return;
}
console.log(dataR);
})*/
})
})

