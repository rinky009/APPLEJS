
let promTask=new Promise(function(resolve,reject){
    let taskcompleted=true;
        if(taskcompleted)
        {
            resolve('great work');
        }
        else
        {
              reject('need to work hard');
        }
    });
    promTask.then((result)=>{
        console.log(result)
    }).catch((result)=>{
        console.log(result);
    })
    
    