let promiseCleanRoom=new Promise(function(resolve,reject)
{
    classRoom=true;
    if(classRoom){
        resolve('cleaned the Room');
    }
    else{
        reject('Broke the promise');
    }
});
promiseCleanRoom.then((result)=>{
    console.log(result)

}).catch((result)=>{
    console.log(result)
})