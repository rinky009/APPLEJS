// java script is asynchronous - execution goes after another, but it will not wait.
const a=2;
const b=5;
let add=0;
setTimeout(()=>{
   // console.log('Inside');
    add=a+b;
},1000);
console.log('outside');