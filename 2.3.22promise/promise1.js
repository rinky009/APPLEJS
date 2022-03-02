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
    console.log(result);
}).catch((err)=>{
    console.error('catch block');
    console.error(err);
})