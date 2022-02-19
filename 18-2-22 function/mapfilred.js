const arr=[1,2,3,4,5,6,7];
const newArr=arr.filter(a=>a%2===0);
console.log(`Filter Output ${newArr}`);
const newArr1=arr.map(a=>a*a);
console.log(`Map Output ${newArr1}`);
const newArr2=arr.reduce((a,b)=>a+b);
console.log(`Reduce Output ${newArr2}`);
