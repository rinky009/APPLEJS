const funA=()=>{
    setTimeout(function(){
        console.log('welcome fun1');
    },3000);
}
const funB=()=>{
    console.log('welcome fun2')
}
funB();
funA();