const calobj=require('./expobj');
//console.log(calobj.add(2,4));
//Destructing the object
const{add,sub}=require('./expobj');
console.log(add(34,45));
console.log(sub(34.12));