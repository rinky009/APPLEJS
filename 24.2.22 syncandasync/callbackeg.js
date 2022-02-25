const a=2;
const b=5;
let add=0;
setTimeout(()=>{
    console.log('Inside');
    add=a+b;
},1000);
console.log('outside');
console.log('welcome');
setTimeout(()=>{
    console.log('inside2');
    //callback will kept at places where delay is involed.all callback are anonymous functions
},3000);
console.log('outside2');
console.log('hi');