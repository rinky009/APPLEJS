const fun2=() =>{
    console.log('fun3 is starting');
}
const fun1=()=>{
    console.log('fun1 is starting');
    fun2();
     console.log('fun2 is ending');
}
fun1();