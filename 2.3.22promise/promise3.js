const fs=require('fs');
const funRead=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./sample.txt','utf8',(err,data)=>{
            if(err){
                console.error(err)
                reject(err)
            }
            resolve(data)
        })
    })
}
funRead().then((result)=>{
    console.log('then block');
    return new Promise((resolve,reject)=>{
    console.log(result);
    fs.appendFile('sample.txt','bangalore',(err)=>{
        if(err){
            return err;
        }
        console.log('2nd block');
        return resolve('append successful');
    })
})
}).then((msgAppend)=>{
    console.log(msgAppend);
    fs.readFile('sample.txt','utf8',(err,dataR)=>{
        if(err){
            console.error(err);
            throw err;
        }
        console.log('3rd block');
        console.log(dataR);
 }) 
 }).catch((err)=>{
     console.error('catch block');
     console.error(err);
 })
